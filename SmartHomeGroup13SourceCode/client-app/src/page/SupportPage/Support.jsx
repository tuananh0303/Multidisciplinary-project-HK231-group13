import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Support = () => {
  // muốn lấy dữ liệu khi đang lắng nghe socket thì cũng như bình thường cập nhật
  // các dữ liệu khi có thay đổi thôi. dùng useState để cập nhật dữ liệu thôi
  const [sensorData, setSensorData] = useState(null);
  useEffect(() => {
    const socket = io("http://localhost:3000"); // Kết nối tới server socket.io

    socket.on("sensorData", (data) => {
      console.log("Received sensor data:", data);
      console.log("temperature:", data.temperature);
      setSensorData(data);
      // Xử lý dữ liệu cảm biến ở đây
    });

    return () => {
      socket.disconnect(); // Ngắt kết nối khi component unmount
    };
  }, []);
  return (
    <div>
      <h2>Sensor Data</h2>
      {sensorData && (
        <div>
          <p>Temperature: {sensorData.temperature}</p>
          <p>Humidity: {sensorData.humidity}</p>
          <p>Light: {sensorData.light}</p>
        </div>
      )}
    </div>
  );
};

export default Support;
