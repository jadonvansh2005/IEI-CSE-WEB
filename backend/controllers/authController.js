const prisma = require("../config/prisma");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

/* ================= SIGNUP ================= */

const signup = async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      branch,
      year,
      password
    } = req.body;

    /* CHECK EXISTING USER */

    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    /* HASH PASSWORD */

    const hashedPassword = await bcrypt.hash(password, 10);

    /* CREATE USER */

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        branch,
        year,
        password: hashedPassword
      }
    });

    /* RESPONSE */

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        branch: user.branch,
        year: user.year,
        role: user.role
      }
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= LOGIN ================= */

const login = async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    /* FIND USER */

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    /* CHECK PASSWORD */

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    /* GENERATE TOKEN */

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    /* RESPONSE */

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        branch: user.branch,
        year: user.year,
        role: user.role
      }
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  signup,
  login
};