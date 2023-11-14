import { Button, Flex, Space, Switch, Typography, Slider, Modal, Input, ConfigProvider } from 'antd';
import { React, useEffect, useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AddIcon from '@mui/icons-material/Add';
import ChairIcon from '@mui/icons-material/Chair';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BedIcon from '@mui/icons-material/Bed';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WindPowerIcon from '@mui/icons-material/WindPower';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import { Column } from '@ant-design/plots';
import dayjs from 'dayjs';
import { data, rooms, sensor } from './dataChart';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterIcon from '@mui/icons-material/Water';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DevicesIcon from '@mui/icons-material/Devices';
const DashBoardContent = () => {
    let valueSensorId = '';
    let valueDeviceName = '';
    const AddDevice = () => {
        Modal.confirm({
            title: '  Add Device',
            icon: <MapsHomeWorkIcon fontSize="large" style={{ marginRight: '2%' }} />,
            content: (
                <div>
                    <Input
                        placeholder="Device Name"
                        onChange={(e) => {
                            valueDeviceName = e.target.value;
                        }}
                        style={{ margin: '2%' }}
                    />
                    <br />
                    <Input
                        placeholder="SensorId"
                        onChange={(e) => {
                            valueSensorId = e.target.value;
                        }}
                        style={{ margin: '2%' }}
                    />
                </div>
            ),
            onOk() {
                if (
                    !sensor.find((dataSensor0) => {
                        return dataSensor0 === valueSensorId;
                    })
                ) {
                    sensor.push({ Id: valueSensorId, status: false, value: 0 });
                }
                // Nếu sau này phát triển ko có sensor ID thì có thể đưa việc add nó vào room thất bại thì nó sẽ ko bị lỗi nữa :))))
                room.device.push({
                    deviceId: (room.device.length + 1).toString(),
                    deviceName: valueDeviceName,
                    sensorID: valueSensorId,
                });
            },
            onCancel() {},
        });
    };
    let valueAddRoom = '';
    const AddRoom = () => {
        Modal.confirm({
            title: '  Add Room',
            icon: <DevicesIcon fontSize="large" style={{ marginRight: '2%' }} />,
            content: (
                <div>
                    <div>
                        <Input
                            placeholder="Room name"
                            onChange={(e) => {
                                valueAddRoom = e.target.value;
                            }}
                        />
                    </div>
                </div>
            ),
            onOk() {
                rooms.push({ roomId: (rooms.length + 1).toString(), roomName: valueAddRoom, device: [] });
                console.log(rooms);
            },
            onCancel() {},
        });
    };
    const temperature = 32;
    const humidity = 1.2;
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '&deg;C',
            },
            sales: {
                alias: '&deg;C',
            },
        },
    };

    const [thisDay, setThisDay] = useState(dayjs());

    setInterval(() => {
        setThisDay(dayjs());
    }, 1000);

    useEffect(() => {}, [rooms]);

    const [room, setRoom] = useState(rooms[0]);

    return (
        <div style={{ width: '100%', boxSizing: 'border-box' }}>
            {/* Notify */}
            <Flex
                style={{ width: '100%', paddingRight: '4em', padding: '1%' }}
                justify={'flex-end'}
                align={'flex-start'}
            >
                <Button icon={<NotificationsActiveIcon />} style={{ borderRadius: '50%' }} />
            </Flex>
            {/* Room List and Button add */}
            <Flex justify="space-between" align="flex-end" style={{ width: '100%', padding: '1%', height: '120px' }}>
                <Space style={{ border: '2px solid black', borderRadius: '10px', height: '100%', padding: '7px' }}>
                    {rooms.map((r) => {
                        let icon;
                        if (r.roomName === 'Living room') {
                            icon = <ChairIcon />;
                        } else if (r.roomName === 'Kitchen') {
                            icon = <KitchenIcon />;
                        } else {
                            icon = <BedIcon />;
                        }
                        let colorRoom;
                        let colorFont;
                        if (room.roomId === r.roomId) {
                            colorRoom = '#F5C525';
                            colorFont = 'white';
                        } else {
                            colorRoom = '#f2f0f0';
                            colorFont = 'black';
                        }
                        const styleRoom = { height: '70px', backgroundColor: colorRoom, color: colorFont };
                        return (
                            <Button
                                icon={icon}
                                style={styleRoom}
                                onClick={() => {
                                    setRoom(r);
                                }}
                            >
                                {r.roomName}
                            </Button>
                        );
                    })}
                </Space>
                <Space style={{ marginRight: '3%' }}>
                    <Button
                        icon={<AddIcon style={{ position: 'absolute', left: '5px', top: '8.5px' }} />}
                        style={{ backgroundColor: '#2f3cbd', color: 'white' }}
                        onClick={AddRoom}
                    >
                        ADD ROOM
                    </Button>
                    <Button
                        icon={<AddIcon style={{ position: 'absolute', left: '5px', top: '8.5px' }} />}
                        style={{ backgroundColor: '#2f3cbd', color: 'white' }}
                        onClick={AddDevice}
                    >
                        ADD DEVICE
                    </Button>
                </Space>
            </Flex>
            {/* Device list */}
            <Typography style={{ fontWeight: '500', margin: '0' }}>{room.roomName}</Typography>
            <Space wrap style={{ width: '100%', padding: '1%', marginTop: '2%' }}>
                {room.device.map((devices) => {
                    let icon;
                    let sensorData = sensor.find((sensors) => {
                        return sensors.Id === devices.sensorID;
                    });
                    if (devices.deviceName === 'light') {
                        icon = <TipsAndUpdatesIcon fontSize="large" style={{ marginLeft: '10%' }} />;
                    } else if (devices.deviceName === 'fan') {
                        icon = <WindPowerIcon fontSize="large" style={{ marginLeft: '10%' }} />;
                    } else {
                        icon = <DoorFrontIcon fontSize="large" style={{ marginLeft: '10%' }} />;
                    }

                    let colorSensor = sensorData.status ? '#3ACBE8' : '#f2f0f0';

                    return (
                        <>
                            <Space.Compact
                                direction="vertical"
                                style={{
                                    width: '100%',
                                    height: '150px',
                                    border: '2px solid black',
                                    borderRadius: '10px',
                                    padding: '3%',
                                    backgroundColor: colorSensor,
                                    margin: '4% 10%',
                                    display: 'block',
                                }}
                            >
                                <Space style={{ display: 'block', height: '90px' }}>
                                    <Flex
                                        justify="space-between"
                                        align="flex-center"
                                        style={{ padding: '1%', width: '100%' }}
                                    >
                                        <Space direction="vertical">
                                            {icon}
                                            <Typography>{devices.deviceName}</Typography>
                                        </Space>
                                        <Space>
                                            <Switch
                                                defaultChecked={sensorData.status}
                                                onClick={(checked, event) => {
                                                    sensorData.status = !sensorData.status;
                                                }}
                                            />
                                        </Space>
                                    </Flex>
                                </Space>
                                <Space style={{ height: '20px', padding: '1%', width: '16vw' }}>
                                    <ConfigProvider
                                        theme={{
                                            components: {
                                                Slider: {
                                                    handleColor: 'black',
                                                    trackBg: 'black',
                                                    trackHoverBg: 'black',
                                                    dotActiveBorderColor: 'black',
                                                    handleActiveColor: 'black',
                                                },
                                            },
                                        }}
                                    >
                                        <Slider
                                            defaultValue={sensorData.data}
                                            style={{
                                                display: 'block',
                                                width: '13vw',
                                                padding: '1%',
                                            }}
                                            Tooltip={{ open: true }}
                                            onChange={(value) => {
                                                sensorData.data = value;
                                            }}
                                        />
                                    </ConfigProvider>
                                </Space>
                            </Space.Compact>
                            <div style={{ width: '1rem' }}></div>
                        </>
                    );
                })}
            </Space>
            {/* OverView and Chart */}
            <Space wrap style={{ marginTop: '1%', width: '100%' }}>
                <Space.Compact
                    direction="vertical"
                    style={{
                        height: '50vh',
                        width: '26vw',
                        backgroundColor: '#f2f0f0',
                        padding: '5%',
                        borderRadius: '10px',
                    }}
                >
                    <Typography style={{ fontWeight: '700', display: 'block', width: '100%' }}>Overview</Typography>
                    <Typography style={{ fontSize: '7rem', fontWeight: '400', marginTop: '8%' }}>
                        {thisDay.format('HH:mm:ss')}
                    </Typography>
                    <Typography style={{ fontWeight: '500', marginTop: '5%' }}>
                        {thisDay.format('DD/MM/YYYY')}
                    </Typography>
                    <Flex justify="space-between" align="center" style={{ padding: '10%' }}>
                        <Space>
                            <ThermostatIcon fontSize="large" />
                            <Typography style={{ fontSize: '1.5rem', fontWeight: '500' }}>
                                {temperature}&deg;C
                            </Typography>
                        </Space>
                        <Space>
                            <WaterIcon fontSize="large" />
                            <Typography style={{ fontSize: '1.5rem', fontWeight: '500' }}>{humidity}%</Typography>
                        </Space>
                    </Flex>
                </Space.Compact>
                <Space.Compact
                    style={{
                        height: '50vh',
                        width: '50vw',
                        margin: '3%',
                        backgroundColor: '#f2f0f0',
                        borderRadius: '10px',
                        padding: '3%',
                    }}
                >
                    <Column {...config} style={{ width: '100%' }} />
                </Space.Compact>
            </Space>
        </div>
    );
};
export default DashBoardContent;
