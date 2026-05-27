import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/cards/EventCard";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  /* ================= FETCH EVENTS ================= */
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/events"
        );
        setEvents(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  /* ================= FILTER EVENTS ================= */
  const filteredEvents =
    filter === "All"
      ? events
      : events.filter(
          (event) => event.category === filter
        );

  return (
    <div className="w-full overflow-hidden font-sans bg-slate-50 text-slate-800">

      {/* ================= HEADER ================= */}
      <section className="relative py-32 text-center overflow-hidden bg-slate-950 text-white">
        
        {/* Deep Space Spatial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/60 z-0"></div>
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>

        {/* Ambient Blur Core Orbs */}
        <div className="absolute top-10 left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse"></div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md mb-6">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest font-heading">
              Events & Activities
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight leading-none mt-2">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400/70 drop-shadow-sm">
              Events
            </span>
          </h1>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium tracking-wide">
            Discover our latest workshops, seminars, and technical competitions designed to level up your skills.
          </p>

          {/* FILTERS (With Integrated UltraGlow Interactive State Mechanics) */}
          <div className="mt-12 flex justify-center flex-wrap gap-4 relative z-20">
            {[
              "All",
              "Upcoming",
              "Past"
            ].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  filter === type
                    ? "btn-club-glow text-white shadow-xl shadow-blue-600/20"
                    : "bg-white/5 text-slate-300 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:text-white"
                }`}
              >
                {type} Events
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EVENTS GRID ================= */}
      <section className="relative py-24 bg-slate-50/60 border-t border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-slate-50/50 to-slate-100/20 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* LOADING STATE (Beautiful Animated Skeleton Loader Grid Instead of Raw Text) */}
          {loading && (
            <div className="grid md:grid-cols-2 gap-10 lg:gap-12 animate-pulse">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="bg-white rounded-3xl p-6 h-[380px] border border-slate-100 space-y-5 flex flex-col justify-between shadow-sm">
                  <div className="space-y-4">
                    <div className="w-full h-44 bg-slate-200/80 rounded-2xl"></div>
                    <div className="h-6 bg-slate-200 w-3/4 rounded-md"></div>
                    <div className="h-4 bg-slate-200 w-1/2 rounded-md"></div>
                  </div>
                  <div className="h-10 bg-slate-200/60 w-32 rounded-xl"></div>
                </div>
              ))}
            </div>
          )}

          {/* NO EVENTS FOUND CASE PANEL */}
          {!loading && filteredEvents.length === 0 && (
            <div className="text-center py-20 max-w-md mx-auto bg-white border border-slate-100 rounded-3xl p-10 shadow-sm">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-slate-800 font-heading">No Events Found</h3>
              <p className="text-slate-500 text-sm mt-2 font-sans">
                There are currently no events registered under the <span className="font-semibold text-blue-600">"{filter}"</span> filter block.
              </p>
            </div>
          )}

          {/* DYNAMIC EVENTS RENDER GRID Frame */}
          {!loading && filteredEvents.length > 0 && (
            <div className="grid md:grid-cols-2 gap-10 lg:gap-12 transition-all duration-500 animate-fadeIn">
              {filteredEvents.map((event) => (
                <div 
                  key={event.id}
                  className="transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_20px_40px_rgba(37,99,235,0.03)] rounded-3xl"
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default Events;