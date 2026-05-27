const prisma = require("../config/prisma");

/* ================= REGISTER EVENT ================= */

const registerEvent = async (req, res) => {

  try {

    const userId = req.user.id;

    const {
      eventId,
      paymentStatus,
      transactionId
    } = req.body;

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

    /* CHECK ALREADY REGISTERED */

    const existingRegistration =
      await prisma.registration.findFirst({

        where: {
          userId: Number(userId),
          eventId: Number(eventId)
        }

      });

    if (existingRegistration) {

      return res.status(400).json({
        message: "Already registered"
      });

    }

    /* CREATE REGISTRATION */

    const registration =
      await prisma.registration.create({

        data: {

          userId: Number(userId),

          eventId: Number(eventId),

          paymentStatus:
            paymentStatus || "pending",

          transactionId,

          paymentScreenshot: req.file
            ? req.file.path
            : null,

          registrationStatus:
            event.type === "free"
              ? "approved"
              : "pending"

        }

      });

    res.status(201).json({

      message:
        event.type === "free"
          ? "Registration successful"
          : "Payment submitted for verification",

      registration

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= GET USER REGISTRATIONS ================= */

const getUserRegistrations = async (req, res) => {

  try {

    const { userId } = req.params;

    const registrations =
      await prisma.registration.findMany({

        where: {
          userId: Number(userId)
        },

        include: {
          event: true
        }

      });

    res.status(200).json(registrations);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= GET ALL REGISTRATIONS ================= */

const getAllRegistrations = async (req, res) => {

  try {

    const registrations =
      await prisma.registration.findMany({

        include: {
          user: true,
          event: true
        },

        orderBy: {
          id: "desc"
        }

      });

    res.status(200).json(registrations);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= APPROVE REGISTRATION ================= */

const approveRegistration = async (req, res) => {

  try {

    const { id } = req.params;

    const registration =
      await prisma.registration.update({

        where: {
          id: Number(id)
        },

        data: {
          registrationStatus: "approved",
          paymentStatus: "paid"
        }

      });

    res.status(200).json({
      message: "Registration approved",
      registration
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= REJECT REGISTRATION ================= */

const rejectRegistration = async (req, res) => {

  try {

    const { id } = req.params;

    const registration =
      await prisma.registration.update({

        where: {
          id: Number(id)
        },

        data: {
          registrationStatus: "rejected"
        }

      });

    res.status(200).json({
      message: "Registration rejected",
      registration
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  registerEvent,
  getUserRegistrations,
  getAllRegistrations,
  approveRegistration,
  rejectRegistration
};