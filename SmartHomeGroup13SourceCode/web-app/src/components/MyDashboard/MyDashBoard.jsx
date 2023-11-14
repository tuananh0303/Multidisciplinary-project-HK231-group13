import { Routes, Route, Link, Navigate } from 'react-router-dom';
import DashBoardContent from '../../page/User/DashBoardContent/DashBoardContent';
import SettingContent from '../../page/User/SettingContent/SettingContent';
import StaticContent from '../../page/User/StaticContent/StaticContent';
import SupportContent from '../../page/User/SupportContent/SupportContent';
import React, { useState } from 'react';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetIcon from '@mui/icons-material/Headset';
import { Avatar, Layout, Menu, Space, Button } from 'antd';
import avata from '../../assets/img/avata.jpg';
import smarthome from '../../assets/img/smart-home-logo-free-vector.jpg';
import ProfileContent from '../../page/User/ProfileContent/ProfileContent';
import LogoutIcon from '@mui/icons-material/Logout';
const { Sider, Content } = Layout;

const contentStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    left: '19%',
    margin: 'auto',
    width: '80%',
};
const siderStyle = {
    backgroundColor: '#001628',
    position: 'fixed',
    top: '-8px',
    margin: '0',
    padding: '0',
    height: '103vh',
};

const MyDashBoard = () => {
    return (
        <Space
            direction="vertical"
            style={{
                width: '100%',
                margin: '0',
                padding: '0',
                boxSizing: 'border-box',
            }}
        >
            <Layout
                style={{
                    padding: '0',
                    margin: '0',
                }}
            >
                <Sider style={siderStyle} width={'18%'}>
                    <div style={{ height: '5%' }}></div>
                    <Link to={'/MyDashBoard/DashBoard'}>
                        <Avatar
                            size={{ xs: 50, sm: 50, md: 50, lg: 50, xl: 100, xxl: 150 }}
                            src={smarthome}
                            style={{
                                margin: '10px auto',
                                display: 'block',
                            }}
                        />
                    </Link>
                    {/* <Avatar
                        size={{
                            xs: 4,
                            sm: 12,
                            md: 20,
                            lg: 44,
                            xl: 60,
                            xxl: 80,
                        }}
                        src={avata}
                        style={{
                            margin: '10px auto',
                            display: 'block',
                        }}
                    /> */}
                    <Link to={'/MyDashBoard/Profile'} style={{ ':hover': { textDecoration: 'underline black' } }}>
                        <a
                            style={{
                                display: 'block',
                                textAlign: 'center',
                                color: 'white',
                                fontSize: '3rem',
                                fontWeight: '400',
                            }}
                        >
                            Tuấn Anh
                        </a>
                    </Link>
                    <p
                        style={{
                            display: 'block',
                            textAlign: 'center',
                            color: 'white',
                        }}
                    >
                        Host
                    </p>
                    <Menu theme="dark" defaultSelectedKeys={['1']}>
                        <Menu.Item key={'1'} icon={<SpaceDashboardIcon />}>
                            <Link to={'/MyDashBoard/DashBoard'}>Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key={'2'} icon={<EqualizerIcon />}>
                            <Link to={'/MyDashBoard/Static'}>Static</Link>
                        </Menu.Item>
                        <Menu.Item key={'3'} icon={<SettingsIcon />}>
                            <Link to={'/MyDashBoard/Setting'}>Setting</Link>
                        </Menu.Item>
                        <Menu.Item key={'4'} icon={<HeadsetIcon />}>
                            <Link to={'/MyDashBoard/Support'}>Support</Link>
                        </Menu.Item>
                    </Menu>
                    <Link to={'/'}>
                        <Button
                            style={{
                                width: '80%',
                                height: '7%',
                                borderRadius: '10px',
                                position: 'absolute',
                                top: '88%',
                                left: '10%',
                                fontWeight: '700',
                            }}
                            icon={<LogoutIcon style={{ position: 'absolute', top: '35%', left: '20%' }} />}
                            compo
                        >
                            Logout
                        </Button>
                    </Link>
                </Sider>
                <Layout>
                    <Content style={contentStyle}>
                        <Routes>
                            <Route path="DashBoard" element={<DashBoardContent />} />
                            <Route path="Static" element={<StaticContent />} />
                            <Route path="Setting" element={<SettingContent />} />
                            <Route path="Support" element={<SupportContent />} />
                            <Route path="Profile" element={<ProfileContent />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Space>
    );
};
export default MyDashBoard;
