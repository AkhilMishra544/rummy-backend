const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Dummy APIs for a rummy app
app.get("/", (req, res) => res.send("Server running ✅"));

app.post("/register", (req, res) => res.send("User registered"));
app.post("/login", (req, res) => res.send("User logged in"));
app.get("/wallet", (req, res) => res.send("Wallet balance"));
app.post("/add-coins", (req, res) => res.send("Coins added"));
app.post("/start-game", (req, res) => res.send("Game started"));
app.post("/play", (req, res) => res.send("Game move received"));
app.post("/result", (req, res) => res.send("Result submitted"));
app.get("/history", (req, res) => res.send("Game history"));
app.post("/withdraw-request", (req, res) => res.send("Withdraw requested"));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});
