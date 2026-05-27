const multer = require("multer");

const path = require("path");

/* ================= STORAGE ================= */

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    if (file.fieldname === "eventImage") {

      cb(null, "uploads/events");

    }

    else if (file.fieldname === "paymentScreenshot") {

      cb(null, "uploads/payments");

    }

    else if (file.fieldname === "certificateFile") {

      cb(null, "uploads/certificates");

    }

  },

  filename: (req, file, cb) => {

    const uniqueName =
      Date.now() + "-" + file.originalname;

    cb(null, uniqueName);

  }

});

/* ================= FILE FILTER ================= */

const fileFilter = (req, file, cb) => {

  const allowedTypes =
    /jpg|jpeg|png|pdf/;

  const ext =
    allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );

  if (ext) {

    cb(null, true);

  } else {

    cb(
      new Error("Only images and PDFs allowed")
    );

  }

};

/* ================= UPLOAD ================= */

const upload = multer({
  storage,
  fileFilter
});

module.exports = upload;