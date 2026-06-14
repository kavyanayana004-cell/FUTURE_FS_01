const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const leadRoutes = require("./routes/leadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/leads", leadRoutes);

// test route
app.get("/", (req, res) => {
  res.send("CRM Backend Running 🚀");
});

// DB + server start
connectDB();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});