const prisma = require("../config/prisma");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

/* ================= VERIFY SECRET KEY ================= */

const verifySecretKey = async (req, res) => {

  try {

    const { secretKey } = req.body;

    if (
      secretKey !== process.env.ADMIN_SECRET_KEY
    ) {

      return res.status(401).json({
        message: "Invalid Secret Key"
      });

    }

    res.status(200).json({
      message: "Secret Key Verified"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= ADMIN SIGNUP ================= */

const adminSignup = async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      phone
    } = req.body;

    const existingAdmin =
      await prisma.user.findUnique({
        where: {
          email
        }
      });

    if (existingAdmin) {

      return res.status(400).json({
        message: "Admin already exists"
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);
    
    console.log(req.body);

    const admin =
      await prisma.user.create({

        data: {
          name,
          email,
          password: hashedPassword,
          phone,
          role: "admin"
        }

      });

    res.status(201).json({
      message: "Admin account created",
      admin
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= ADMIN LOGIN ================= */

const adminLogin = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    const admin =
      await prisma.user.findUnique({
        where: {
          email
        }
      });

    if (
      !admin ||
      admin.role !== "admin"
    ) {

      return res.status(401).json({
        message: "Invalid Admin Credentials"
      });

    }

    const isMatch =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!isMatch) {

      return res.status(401).json({
        message: "Invalid Admin Credentials"
      });

    }

    const token = jwt.sign(

      {
        id: admin.id,
        role: admin.role
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );

    res.status(200).json({

      message: "Admin Login Successful",

      token,

      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= DASHBOARD STATS ================= */

const getDashboardStats = async (req, res) => {

  try {

    /* TOTAL USERS */
    const totalUsers =
      await prisma.user.count();

    /* TOTAL EVENTS */
    const totalEvents =
      await prisma.event.count();

    /* TOTAL REGISTRATIONS */
    const totalRegistrations =
      await prisma.registration.count();

    /* TOTAL CERTIFICATES */
    const totalCertificates =
      await prisma.certificate.count();

    /* PENDING MEMBERSHIPS */
    const pendingMemberships =
      await prisma.membership.count({

        where: {
          membershipStatus: "pending"
        }

      });

    /* TOTAL REVENUE */

    const paidRegistrations =
      await prisma.registration.findMany({

        where: {
          paymentStatus: "paid"
        },

        include: {
          event: true
        }

      });

    let totalRevenue = 0;

    paidRegistrations.forEach((reg) => {

      totalRevenue +=
        Number(reg.event?.price || 0);

    });

    res.status(200).json({

      totalUsers,
      totalEvents,
      totalRegistrations,
      totalCertificates,
      pendingMemberships,
      totalRevenue

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  verifySecretKey,
  adminSignup,
  adminLogin,
  getDashboardStats
};