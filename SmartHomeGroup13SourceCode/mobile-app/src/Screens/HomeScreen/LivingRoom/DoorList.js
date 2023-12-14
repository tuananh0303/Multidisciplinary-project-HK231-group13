const [sensorData, setSensorData] = useState(0);
    useEffect(() => {
        const socket = io("http://localhost:8080"); // Kết nối tới server socket.io

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

