const prisma = require("../config/prisma");

/* ================= APPLY MEMBERSHIP ================= */

const applyMembership = async (req, res) => {

  try {

    const userId = req.user.id;

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

    /* CHECK EXISTING MEMBERSHIP */

    const existingMembership =
      await prisma.membership.findFirst({
        where: {
          userId: Number(userId)
        }
      });

    if (existingMembership) {
      return res.status(400).json({
        message: "Membership already applied"
      });
    }

    /* CREATE MEMBERSHIP */

    const membership =
      await prisma.membership.create({

        data: {

          userId: Number(userId),

          paymentScreenshot: req.file
            ? req.file.path
            : "",

          membershipStatus: "pending",

          domain: req.body.domain,

          skills: req.body.skills,

          reason: req.body.reason

        }

      });

    res.status(201).json({
      message: "Membership application submitted",
      membership
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= GET USER MEMBERSHIP ================= */

const getUserMembership = async (req, res) => {

  try {

    const { userId } = req.params;

    const membership =
      await prisma.membership.findFirst({
        where: {
          userId: Number(userId)
        },
        include: {
          user: true
        }
      });

    if (!membership) {

      return res.status(200).json({
        membership: null
      });

    }

    res.status(200).json({
      membership
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= GET ALL MEMBERSHIPS ================= */

const getAllMemberships = async (req, res) => {

  try {

    const memberships =
      await prisma.membership.findMany({
        include: {
          user: true
        }
      });

    res.status(200).json(memberships);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= APPROVE MEMBERSHIP ================= */

const approveMembership = async (req, res) => {

  try {

    const { id } = req.params;

    const updatedMembership =
      await prisma.membership.update({
        where: {
          id: Number(id)
        },
        data: {
          membershipStatus: "approved",
          approvedAt: new Date()
        }
      });

    res.status(200).json({
      message: "Membership approved",
      updatedMembership
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};



/* ================= REJECT MEMBERSHIP ================= */

const rejectMembership = async (req, res) => {

  try {

    const { id } = req.params;

    const { reason } = req.body;

    const updatedMembership =
      await prisma.membership.update({

        where: {
          id: Number(id)
        },

        data: {
          membershipStatus: "rejected",
          rejectionReason: reason || "Rejected by admin"
        }

      });

    res.status(200).json({
      message: "Membership rejected",
      updatedMembership
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  applyMembership,
  getUserMembership,
  getAllMemberships,
  approveMembership,
  rejectMembership
};
