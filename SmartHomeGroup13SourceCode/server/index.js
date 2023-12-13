const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const http = require("http");
const socketIO = require("socket.io");

const mqttService = require("./services/MqttService");
const Sensor = require("./models/SensorModel");
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 8080;
const URI = process.env.mongo_URL;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true, // cho phép sử dụng các header như Cookies, Authentication header...
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Disposition"],
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());
app.use(cookieParser());

routes(app);
const topic = "khoitruong9802/feeds/get-humi";
const topic1 = "khoitruong9802/feeds/get-light";
const topic2 = "khoitruong9802/feeds/get-temp";
const topic3 = "khoitruong9802/feeds/control-door";
const topic4 = "khoitruong9802/feeds/control-fan";
const topic5 = "khoitruong9802/feeds/control-lamp";

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      mqttService.connectMqtt();
      mqttService.subscribeToTopic(topic);
      mqttService.subscribeToTopic(topic1);
      mqttService.subscribeToTopic(topic2);

      io.on("connection", async (socket) => {
        console.log("Client connected");

        const datasensor = await getDataFromSensorModel();
        console.log("datasensor first 1:", datasensor);
        const formatData = {
          temperature: datasensor.temperature,
          humidity: datasensor.humidity,
          light: datasensor.light,
        };
        socket.emit("sensorData", formatData);

        // error update data trong setInterval. bởi vì nó sẽ cứ data lần đầu tiên thôi do gọi datasensorUpdate bên ngoài nên nó thực hiện
        // việc gọi dữ liệu từ getDataFromSensorModel lần đầu luôn

        setInterval(async () => {
          const datasensorUpdate = await getDataFromSensorModel();
          console.log(
            "datasensorUPdate cho nhung lan sau 35s/lan:",
            datasensorUpdate
          );
          const updateFormatData = {
            temperature: datasensorUpdate.temperature,
            humidity: datasensorUpdate.humidity,
            light: datasensorUpdate.light,
          };
          console.log(
            "updateData duoc gui di vao nhung lan sau:",
            updateFormatData
          );
          socket.emit("sensorData", updateFormatData);
        }, 35000);
      });
    });
  })
  .catch((err) => {
    console.log("err", err);
  });

// server.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });
const getDataFromSensorModel = async () => {
  try {
    const sensorData = await Sensor.findOne().sort({ _id: -1 }).limit(1); // Lấy dữ liệu mới nhất
    return sensorData; // Trả về dữ liệu cảm biến từ cơ sở dữ liệu
  } catch (error) {
    console.error("Error getting sensor data:", error);
    return null;
  }
};
