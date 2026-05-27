require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);
app.use(cors());

app.use(express.json());

/* ================= ROUTES ================= */

const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const registrationRoutes =
require("./routes/registrationRoutes");
const membershipRoutes =
require("./routes/membershipRoutes");
const certificateRoutes =
require("./routes/certificateRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes =
  require("./routes/adminRoutes");


app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes);
app.use("/api/memberships", membershipRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("IEI Backend Running 🚀");
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});