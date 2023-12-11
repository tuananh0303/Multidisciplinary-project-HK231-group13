const mongoose = require("mongoose");
const deviceSchema = new mongoose.Schema(
  {
    devicename: { type: String, required: true },
    status: { type: Boolean, default: false },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  },
  {
    timestamps: true,
  }
);
const DeviceModel = mongoose.model("Device", deviceSchema);
module.exports = DeviceModel;
