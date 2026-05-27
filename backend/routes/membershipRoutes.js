const express = require("express");

const router = express.Router();

const {
  applyMembership,
  getUserMembership,
  getAllMemberships,
  approveMembership,
  rejectMembership
} = require("../controllers/membershipController");

const upload =
require("../middleware/uploadMiddleware");

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

/* APPLY MEMBERSHIP */
router.post(
  "/",
  authMiddleware,
  upload.single("paymentScreenshot"),
  applyMembership
);

/* GET USER MEMBERSHIP */
router.get(
  "/user/:userId",
  authMiddleware,
  getUserMembership
);

/* GET ALL MEMBERSHIPS */
router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getAllMemberships
);

/* APPROVE MEMBERSHIP */
router.put(
  "/approve/:id",
  authMiddleware,
  adminMiddleware,
  approveMembership
);

router.put(
  "/reject/:id",
  authMiddleware,
  adminMiddleware,
  rejectMembership
);

module.exports = router;