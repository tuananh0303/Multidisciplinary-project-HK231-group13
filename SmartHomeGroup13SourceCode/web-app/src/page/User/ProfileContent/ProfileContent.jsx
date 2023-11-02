import { React, useEffect, useState } from 'react';
import { data } from './data';
import { Button, Flex, Input, Space, Typography } from 'antd';

const ProfileContent = () => {
    const [save, setSave] = useState(false);
    const [changeInfo, setChangInfo] = useState(true);
    const [info, setInfo] = useState(data);
    useEffect(() => {
        setInfo(data);
    }, []);
    const onChange = (e) => {};
    return (
        <div
            style={{
                border: '2px solid black',
                backgroundColor: '#f2f0f0',
                borderRadius: '10px',
                width: '60vw',
                margin: 'auto',
                marginTop: '10%',
            }}
        >
            <Typography style={{ display: 'block', textAlign: 'center', fontSize: '4rem', fontWeight: '700' }}>
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
                <Space style={{ margin: '1vw', width: '100%' }}>
                    <Typography style={{ width: '8vw', fontWeight: '500', fontSize: '1.5rem' }}>Họ và Tên</Typography>
                    <Input
                        style={{ color: 'black', border: '2px solid black', width: '30vw' }}
                        disabled={changeInfo}
                        maxLength={100}
                        defaultValue={info.fullName}
                        onChange={onChange}
                    />
                </Space>
                <Space style={{ margin: '1vw', width: '100%' }}>
                    <Typography style={{ width: '8vw', fontWeight: '500', fontSize: '1.5rem' }}>Tài khoản</Typography>
                    <Input
                        style={{ color: 'black', border: '2px solid black', width: '30vw' }}
                        disabled={changeInfo}
                        defaultValue={info.userName}
                    />
                </Space>
                <Space style={{ margin: '1vw', width: '100%' }}>
                    <Typography style={{ width: '8vw', fontWeight: '500', fontSize: '1.5rem' }}>Email</Typography>
                    <Input
                        style={{ color: 'black', border: '2px solid black', width: '30vw' }}
                        disabled={changeInfo}
                        defaultValue={info.email}
                    />
                </Space>
                <Space style={{ margin: '1vw', width: '100%' }}>
                    <Typography style={{ width: '8vw', fontWeight: '500', fontSize: '1.5rem' }}>
                        Số điện thoại
                    </Typography>
                    <Input
                        style={{ color: 'black', border: '2px solid black', width: '30vw' }}
                        disabled={changeInfo}
                        defaultValue={info.phone}
                    />
                </Space>
                <Flex align="flex-end" justify="flex-end" style={{ marginTop: '1%' }}>
                    {save ? (
                        <>
                            <Button
                                style={{ margin: '1%' }}
                                onClick={() => {
                                    setSave(!save);
                                    setChangInfo(!changeInfo);
                                    console.log(data);
                                }}
                            >
                                Huỷ
                            </Button>
                            <Button
                                style={{ margin: '1%' }}
                                onClick={() => {
                                    setSave(!save);
                                    setChangInfo(!changeInfo);
                                    console.log(data);
                                }}
                            >
                                Đồng ý
                            </Button>
                        </>
                    ) : (
                        <Button
                            onClick={() => {
                                setSave(!save);
                                setChangInfo(!changeInfo);
                                console.log(data);
                            }}
                        >
                            Thay đổi
                        </Button>
                    )}
                </Flex>
            </Space>
        </div>
    );
};

export default ProfileContent;
