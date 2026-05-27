const express = require("express");

const router = express.Router();

const {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent
} = require("../controllers/eventController");

const upload =
require("../middleware/uploadMiddleware");

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

/* ================= EVENT ROUTES ================= */

/* CREATE EVENT */
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.single("eventImage"),
  createEvent
);
/* GET ALL EVENTS */
router.get("/", getAllEvents);

/* GET SINGLE EVENT */
router.get("/:id", getSingleEvent);

/* UPDATE EVENT */
router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  updateEvent
);
/* DELETE EVENT */
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteEvent
);
module.exports = router;