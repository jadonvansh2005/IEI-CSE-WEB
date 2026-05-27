const express = require("express");

const router = express.Router();

const {

  registerEvent,
  getUserRegistrations,
  getAllRegistrations,
  approveRegistration,
  rejectRegistration

} = require("../controllers/registrationController");

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

const upload =
require("../middleware/uploadMiddleware");

/* ================= REGISTER EVENT ================= */

router.post(
  "/",
  authMiddleware,
  upload.single("paymentScreenshot"),
  registerEvent
);

/* ================= GET USER REGISTRATIONS ================= */

router.get(
  "/user/:userId",
  authMiddleware,
  getUserRegistrations
);

/* ================= GET ALL REGISTRATIONS ================= */

router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getAllRegistrations
);

/* ================= APPROVE ================= */

router.put(
  "/approve/:id",
  authMiddleware,
  adminMiddleware,
  approveRegistration
);

/* ================= REJECT ================= */

router.put(
  "/reject/:id",
  authMiddleware,
  adminMiddleware,
  rejectRegistration
);

module.exports = router;