import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EventCard({ event }) {

  const navigate = useNavigate();

  const isUpcoming =
    event.category === "Upcoming";

  const handleRegister = async () => {

    const user =
      JSON.parse(localStorage.getItem("user"));

    const token =
      localStorage.getItem("token");

    /* ================= USER NOT LOGGED IN ================= */

    if (!user || !token) {

      navigate("/login");

      return;

    }

    try {

      /* ================= FREE EVENT ================= */

      if (event.type === "free") {

        const response = await axios.post(

          `${import.meta.env.VITE_API_URL}/api/registrations`,

          {
            eventId: event.id
          },

          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }

        );

        alert(response.data.message);

        navigate("/dashboard");

        return;

      }

      /* ================= PAID EVENT ================= */

      if (event.type === "paid") {

        navigate(`/event-payment/${event.id}`);

      }

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );

    }

  };

  return (

    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
    >

      {/* IMAGE */}

      <div className="relative h-56 overflow-hidden">

        <img
          src={`${import.meta.env.VITE_API_URL}/${event.image?.replace(/\\/g, "/")}`}
          alt={event.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-700"
        />

        {/* STATUS BADGE */}

        <span
          className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${
            isUpcoming
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {event.category}
        </span>

      </div>

      {/* CONTENT */}

      <div className="p-6">

        {/* TAGS */}

        <div className="flex flex-wrap gap-2 mb-4">

          {(Array.isArray(event.tags)
            ? event.tags
            : typeof event.tags === "string"
            ? event.tags.split(",")
            : []
          ).map((tag, index) => (

            <span
              key={index}
              className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
            >
              {tag.trim()}
            </span>

          ))}

        </div>

        <h3 className="text-xl font-bold text-slate-800">
          {event.title}
        </h3>

        {/* DATE INFO */}

        <div className="mt-4 space-y-2 text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {event.date}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {event.time}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {event.venue}
          </div>

        </div>

        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          {event.description}
        </p>

        {/* REGISTER BUTTON */}

        <button
          onClick={handleRegister}
          className={`mt-6 w-full py-3 rounded-xl font-semibold transition ${
            isUpcoming
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90"
              : "bg-gray-200 text-gray-600 cursor-not-allowed"
          }`}
          disabled={!isUpcoming}
        >
          {isUpcoming
            ? event.type === "paid"
              ? `Register • ₹${event.price}`
              : "Register Now →"
            : "Event Concluded"}
        </button>

      </div>

    </motion.div>

  );

}

export default EventCard;