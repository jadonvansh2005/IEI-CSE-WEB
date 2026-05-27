const prisma = require("../config/prisma");

/* ================= GET PROFILE ================= */

const getProfile = async (req, res) => {

  try {

    const user = await prisma.user.findUnique({

      where: {
        id: req.user.id
      },

      include: {

        registrations: {
          include: {
            event: true
          }
        },

        memberships: true,

        certificates: {
          include: {
            event: true
          }
        }

      }

    });

    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }

    res.status(200).json(user);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= GET ALL USERS ================= */

const getAllUsers = async (req, res) => {

  try {

    const users =
      await prisma.user.findMany({

        include: {

          registrations: true,

          memberships: true,

          certificates: true

        },

        orderBy: {
          id: "desc"
        }

      });

    res.status(200).json(users);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= CHANGE ROLE ================= */

const changeUserRole = async (req, res) => {

  try {

    const { id } = req.params;

    const { role } = req.body;

    const updatedUser =
      await prisma.user.update({

        where: {
          id: Number(id)
        },

        data: {
          role
        }

      });

    res.status(200).json({

      message: "Role updated",

      updatedUser

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= BLOCK USER ================= */

const blockUser = async (req, res) => {

  try {

    const { id } = req.params;

    const updatedUser =
      await prisma.user.update({

        where: {
          id: Number(id)
        },

        data: {
          isBlocked: true
        }

      });

    res.status(200).json({

      message: "User blocked",

      updatedUser

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= UNBLOCK USER ================= */

const unblockUser = async (req, res) => {

  try {

    const { id } = req.params;

    const updatedUser =
      await prisma.user.update({

        where: {
          id: Number(id)
        },

        data: {
          isBlocked: false
        }

      });

    res.status(200).json({

      message: "User unblocked",

      updatedUser

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= DELETE USER ================= */

const deleteUser = async (req, res) => {

  try {

    const { id } = req.params;

    await prisma.user.delete({

      where: {
        id: Number(id)
      }

    });

    res.status(200).json({
      message: "User deleted"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {

  getProfile,

  getAllUsers,

  changeUserRole,

  blockUser,

  unblockUser,

  deleteUser

};