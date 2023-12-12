const mongoose = require("mongoose");
const sensorSchema = new mongoose.Schema(
  {
    sensorname: { type: String, required: true },
    value: { type: Number },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  },
  {
    timestamps: true,
  }
);
const SensorModel = mongoose.model("Sensor", sensorSchema);
module.exports = SensorModel;
