const express = require("express");

const router = express.Router();

const {
  issueCertificate,
  getUserCertificates,
  getAllCertificates,
  deleteCertificate,
  generateCertificate,
} = require("../controllers/certificateController");

const upload =
require("../middleware/uploadMiddleware");

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

/* ================= CERTIFICATE ROUTES ================= */

/* ISSUE CERTIFICATE */
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.single("certificateFile"),
  issueCertificate
);

/* GENERATE CERTIFICATE PDF */

router.post(
  "/generate",
  authMiddleware,
  adminMiddleware,
  generateCertificate
);

/* GET USER CERTIFICATES */
router.get("/user/:userId", getUserCertificates);

/* GET ALL CERTIFICATES */
router.get("/", getAllCertificates);

/* DELETE CERTIFICATE */
router.delete("/:id", deleteCertificate);

module.exports = router;