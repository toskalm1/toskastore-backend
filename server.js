const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Toskastore Backend Running 🚀");
});
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected 🚀"))
.catch(err => console.log("MongoDB Error:", err));
app.listen(process.env.PORT || 5000, () => {
  console.log("Server started");
});
