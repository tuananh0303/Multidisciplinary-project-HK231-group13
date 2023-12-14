import { React, useEffect, useState } from 'react';
import { data } from './data';
import { Button, Flex, Input, Space, Typography, message } from 'antd';

const ProfileContent = () => {
    const [save, setSave] = useState(false);
    const [changeInfo, setChangInfo] = useState(true);
    const [info, setInfo] = useState(data);

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Thay đổi thông tin cá nhân hoàn thất',
        });
    };
    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Thay đổi thông tin cá nhân bị hủy',
        });
    };

    useEffect(() => {
        setInfo(data);
    }, []);
    const onChange = (e) => {};
    return (
        <>
            {contextHolder}
            <div
                style={{
                    borderLeft: 'hsl(0, 0%, 71%) solid 2px',
                    borderRight: 'hsl(0, 0%, 71%) solid 2px',
                    width: '60vw',
                    height: '95vh',
                    margin: 'auto',
                    marginTop: '0',
                    paddingTop: '5%',
                }}
            >
                <Typography
                    style={{
                        display: 'block',
                        textAlign: 'center',
                        fontSize: '4rem',
                        fontWeight: '700',
                    }}
                >
                    Thông tin cá nhân
                </Typography>
                <Space
                    direction="vertical"
                    style={{
                        margin: '1vw auto',
                        width: '40vw',
                        display: 'block',
                    }}
                >
                    <Space style={{ margin: '1vw', width: '100%' }} direction="vertical">
                        <Typography style={{ width: '8vw', fontWeight: '400', fontSize: '1.5rem' }}>
                            Họ và Tên
                        </Typography>
                        <Input
                            style={{ color: 'black', border: '2px solid hsl(0, 0%, 71%)', width: '40vw' }}
                            disabled={changeInfo}
                            maxLength={100}
                            defaultValue={info.fullName}
                            onChange={onChange}
                        />
                    </Space>
                    <Space style={{ margin: '1vw', width: '100%' }} direction="vertical">
                        <Typography style={{ width: '8vw', fontWeight: '400', fontSize: '1.5rem' }}>
                            Tài khoản
                        </Typography>
                        <Input
                            style={{ color: 'black', border: '2px solid hsl(0, 0%, 71%)', width: '40vw' }}
                            disabled={changeInfo}
                            defaultValue={info.userName}
                        />
                    </Space>
                    <Space style={{ margin: '1vw', width: '100%' }} direction="vertical">
                        <Typography style={{ width: '8vw', fontWeight: '400', fontSize: '1.5rem' }}>Email</Typography>
                        <Input
                            style={{ color: 'black', border: '2px solid hsl(0, 0%, 71%)', width: '40vw' }}
                            disabled={changeInfo}
                            defaultValue={info.email}
                        />
                    </Space>
                    <Space style={{ margin: '1vw', width: '100%' }} direction="vertical">
                        <Typography style={{ width: '8vw', fontWeight: '400', fontSize: '1.5rem' }}>
                            Số điện thoại
                        </Typography>
                        <Input
                            style={{ color: 'black', border: '2px solid hsl(0, 0%, 71%)', width: '40vw' }}
                            disabled={changeInfo}
                            defaultValue={info.phone}
                        />
                    </Space>
                    <Flex align="center" justify="center" style={{ marginTop: '1%' }}>
                        {save ? (
                            <>
                                <Button
                                    style={{ margin: '1%', background: '#1777ff', color: 'white' }}
                                    onClick={() => {
                                        setSave(!save);
                                        setChangInfo(!changeInfo);
                                        success();
                                    }}
                                >
                                    Đồng ý
                                </Button>
                                <Button
                                    style={{ margin: '1%', color: '#1777ff' }}
                                    onClick={() => {
                                        setSave(!save);
                                        setChangInfo(!changeInfo);
                                        error();
                                    }}
                                >
                                    Huỷ
                                </Button>
                            </>
                        ) : (
                            <Button
                                onClick={() => {
                                    setSave(!save);
                                    setChangInfo(!changeInfo);
                                    console.log(data);
                                }}
                                style={{ background: '#1777ff', color: 'white' }}
                            >
                                Thay đổi
                            </Button>
                        )}
                    </Flex>
                </Space>
            </div>
        </>
    );
};

export default ProfileContent;
