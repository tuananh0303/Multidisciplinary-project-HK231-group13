import React, { useEffect } from "react";
import io from "socket.io-client";

const Support = () => {
  useEffect(() => {
    const socket = io("http://localhost:3000"); // Kết nối tới server socket.io

    socket.on("sensorData", (data) => {
      console.log("Received sensor data:", data);
      // Xử lý dữ liệu cảm biến ở đây
    });

    return () => {
      socket.disconnect(); // Ngắt kết nối khi component unmount
    };
  }, []);
  return <div>Support</div>;
};

export default Support;
