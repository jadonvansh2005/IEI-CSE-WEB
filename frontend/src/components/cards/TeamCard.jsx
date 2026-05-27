import { motion } from "framer-motion";

function TeamCard({
  name,
  role,
  image,
  intro,
  email,
  linkedin,
  phone,
  highlight,
  dark,
  onClick
}) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      onClick={() => onClick({ name, role, image, intro, email, linkedin, phone })}
      /* Completely reimagined UI layout with ambient shadow layers and premium glassmorphic border profile frames */
      className={`p-8 rounded-[32px] text-center cursor-pointer relative overflow-hidden transition-all duration-300 group select-none
        ${
          dark
            ? "bg-gradient-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-2xl border border-white/10 text-white shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-blue-500/30"
            : "bg-gradient-to-b from-white to-slate-50/80 border border-slate-200/60 text-slate-800 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:border-blue-500/20 hover:shadow-[0_25px_50px_rgba(37,99,235,0.08)]"
        }
        ${highlight ? "ring-2 ring-blue-500/40 shadow-[0_0_25px_rgba(37,99,235,0.15)]" : ""}
      `}
    >
      
      {/* Absolute Geometric Micro-Glow Accent Indicators behind card corners */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tl-[32px] pointer-events-none transition-opacity duration-300 opacity-50 group-hover:opacity-100"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-all duration-500"></div>

      {/* ================= PROFILE AVATAR CAGE LAYER ================= */}
      <div className="flex justify-center mb-6 relative">
        
        {/* Animated outer tracking aura ring that breathes on frame hover */}
        <div className="absolute inset-0 w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-emerald-400 opacity-30 blur-md group-hover:opacity-70 group-hover:scale-110 group-hover:rotate-180 transition-all duration-700 pointer-events-none"></div>
        
        {/* Premium multi-layered isometric avatar shield */}
        <div className="relative w-26 h-26 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-xl group-hover:rotate-3 transition-transform duration-500">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-full object-cover border-2 border-slate-950/10 bg-slate-900 group-hover:scale-[1.02] transition duration-500 select-none pointer-events-none"
          />
        </div>

      </div>

      {/* ================= CARD TYPOGRAPHY CORE ================= */}
      
      {/* High-intensity black weight layout heading */}
      <h3 className="text-xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-current via-current to-current group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:via-blue-500 transition-all duration-300">
        {name}
      </h3>

      {/* Premium responsive sub-badge metadata slot indicator */}
      <div className="inline-block mt-2 px-3 py-1 rounded-xl bg-blue-500/5 border border-transparent group-hover:border-blue-500/10 group-hover:bg-blue-500/10 transition-all duration-300">
        <p className={`font-heading font-extrabold text-xs uppercase tracking-widest ${
          dark ? "text-slate-400 group-hover:text-cyan-300" : "text-slate-500 group-hover:text-blue-600"
        } transition-colors duration-300`}>
          {role}
        </p>
      </div>

    </motion.div>
  );
}

export default TeamCard;