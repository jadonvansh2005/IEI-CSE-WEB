const express = require("express");

const router = express.Router();

const {

  verifySecretKey,
  adminSignup,
  adminLogin,
  getDashboardStats

} = require("../controllers/adminController");

/* ================= MIDDLEWARES ================= */

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

/* ================= VERIFY SECRET KEY ================= */

router.post(
  "/verify-key",
  verifySecretKey
);

/* ================= ADMIN SIGNUP ================= */

router.post(
  "/signup",
  adminSignup
);

/* ================= ADMIN LOGIN ================= */

router.post(
  "/login",
  adminLogin
);

/* ================= DASHBOARD STATS ================= */

router.get(

  "/dashboard-stats",

  authMiddleware,

  adminMiddleware,

  getDashboardStats

);

module.exports = router;