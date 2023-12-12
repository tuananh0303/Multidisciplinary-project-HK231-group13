const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema(
  {
    roomname: { type: String, required: true },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);
const RoomModel = mongoose.model("Room", roomSchema);
module.exports = UserModel;
