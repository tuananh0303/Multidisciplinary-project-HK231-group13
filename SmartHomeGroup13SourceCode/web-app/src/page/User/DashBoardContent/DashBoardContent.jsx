import { Button, Flex, Space, Switch, Typography, Progress, Slider, Tooltip, Modal, Input } from 'antd';
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
import { getControlDoorData, getControlFanData, getControlLampData, getLight, getTempData, getHumidData } from './getDataApi';
import { ACTIVE_KEY, USER_NAME } from '../../../const/adafruitConst';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
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
    // let humidity = '100'
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


    /// Call API to display and update data
    const username = USER_NAME;
    const activeKey = ACTIVE_KEY;
    const [lampData, setLampData] = useState(null);
    const [doorData, setDoorData] = useState(null);
    const [fanData, setFanData] = useState(null);

    const [lightData, setLightData] = useState(null);
    const [tempData, setTempData] = useState(null);
    const [humiData, setHumiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            
            const lamp = await getControlLampData(username, activeKey);
            setLampData(lamp);

            const fan = await getControlFanData(username, activeKey);
            setFanData(fan);

            const door = await getControlDoorData(username, activeKey);
            setDoorData(door);  

            const light = await getLight(username, activeKey);
            setLightData(light);

            const temp = await getTempData(username, activeKey);
            setTempData(temp);

            const humi = await getHumidData(username, activeKey);
            setHumiData(humi);
        };
        
        fetchData();
    }, [username, activeKey]);

    //update status
    //lamp 
    const [lampStatus, setLampStatus] = useState(lampData?.last_value); 
    const [switchValueLamp, setSwitchValueLamp] = useState();
    const updateLampStatus = async (newStatus) => {
        try {
            const data = {
                value: newStatus
            };
        
            const apiUrl = `https://io.adafruit.com/api/v2/${username}/feeds/control-lamp/data`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'X-AIO-Key': activeKey
                },
                body: JSON.stringify(data)
            });
        
            if (response.status === 200) { 
                setLampStatus(newStatus);
                console.log('Cập nhật thành công!');
            } else {
            
                console.error(`Lỗi: ${response.status}`);
            }
            } catch (error) {
            console.error('Lỗi khi gửi yêu cầu:', error);
            }
        };    
        

        useEffect(() => {
            if (switchValueLamp) {
                updateLampStatus(1);
            } else {
                updateLampStatus(0);
            }
        }, [switchValueLamp]);
    //fan
    const [fanStatus, setFanStatus] = useState(fanData?.last_value); 
    const [switchValueFan, setSwitchValueFan] = useState();
    const updateFanStatus = async (newStatus) => {
        try {
            const data = {
                value: newStatus
            };
        
            const apiUrl = `https://io.adafruit.com/api/v2/${username}/feeds/control-fan/data`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'X-AIO-Key': activeKey
                },
                body: JSON.stringify(data)
            });
        
            if (response.status === 200) { 
                setFanStatus(newStatus);
                console.log('Cập nhật thành công!');
            } else {
            
                console.error(`Lỗi: ${response.status}`);
            }
            } catch (error) {
            console.error('Lỗi khi gửi yêu cầu:', error);
            }
        };    
        

        useEffect(() => {
            if (switchValueFan) {
                updateFanStatus(70);
            } else {
                updateFanStatus(0);
            }
        }, [switchValueFan]);

    //door
    const [doorStatus, setDoorStatus] = useState(fanData?.last_value); 
    const [switchValueDoor, setSwitchValueDoor] = useState();
    const updateDoorStatus = async (newStatus) => {
        try {
            const data = {
                value: newStatus
            };
        
            const apiUrl = `https://io.adafruit.com/api/v2/${username}/feeds/control-door/data`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'X-AIO-Key': activeKey
                },
                body: JSON.stringify(data)
            });
        
            if (response.status === 200) { 
                setDoorStatus(newStatus);
                console.log('Cập nhật thành công!');
            } else {
            
                console.error(`Lỗi: ${response.status}`);
            }
            } catch (error) {
            console.error('Lỗi khi gửi yêu cầu:', error);
            }
        };    
        

        useEffect(() => {
            if (switchValueDoor) {
                updateFanStatus(70);
            } else {
                updateFanStatus(0);
            }
        }, [switchValueDoor]);
    // end update status


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
                        return (
                            <Button
                                icon={icon}
                                style={{ height: '70px', backgroundColor: '#f2f0f0' }}
                                onClick={() => {
                                    setRoom(r);
                                }}
                            >
                                Living Room
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
                

            <Typography style={{ fontWeight: '500', margin: '0' }}>Living Room</Typography>
            <Space wrap style={{ width: '100%', padding: '1%', marginTop: '2%' }}>
                <Space.Compact
                    direction="vertical"
                    style={{
                        width: '100%',
                        height: '150px',
                        border: '2px solid black',
                        borderRadius: '10px',
                        padding: '3%',
                        backgroundColor: '#f2f0f0',
                        margin: '4% 10%',
                        display: 'block',
                    }}
                >
                    <Space style={{ display: 'block', height: '70px' }}>
                        <Flex justify="space-between" align="flex-center" style={{ padding: '1%', width: '10vw' }}>
                            <Space direction="vertical">
                                <TipsAndUpdatesIcon fontSize="large" />
                                <Typography style={{fontSize: '23px', fontStyle: 'bold'}}>Lamp</Typography>
                            </Space>
                            <Space>
                                <Switch
                                    style={{marginRight: '10px'}}
                                    defaultChecked={switchValueLamp} 
                                    onChange={checked => setSwitchValueLamp(checked)}  

                                />
                            </Space>
                        </Flex>
                    </Space>
                </Space.Compact>

                <Space.Compact
                    direction="vertical"
                    style={{
                        width: '100%',
                        height: '150px',
                        border: '2px solid black',
                        borderRadius: '10px',
                        padding: '3%',
                        backgroundColor: '#f2f0f0',
                        margin: '4% 10%',
                        display: 'block',
                    }}
                >
                    <Space style={{ display: 'block', height: '70px' }}>
                        <Flex justify="space-between" align="flex-center" style={{ padding: '1%', width: '10vw' }}>
                            <Space direction="vertical">
                            <WindPowerIcon fontSize="large" style={{ marginLeft: '10%' }} />
                                <Typography style={{fontSize: '23px', fontStyle: 'bold'}}>Fan</Typography>
                            </Space>
                            <Space>
                                <Switch
                                    style={{marginRight: '10px'}}
                                    defaultChecked={switchValueFan} 
                                    onChange={checked => setSwitchValueFan(checked)}                
                                />
                            </Space>
                        </Flex>
                    </Space>
                </Space.Compact>

                <Space.Compact
                    direction="vertical"
                    style={{
                        width: '100%',
                        height: '150px',
                        border: '2px solid black',
                        borderRadius: '10px',
                        padding: '3%',
                        backgroundColor: '#f2f0f0',
                        margin: '4% 10%',
                        display: 'block',
                    }}
                >
                    <Space style={{ display: 'block', height: '70px' }}>
                        <Flex justify="space-between" align="flex-center" style={{ padding: '1%', width: '10vw' }}>
                            <Space direction="vertical">
                            <DoorFrontIcon fontSize="large" style={{ marginLeft: '10%' }} />
                                <Typography style={{fontSize: '23px', fontStyle: 'bold'}}>Door</Typography>
                            </Space>
                            <Space>
                                <Switch
                                    style={{marginRight: '10px'}}
                                    defaultChecked={switchValueDoor} 
                                    onChange={checked => setSwitchValueDoor(checked)} 
                                />
                            </Space>
                        </Flex>
                    </Space>
                </Space.Compact>
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
                                {tempData?.last_value}&deg;C
                            </Typography>
                        </Space>
                        
                        <Space>
                            <WaterIcon fontSize="large" />
                            <Typography style={{ fontSize: '1.5rem', fontWeight: '500' }}>{humiData?.last_value}%</Typography>
                        </Space>
                        <Space>
                            <WbIncandescentIcon fontSize="large" />
                            <Typography style={{ fontSize: '1.5rem', fontWeight: '500' }}>{lightData?.last_value}%</Typography>
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
