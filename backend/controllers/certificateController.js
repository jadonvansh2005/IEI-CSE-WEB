const prisma = require("../config/prisma");
const PDFDocument = require("pdfkit");

const fs = require("fs");

const path = require("path");

/* ================= ISSUE CERTIFICATE ================= */

const issueCertificate = async (req, res) => {

  try {

    const {
      userId,
      eventId,
      certificateUrl
    } = req.body;

    /* CHECK USER */

    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      }
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    /* CHECK EVENT */

    const event = await prisma.event.findUnique({
      where: {
        id: Number(eventId)
      }
    });

    if (!event) {
      return res.status(404).json({
        message: "Event not found"
      });
    }

    /* CHECK ALREADY ISSUED */

    const existingCertificate =
      await prisma.certificate.findFirst({
        where: {
          userId: Number(userId),
          eventId: Number(eventId)
        }
      });

    if (existingCertificate) {
      return res.status(400).json({
        message: "Certificate already issued"
      });
    }

    /* CREATE CERTIFICATE */

    const certificate =
      await prisma.certificate.create({
        data: {
          userId: Number(userId),
          eventId: Number(eventId),
          certificateUrl: req.file
            ? req.file.path
            : ""
        }
      });

    res.status(201).json({
      message: "Certificate issued successfully",
      certificate
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= GET USER CERTIFICATES ================= */

const getUserCertificates = async (req, res) => {

  try {

    const { userId } = req.params;

    const certificates =
      await prisma.certificate.findMany({
        where: {
          userId: Number(userId)
        },
        include: {
          event: true
        }
      });

    res.status(200).json(certificates);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= GET ALL CERTIFICATES ================= */

const getAllCertificates = async (req, res) => {

  try {

    const certificates =
      await prisma.certificate.findMany({
        include: {
          user: true,
          event: true
        }
      });

    res.status(200).json(certificates);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= DELETE CERTIFICATE ================= */

const deleteCertificate = async (req, res) => {

  try {

    const { id } = req.params;

    await prisma.certificate.delete({
      where: {
        id: Number(id)
      }
    });

    res.status(200).json({
      message: "Certificate deleted successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= GENERATE CERTIFICATE PDF ================= */

const generateCertificate = async (req, res) => {

  try {

    const {
      userId,
      eventId
    } = req.body;

    /* FETCH USER */

    const user =
      await prisma.user.findUnique({

        where: {
          id: Number(userId)
        }

      });

    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }

    /* FETCH EVENT */

    const event =
      await prisma.event.findUnique({

        where: {
          id: Number(eventId)
        }

      });

    if (!event) {

      return res.status(404).json({
        message: "Event not found"
      });

    }

    /* CHECK EXISTING */

    const existingCertificate =
      await prisma.certificate.findFirst({

        where: {
          userId: Number(userId),
          eventId: Number(eventId)
        }

      });

    if (existingCertificate) {

      return res.status(400).json({
        message: "Certificate already generated"
      });

    }

    /* FILE NAME */

    const fileName =
      `certificate-${Date.now()}.pdf`;

    const filePath =
      path.join(
        __dirname,
        "../uploads/certificates",
        fileName
      );

    /* CREATE PDF */

    const doc =
      new PDFDocument({
        layout: "landscape",
        size: "A4"
      });

    const stream =
      fs.createWriteStream(filePath);

    doc.pipe(stream);

    /* DESIGN */

    doc.rect(
      0,
      0,
      doc.page.width,
      doc.page.height
    )
    .fill("#f8fafc");

    doc
      .fontSize(34)
      .fillColor("#1e3a8a")
      .text(
        "CERTIFICATE OF PARTICIPATION",
        0,
        80,
        {
          align: "center"
        }
      );

    doc
      .fontSize(20)
      .fillColor("#334155")
      .text(
        "This certificate is proudly presented to",
        0,
        170,
        {
          align: "center"
        }
      );

    doc
      .fontSize(32)
      .fillColor("#2563eb")
      .text(
        user.name,
        0,
        240,
        {
          align: "center"
        }
      );

    doc
      .fontSize(18)
      .fillColor("#334155")
      .text(
        `for successfully participating in "${event.title}"`,
        0,
        320,
        {
          align: "center"
        }
      );

    doc
      .fontSize(16)
      .text(
        `Conducted by IEI CSE Student Chapter`,
        0,
        380,
        {
          align: "center"
        }
      );

    doc
      .fontSize(14)
      .fillColor("gray")
      .text(
        `Date: ${event.date}`,
        80,
        500
      );

    doc
      .fontSize(14)
      .text(
        "Authorized Signature",
        850,
        500
      );

    doc.end();

    /* WAIT FOR FILE */

    stream.on("finish", async () => {

      const certificate =
        await prisma.certificate.create({

          data: {

            userId: Number(userId),

            eventId: Number(eventId),

            certificateUrl:
              `uploads/certificates/${fileName}`

          }

        });

      res.status(201).json({

        message:
          "Certificate generated successfully",

        certificate

      });

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  issueCertificate,
  generateCertificate,
  getUserCertificates,
  getAllCertificates,
  deleteCertificate
};