import * as React from 'react';
import Signup from './page/Signup';
import Login from './page/Login';
import MyDashBoard from './components/MyDashboard/MyDashBoard';
import DashBoardContent from './page/User/DashBoardContent/DashBoardContent';
import StaticContent from './page/User/StaticContent/StaticContent';
import SupportContent from './page/User/SupportContent/SupportContent';
import SettingContent from './page/User/SettingContent/SettingContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/MyDashBoard" element={<MyDashBoard />}>
                    <Route path="DashBoard" element={<DashBoardContent />} />
                    <Route path="Static" element={<StaticContent />} />
                    <Route path="Setting" element={<SettingContent />} />
                    <Route path="Support" element={<SupportContent />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/MyDashBoard" element={<MyDashBoard />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
