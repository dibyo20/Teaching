require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(express.json());

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
}

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT}`);
});