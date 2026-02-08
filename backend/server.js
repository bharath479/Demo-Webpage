const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/dentalclinic");

// Admin credentials (use ENV in real deployment)
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";
const JWT_SECRET = "supersecretkey";

// Login
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "1d" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// Auth middleware
function verifyAdmin(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(403);

  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
}

app.use("/api/appointments", require("./routes/appointmentroutes"));

// Protected admin route
app.get("/api/admin/appointments", verifyAdmin, async (req, res) => {
  const Appointment = require("./models/appointment");
  const data = await Appointment.find().sort({ createdAt: -1 });
  res.json(data);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
