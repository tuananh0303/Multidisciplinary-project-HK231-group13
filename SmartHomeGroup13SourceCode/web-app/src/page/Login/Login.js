
// import { Button, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.scss';
import { useMutationHooks } from '../../hooks/useMutationHook';
import Loading from '../../components/LoadingComponent/Loading';
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { jwtDecode } from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/slides/UserSlides';
import * as UserService from '../../services/UserService';
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';

const cx = classNames.bind(styles);
function Login() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const mutation = useMutationHooks((data) => UserService.loginUser(data));
    const { data, isLoading, isSuccess } = mutation;

    useEffect(() => {
        if (isSuccess) {
            // if (location?.state) {
            //     navigate(location?.state);
            // } else {
            //     navigate('/');
            // }
            localStorage.setItem('access_token', JSON.stringify(data?.access_token));
            localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token));
            if (data?.access_token) {
                const decoded = jwtDecode(data?.access_token);
                if (decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token);
                }
            }
        }
    }, [isSuccess]);

    const handleGetDetailsUser = async (id, token) => {
        const storage = localStorage.getItem('refresh_token');
        const refreshToken = JSON.parse(storage);
        const res = await UserService.getDetailsUser(id, token);
        dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }));
    };

    const handleOnchangeEmail = (value) => {
        setEmail(value);

    };

    const handleOnchangePassword = (value) => {
        setPassword(value);
    };

    const handleSignIn = () => {
        console.log('loginlogin');
        mutation.mutate({
            email,
            password,
        });
    };

    return (
        <div className={cx('wrapper')}>
            <img src={require('../../assets/img/home.png')} alt="BG" className={cx('background')} />
            <div className={cx('form')}>
                <h2 className={cx('title')}> LOG IN</h2>
                <div className={cx('input')}>

                    <InputForm
                        style={{ marginBottom: '20px' }}
                        placeholder="abc@gmail.com"
                        value={email}
                        onChange={handleOnchangeEmail}
                    />
                    {console.log(email)}
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px',
                            }}
                        >
                            {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
                        </span>
                        <InputForm
                            placeholder="password"
                            type={isShowPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handleOnchangePassword}
                        />
                        {console.log(password)}
                    </div>

                </div>
                {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}

                {/* <Loading isLoading={isLoading}> */}
                <Link to={'/MyDashBoard/DashBoard'}>
                    <ButtonComponent
                        disabled={!email.length || !password.length}
                        onClick={handleSignIn}
                        size={40}
                        styleButton={{
                            background: 'rgb(255, 57, 69)',
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '26px 0 10px',
                        }}
                        textbutton={'Login'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                    ></ButtonComponent>
                </Link>
                {/* </Loading> */}

                <div className={cx('footer')}>
                    <div className={cx('checkbox')}>
                        <Checkbox label="Remember Me" defaultChecked />
                        Remember Me
                    </div>
                    <Link to="/" className={cx('forgot')}>
                        Forgot Password
                    </Link>
                </div>
                <div className={cx('signup')}>
                    <p className={cx('title-3')}>Need an account?</p>
                    <Link to={'/signup'}>Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
