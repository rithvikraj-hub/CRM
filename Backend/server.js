const dns=require("dns");
dns.setServers(["8.8.8.8","8.8.4.4"]);
const express = require("express");
const cors = require("cors");
const leadRoutes = require("./routes/leadRoutes");
const customerRoutes = require("./routes/customerRoutes");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CRM Backend Running");
});

const PORT = process.env.PORT || 5000;
app.use("/api/leads", leadRoutes);
app.use("/api/customers", customerRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});