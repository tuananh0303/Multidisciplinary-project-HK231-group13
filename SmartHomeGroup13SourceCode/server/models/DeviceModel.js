const mongoose = require("mongoose");
const deviceSchema = new mongoose.Schema(
  {
    door: { type: Boolean, default: false },
    fan: { type: Boolean, default: false },
    lamp: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const DeviceModel = mongoose.model("Device", deviceSchema);
module.exports = DeviceModel;
