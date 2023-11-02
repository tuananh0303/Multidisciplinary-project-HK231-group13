const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.port || 5000;

app.use(cors());
app.use(express.json());

// sample response data on localhost or server
app.get("/", (req, res) => {
  res.send("SUCCESS");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
