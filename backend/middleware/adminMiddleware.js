const adminMiddleware = (req, res, next) => {

  try {

    if (req.user.role !== "admin") {

      return res.status(403).json({
        message: "Access denied"
      });

    }

    next();

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = adminMiddleware;