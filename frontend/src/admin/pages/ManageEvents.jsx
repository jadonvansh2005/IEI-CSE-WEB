import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

function ManageEvents() {

  const adminToken =
    localStorage.getItem("adminToken");

  const [events, setEvents] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [image, setImage] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      date: "",
      time: "",
      venue: "",
      price: "",
      type: "free",
      category: "Upcoming",
      tags: ""
    });

  /* ================= FETCH EVENTS ================= */

  const fetchEvents = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/events`
      );

      setEvents(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchEvents();

  }, []);

  /* ================= HANDLE INPUT ================= */

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  /* ================= CREATE EVENT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const submitData = new FormData();

      submitData.append(
        "title",
        formData.title
      );

      submitData.append(
        "description",
        formData.description
      );

      submitData.append(
        "date",
        formData.date
      );

      submitData.append(
        "time",
        formData.time
      );

      submitData.append(
        "venue",
        formData.venue
      );

      submitData.append(
        "price",
        formData.price
      );

      submitData.append(
        "type",
        formData.type
      );

      submitData.append(
        "category",
        formData.category
      );

      submitData.append(
        "tags",
        JSON.stringify(
          formData.tags
            .split(",")
            .map(tag => tag.trim())
        )
      );

      if (image) {

        submitData.append(
          "eventImage",
          image
        );

      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/events`,
        submitData,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type":
              "multipart/form-data"
          }
        }
      );

      alert(response.data.message);

      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        venue: "",
        price: "",
        type: "free",
        category: "Upcoming",
        tags: ""
      });

      setImage(null);

      fetchEvents();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Event creation failed"
      );

    } finally {

      setLoading(false);

    }

  };

  /* ================= DELETE EVENT ================= */

  const deleteEvent = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this event?"
      );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/events/${id}`,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        }
      );

      alert("Event deleted");

      fetchEvents();

    } catch (error) {

      console.log(error);

      alert("Delete failed");

    }

  };

  return (
    /* Integrated core side-by-side flex layout for responsive view dashboard sync */
    <div className="flex min-h-screen bg-gradient-to-br from-[#031525] via-[#05293A] to-[#0A2240] text-white relative overflow-hidden font-sans">

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* SIDEBAR NAVIGATION PANEL */}
      <AdminSidebar />

      {/* MAIN LAYOUT CANVAS WRAPPER */}
      <div className="flex-1 flex flex-col relative z-10">
        
        <AdminNavbar />

        <div className="p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-10 pl-1">
            <div className="flex items-center gap-3">
              <div className="h-1 w-6 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>
              <h1 className="text-5xl font-black text-white tracking-tight font-heading">
                Manage Events
              </h1>
            </div>
            <p className="text-cyan-200/70 mt-3 text-lg font-medium tracking-wide">
              Create and manage IEI events
            </p>
          </div>

          {/* CREATE EVENT FROSTED CONTROL SHEET */}
          <div className="bg-white/5 backdrop-blur-xl border border-cyan-400/10 rounded-[32px] shadow-[0_0_40px_rgba(0,255,255,0.08)] p-8 mb-12">
            
            <h2 className="text-3xl font-extrabold mb-8 text-cyan-300 font-heading tracking-tight">
              Create Event
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="bg-[#071C2F]/80 border border-cyan-400/10 text-white placeholder:text-cyan-100/40 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 font-medium text-sm transition-all duration-300"
                />

                <input
                  type="text"
                  name="venue"
                  placeholder="Venue"
                  value={formData.venue}
                  onChange={handleChange}
                  required
                  className="bg-[#071C2F]/80 border border-cyan-400/10 text-white placeholder:text-cyan-100/40 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 font-medium text-sm transition-all duration-300"
                />

                <input
                  type="text"
                  name="date"
                  placeholder="Date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="bg-[#071C2F]/80 border border-cyan-400/10 text-white placeholder:text-cyan-100/40 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 font-medium text-sm transition-all duration-300"
                />

                <input
                  type="text"
                  name="time"
                  placeholder="Time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="bg-[#071C2F]/80 border border-cyan-400/10 text-white placeholder:text-cyan-100/40 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 font-medium text-sm transition-all duration-300"
                />

                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="bg-[#071C2F]/80 border border-cyan-400/10 text-white placeholder:text-cyan-100/40 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 font-medium text-sm transition-all duration-300"
                />

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="bg-[#071C2F]/80 border border-cyan-400/10 text-cyan-100 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 font-medium text-sm transition-all duration-300 cursor-pointer appearance-none"
                >
                  <option value="free" className="bg-[#05293A] text-white">Free</option>
                  <option value="paid" className="bg-[#05293A] text-white">Paid</option>
                </select>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="bg-[#071C2F]/80 border border-cyan-400/10 text-cyan-100 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 font-medium text-sm transition-all duration-300 cursor-pointer appearance-none"
                >
                  <option value="Upcoming" className="bg-[#05293A] text-white">Upcoming</option>
                  <option value="Past" className="bg-[#05293A] text-white">Past</option>
                </select>

                <input
                  type="text"
                  name="tags"
                  placeholder="Tags (comma separated)"
                  value={formData.tags}
                  onChange={handleChange}
                  className="bg-[#071C2F]/80 border border-cyan-400/10 text-white placeholder:text-cyan-100/40 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 font-medium text-sm transition-all duration-300"
                />

              </div>

              <textarea
                rows="5"
                name="description"
                placeholder="Event Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full bg-[#071C2F]/80 border border-cyan-400/10 text-white placeholder:text-cyan-100/40 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 font-medium text-sm leading-relaxed transition-all duration-300"
              />

              {/* IMAGE CAPTURE FRAME */}
              <div className="bg-slate-950/20 border border-cyan-400/10 p-5 rounded-2xl">
                <p className="mb-3 font-bold font-heading text-sm text-cyan-200">
                  Event Poster Image
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setImage(e.target.files[0])
                  }
                  className="w-full bg-[#071C2F]/50 border border-cyan-400/10 text-cyan-100/70 text-sm font-semibold file:mr-4 file:py-1.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-cyan-500 file:text-slate-950 file:hover:bg-cyan-400 file:transition-colors cursor-pointer"
                />
              </div>

              {/* ACTION EXECUTE TRIGGER */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-black font-heading text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(0,242,254,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform scale-100 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center"
              >
                {loading ? "Creating Event Cluster..." : "Create Event Entry"}
              </button>

            </form>

          </div>

          {/* EVENTS CATALOGUE SECTON */}
          <div>
            
            <div className="flex items-center gap-3 mb-10 pl-1">
              <div className="h-1 w-6 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>
              <h2 className="text-4xl font-black text-white tracking-tight font-heading">
                All Events
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {events.map((event) => (

                <div
                  key={event.id}
                  className="bg-white/5 backdrop-blur-xl rounded-[30px] overflow-hidden border border-cyan-400/10 shadow-[0_0_30px_rgba(0,255,255,0.08)] hover:shadow-[0_0_45px_rgba(0,255,255,0.15)] hover:scale-[1.01] transition-all duration-400 flex flex-col justify-between group"
                >

                  {/* POSTER RENDER SLOT */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                    <img
                      src={`${import.meta.env.VITE_API_URL}/${event.image?.replace(/\\/g, "/")}`}
                      alt={event.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031525]/60 via-transparent to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase font-heading backdrop-blur-md shadow-md">
                      {event.category}
                    </span>
                  </div>

                  {/* METADATA CONTENT MATRIX */}
                  <div className="p-6 md:p-7 flex-1 flex flex-col justify-between gap-6">
                    
                    <div>
                      <h3 className="text-3xl font-black font-heading text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-cyan-200/50 font-bold mt-1.5 font-sans">
                        📅 {event.date}
                      </p>
                      <p className="text-slate-300 mt-4 text-sm md:text-base font-medium font-sans leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-cyan-400/10 flex justify-between items-center">
                      
                      <div>
                        <p className="text-xs font-bold font-heading tracking-widest text-cyan-400 uppercase">
                          {event.type.toUpperCase()} Access
                        </p>
                        <p className="text-xl font-black font-heading text-white mt-0.5">
                          ₹{event.price}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          deleteEvent(event.id)
                        }
                        className="px-6 py-3 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white hover:border-transparent text-red-400 text-xs font-black font-heading tracking-widest uppercase shadow-md hover:shadow-red-500/20 transition-all duration-300 cursor-pointer"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManageEvents;