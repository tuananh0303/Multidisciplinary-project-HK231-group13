import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
import { Flex, Space, Switch, Typography, Slider, ConfigProvider } from "antd";
import { BulbOutlined } from "@ant-design/icons";
const Static = () => {
  // muốn lấy dữ liệu khi đang lắng nghe socket thì cũng như bình thường cập nhật
  // các dữ liệu khi có thay đổi thôi. dùng useState để cập nhật dữ liệu thôi
  // const [deviceData, setDeviceData] = useState(null);

  // useEffect(() => {
  //   const socket = io("http://localhost:3000"); // Kết nối tới server socket.io
  //   socket.on("deviceData", (data) => {
  //     console.log("Received deivce data:", data);
  //     // console.log("door:", data.door);
  //     const transformedData = {
  //       door: data.door === 1 ? true : false,
  //       fan: data.fan === 1 ? true : false,
  //       lamp: data.lamp === 1 ? true : false,
  //     };
  //     setDeviceData(transformedData);
  //     // Xử lý dữ liệu cảm biến ở đây
  //   });

  //   return () => {
  //     socket.disconnect(); // Ngắt kết nối khi component unmount
  //   };
  // }, []);

  // console.log("controlData", controlData);
  // const handleControl = (controlField, value) => {
  //   console.log("checked:", value);
  //   const updatedDeviceData = {
  //     ...deviceData,
  //     [controlField]: value,
  //   };
  //   setDeviceData(updatedDeviceData);
  //   console.log("updateControlData:", updatedDeviceData);
  //   const socket = io("http://localhost:3000");
  //   socket.emit("controlData", updatedDeviceData);
  // };
  // useEffect(() => {
  //   console.log("New device data:", deviceData);
  // }, [deviceData]);
  return (
    <div>
      <h2>Device Data</h2>
      {/* {deviceData && (
        <div>
          <p>Door: {deviceData.door.toString()}</p>
          <p>Fan: {deviceData.fan.toString()}</p>
          <p>Light: {deviceData.lamp.toString()}</p>
        </div>
      )} */}
      <Space.Compact
        direction="vertical"
        style={{
          width: "30%",
          height: "150px",
          border: "2px solid black",
          borderRadius: "10px",
          padding: "3%",
          // paddingBottom: "3%",
          backgroundColor: "f2f0f0",
          margin: "4% 0%",
          display: "block",
        }}
      >
        <Space style={{ display: "block", height: "90px" }}>
          <Flex
            justify="space-between"
            align="flex-start"
            style={{ padding: "1% 1.5%", width: "100%" }}
          >
            <Space
              direction="vertical"
              style={{ fontSize: "15px", fontWeight: "bold" }}
            >
              <BulbOutlined fontSize="large" style={{ paddingLeft: "10%" }} />
              <Typography>Light</Typography>
            </Space>
            <Space>
              {/* check value của device rồi chuyển hóa sang true|false */}
              {/* {deviceData && (
                <Switch
                  checked={deviceData.lamp}
                  onChange={(checked) => handleControl("lamp", checked)}
                />
              )} */}
            </Space>
          </Flex>
        </Space>
        <Space style={{ height: "20px", padding: "1%", width: "16vw" }}>
          <ConfigProvider
            theme={{
              components: {
                Slider: {
                  handleColor: "black",
                  trackBg: "black",
                  trackHoverBg: "black",
                  dotActiveBorderColor: "black",
                  handleActiveColor: "black",
                },
              },
            }}
          >
            <Slider
              defaultValue={100}
              style={{
                display: "block",
                width: "13vw",
                padding: "1%",
              }}
              Tooltip={{ open: true }}
            />
          </ConfigProvider>
        </Space>
      </Space.Compact>
      <Space.Compact
        direction="vertical"
        style={{
          width: "30%",
          height: "150px",
          border: "2px solid black",
          borderRadius: "10px",
          padding: "3%",
          // paddingBottom: "3%",
          backgroundColor: "f2f0f0",
          margin: "4% 0%",
          display: "block",
        }}
      >
        <Space style={{ display: "block", height: "90px" }}>
          <Flex
            justify="space-between"
            align="flex-start"
            style={{ padding: "1% 1.5%", width: "100%" }}
          >
            <Space
              direction="vertical"
              style={{ fontSize: "15px", fontWeight: "bold" }}
            >
              <BulbOutlined fontSize="large" style={{ paddingLeft: "10%" }} />
              <Typography>Door</Typography>
            </Space>
            <Space>
              {/* check value của device rồi chuyển hóa sang true|false */}
              {/* {deviceData && (
                <Switch
                  checked={deviceData.door}
                  onChange={(checked) => handleControl("door", checked)}
                />
              )} */}
            </Space>
          </Flex>
        </Space>
        <Space style={{ height: "20px", padding: "1%", width: "16vw" }}>
          <ConfigProvider
            theme={{
              components: {
                Slider: {
                  handleColor: "black",
                  trackBg: "black",
                  trackHoverBg: "black",
                  dotActiveBorderColor: "black",
                  handleActiveColor: "black",
                },
              },
            }}
          >
            <Slider
              defaultValue={100}
              style={{
                display: "block",
                width: "13vw",
                padding: "1%",
              }}
              Tooltip={{ open: true }}
            />
          </ConfigProvider>
        </Space>
      </Space.Compact>
      <Space.Compact
        direction="vertical"
        style={{
          width: "30%",
          height: "150px",
          border: "2px solid black",
          borderRadius: "10px",
          padding: "3%",
          // paddingBottom: "3%",
          backgroundColor: "f2f0f0",
          margin: "4% 0%",
          display: "block",
        }}
      >
        <Space style={{ display: "block", height: "90px" }}>
          <Flex
            justify="space-between"
            align="flex-start"
            style={{ padding: "1% 1.5%", width: "100%" }}
          >
            <Space
              direction="vertical"
              style={{ fontSize: "15px", fontWeight: "bold" }}
            >
              <BulbOutlined fontSize="large" style={{ paddingLeft: "10%" }} />
              <Typography>Fan</Typography>
            </Space>
            <Space>
              {/* check value của device rồi chuyển hóa sang true|false */}
              {/* {deviceData && (
                <Switch
                  checked={deviceData.fan}
                  onChange={(checked) => handleControl("fan", checked)}
                />
              )} */}
            </Space>
          </Flex>
        </Space>
        <Space style={{ height: "20px", padding: "1%", width: "16vw" }}>
          <ConfigProvider
            theme={{
              components: {
                Slider: {
                  handleColor: "black",
                  trackBg: "black",
                  trackHoverBg: "black",
                  dotActiveBorderColor: "black",
                  handleActiveColor: "black",
                },
              },
            }}
          >
            <Slider
              defaultValue={100}
              style={{
                display: "block",
                width: "13vw",
                padding: "1%",
              }}
              Tooltip={{ open: true }}
            />
          </ConfigProvider>
        </Space>
      </Space.Compact>
    </div>
  );
};

export default Static;
