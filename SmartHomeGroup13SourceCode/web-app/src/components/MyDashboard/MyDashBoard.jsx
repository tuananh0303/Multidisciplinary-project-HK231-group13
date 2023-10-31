import { Routes, Route, Link } from 'react-router-dom';
import DashBoardContent from '../../page/User/DashBoardContent/DashBoardContent';
import SettingContent from '../../page/User/SettingContent/SettingContent';
import StaticContent from '../../page/User/StaticContent/StaticContent';
import SupportContent from '../../page/User/SupportContent/SupportContent';
import React from 'react';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetIcon from '@mui/icons-material/Headset';
import { Avatar, Layout, Menu, Space } from 'antd';
import avata from '../../assets/img/avata.jpg';
const { Sider, Content } = Layout;

const contentStyle = {
    backgroundColor: 'white',
    position: 'absolute',
    left: '19%',
    margin: 'auto',
    width: '80%',
};
const siderStyle = {
    backgroundColor: '#f2f0f0',
    position: 'fixed',
    top: '-8px',
    margin: '0',
    padding: '0',
    height: '101vh',
};

const MyDashBoard = () => (
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
                <Avatar
                    size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 80,
                        xxl: 100,
                    }}
                    src={avata}
                    style={{
                        margin: '10px auto',
                        display: 'block',
                    }}
                />
                <p
                    style={{
                        display: 'block',
                        textAlign: 'center',
                        color: '#2F3CBD',
                        fontSize: '3rem',
                        fontWeight: '400',
                    }}
                >
                    Anh Minh
                </p>
                <p
                    style={{
                        display: 'block',
                        textAlign: 'center',
                    }}
                >
                    Host
                </p>
                <Menu style={{ background: '#f2f0f0' }}>
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
            </Sider>
            <Layout>
                <Content style={contentStyle}>
                    <Routes>
                        <Route path="DashBoard" element={<DashBoardContent />} />
                        <Route path="Static" element={<StaticContent />} />
                        <Route path="Setting" element={<SettingContent />} />
                        <Route path="Support" element={<SupportContent />} />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    </Space>
);
export default MyDashBoard;
