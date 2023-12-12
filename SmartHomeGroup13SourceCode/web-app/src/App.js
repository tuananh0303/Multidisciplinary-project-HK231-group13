import * as React from 'react';
import Signup from './page/Signup';
import Login from './page/Login';
import MyDashBoard from './components/MyDashboard/MyDashBoard';
import DashBoardContent from './page/User/DashBoardContent/DashBoardContent';
import StaticContent from './page/User/StaticContent/StaticContent';
import SupportContent from './page/User/SupportContent/SupportContent';
import SettingContent from './page/User/SettingContent/SettingContent';
import ProfileContent from './page/User/ProfileContent/ProfileContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { isJsonString } from './utils';
import * as UserService from './services/UserService';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser, updateUser } from './redux/slides/UserSlides';
import Loading from './components/LoadingComponent/Loading';

function App() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        setIsLoading(true);
        const { storageData, decoded } = handleDecoded();
        if (decoded?.id) {
            handleGetDetailsUser(decoded?.id, storageData);
        }
        setIsLoading(false);
    }, []);

    const handleDecoded = () => {
        let storageData = user?.access_token || localStorage.getItem('access_token');
        let decoded = {};
        if (storageData && isJsonString(storageData) && !user?.access_token) {
            storageData = JSON.parse(storageData);
            decoded = jwtDecode(storageData);
        }
        return { decoded, storageData };
    };

    UserService.axiosJWT.interceptors.request.use(
        async (config) => {
            // Do something before request is sent
            const currentTime = new Date();
            const { decoded } = handleDecoded();
            let storageRefreshToken = localStorage.getItem('refresh_token');
            const refreshToken = JSON.parse(storageRefreshToken);
            const decodedRefreshToken = jwtDecode(refreshToken);
            if (decoded?.exp < currentTime.getTime() / 1000) {
                if (decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
                    const data = await UserService.refreshToken(refreshToken);
                    config.headers['token'] = `Bearer ${data?.access_token}`;
                } else {
                    dispatch(resetUser());
                }
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        },
    );

    const handleGetDetailsUser = async (id, token) => {
        let storageRefreshToken = localStorage.getItem('refresh_token');
        const refreshToken = JSON.parse(storageRefreshToken);
        const res = await UserService.getDetailsUser(id, token);
        dispatch(updateUser({ ...res?.data, access_token: token, refreshToken: refreshToken }));
    };
    return (
        <Loading isLoading={isLoading}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/MyDashBoard" element={<MyDashBoard />}>
                        <Route path="DashBoard" element={<DashBoardContent />} />
                        <Route path="Static" element={<StaticContent />} />
                        <Route path="Setting" element={<SettingContent />} />
                        <Route path="Support" element={<SupportContent />} />
                        <Route path="Profile" element={<ProfileContent />} />
                    </Route>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/MyDashBoard" element={<MyDashBoard />} /> */}
                </Routes>
            </BrowserRouter>
        </Loading>
    );
}

export default App;
