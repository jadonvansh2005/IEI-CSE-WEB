const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

const {

  getProfile,

  getAllUsers,

  changeUserRole,

  blockUser,

  unblockUser,

  deleteUser

} = require("../controllers/userController");

/* ================= PROFILE ================= */

router.get(
  "/profile",
  authMiddleware,
  getProfile
);

/* ================= GET ALL USERS ================= */

router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  getAllUsers
);

/* ================= CHANGE ROLE ================= */

router.put(
  "/role/:id",
  authMiddleware,
  adminMiddleware,
  changeUserRole
);

/* ================= BLOCK USER ================= */

router.put(
  "/block/:id",
  authMiddleware,
  adminMiddleware,
  blockUser
);

/* ================= UNBLOCK USER ================= */

router.put(
  "/unblock/:id",
  authMiddleware,
  adminMiddleware,
  unblockUser
);

/* ================= DELETE USER ================= */

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteUser
);

module.exports = router;