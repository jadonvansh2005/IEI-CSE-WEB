const prisma = require("../config/prisma");

/* ================= CREATE EVENT ================= */

const createEvent = async (req, res) => {

  try {

    const {
      title,
      description,
      date,
      venue,
      price,
      time,
      type,
      category,
      image,
      tags
    } = req.body;

    const event = await prisma.event.create({
      data: {

        title,
        description,
        date,
        time,
        venue,

        price: Number(price) || 0,

        type,
        category,

        tags: tags
          ? JSON.parse(tags)
          : [],

        image: req.file
          ? req.file.path
          : ""

      }

    });

    res.status(201).json({
      message: "Event created successfully",
      event
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= GET ALL EVENTS ================= */

const getAllEvents = async (req, res) => {

  try {

    const events = await prisma.event.findMany({
      orderBy: {
        id: "desc"
      }
    });

    res.status(200).json(events);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= GET SINGLE EVENT ================= */

const getSingleEvent = async (req, res) => {

  try {

    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: {
        id: Number(id)
      }
    });

    if (!event) {
      return res.status(404).json({
        message: "Event not found"
      });
    }

    res.status(200).json(event);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= UPDATE EVENT ================= */

const updateEvent = async (req, res) => {

  try {

    const { id } = req.params;

    const {
      title,
      description,
      date,
      venue,
      price,
      time,
      type,
      category,
      image,
      tags
    } = req.body;

    const updatedEvent = await prisma.event.update({
      where: {
        id: Number(id)
      },
      data: {

        title,
        description,
        date,
        time,
        venue,

        price: Number(price) || 0,

        type,
        category,

        tags: tags
          ? JSON.parse(tags)
          : [],

        image: req.file
          ? req.file.path
          : ""

      }

    });

    res.status(200).json({
      message: "Event updated successfully",
      updatedEvent
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

/* ================= DELETE EVENT ================= */

const deleteEvent = async (req, res) => {

  try {

    const { id } = req.params;

    await prisma.event.delete({
      where: {
        id: Number(id)
      }
    });

    res.status(200).json({
      message: "Event deleted successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent
};