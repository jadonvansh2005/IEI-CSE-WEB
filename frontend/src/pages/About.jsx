import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Lightbulb
} from "lucide-react";

/* ================= JOURNEY ITEM ================= */
const JourneyItem = ({ year, title, description }) => (
  <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-12 items-center mb-24 last:mb-0">

    {/* Year Layout Frame */}
    <div className="md:col-span-2 md:text-right">
      <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent font-heading tracking-tight block">
        {year}
      </span>
    </div>

    {/* Timeline Line + Dot */}
    <div className="absolute left-0 md:relative md:col-span-1 flex justify-center h-full">
      <div className="h-full w-px bg-gradient-to-b from-blue-500/40 via-white/20 to-transparent absolute top-0 bottom-0 left-3 md:left-1/2 transform -translate-x-1/2"></div>
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-4 border-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 relative"></div>
    </div>

    {/* Content Card Panel */}
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className="md:col-span-2 bg-slate-950/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:border-blue-500/40 transition-colors duration-300"
    >
      <h3 className="text-xl font-bold mb-3 text-white font-heading tracking-wide">
        {title}
      </h3>
      <p className="text-slate-300 leading-relaxed font-sans text-sm md:text-base tracking-wide text-justify">
        {description}
      </p>
    </motion.div>

  </div>
);

export default function About() {
  return (
    <div className="w-full overflow-hidden font-sans bg-slate-50 text-slate-800">

      {/* ================= HEADER ================= */}
      <section className="relative w-full py-32 bg-slate-950 text-white overflow-hidden">
        
        {/* Architectural Overlay Mesh */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/60 z-0"></div>
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>

        <div className="relative z-10 w-full px-6 lg:px-20 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-black mb-6 font-heading tracking-tight leading-none"
          >
            About IEI – CSE
          </motion.h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium tracking-wide">
            The Institution of Engineers (India) – Computer Science & Engineering Student Chapter.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="w-full py-28 bg-white relative">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-blue-600 rounded-full"></div>
              <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest font-heading">
                Who We Are
              </span>
            </div>

            <h2 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Building the Engineers <br />of Tomorrow
            </h2>

            <p className="text-slate-600 leading-relaxed font-sans tracking-wide text-justify text-base md:text-lg">
              The IEI-CSE Student Chapter is a professional body dedicated to
              the advancement of computer science and engineering. We provide
              a platform for students to enhance technical skills and build
              professional competence.
            </p>

            <p className="text-slate-600 leading-relaxed font-sans tracking-wide text-justify text-base md:text-lg">
              Our chapter organizes workshops, seminars, technical competitions
              and career guidance sessions for holistic development.
            </p>
          </div>

          {/* Mission & Vision Layout Blocks (With Maximized Magnetic Hover Mechanics) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            <motion.div
              whileHover={{ y: -14, scale: 1.05, shadow: "0px 25px 50px rgba(37, 99, 235, 0.25)" }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-8 rounded-3xl shadow-xl shadow-blue-900/10 border border-blue-400/30 cursor-pointer group"
            >
              <div className="mb-5 bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                <Target size={28} className="text-white group-hover:rotate-6 transition-transform duration-300" />
              </div>
              <h3 className="font-extrabold text-xl mb-3 font-heading tracking-wide">
                Mission
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-sans tracking-wide text-justify">
                Bridge the gap between academia and industry through technical
                excellence and professional training.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -14, scale: 1.05, shadow: "0px 25px 50px rgba(124, 58, 237, 0.25)" }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="bg-gradient-to-br from-indigo-900 via-purple-950 to-slate-950 text-white p-8 rounded-3xl shadow-xl shadow-purple-950/10 border border-purple-500/20 cursor-pointer group"
            >
              <div className="mb-5 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                <Lightbulb size={28} className="text-indigo-400 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="font-extrabold text-xl mb-3 font-heading tracking-wide">
                Vision
              </h3>
              <p className="text-white/80 text-sm leading-relaxed font-sans tracking-wide text-justify">
                Build a strong community of innovative engineers prepared
                for global challenges.
              </p>
            </motion.div>

          </div>

         </div>
      </section>

      {/* ================= OBJECTIVES ================= */}
      <section className="w-full py-28 bg-slate-50 border-y border-slate-100/50">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-20">

          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest font-heading">Directives</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2 font-heading tracking-tight">
              Our Core Objectives
            </h2>
          </div>

          {/* Core Objectives (With Heavy Interactive Feedback Frameworks) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Resume Building Awareness",
              "Interview Preparation",
              "Professional Development",
              "Technical Engagement",
              "Industry Networking",
              "Soft Skills Training",
              "Innovation & Research",
              "Community Building"
            ].map((obj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ 
                  scale: 1.07, 
                  y: -10,
                  boxShadow: "0px 20px 35px rgba(37, 99, 235, 0.08)"
                }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-blue-500 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/20 cursor-pointer flex items-start gap-4 transition-colors duration-200 group"
              >
                <div className="mt-1 bg-blue-50 p-1.5 rounded-lg text-blue-600 shrink-0 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  <CheckCircle size={18} className="group-hover:scale-110 transition-transform duration-200" />
                </div>
                <p className="text-slate-800 font-bold font-sans tracking-wide text-base leading-snug group-hover:text-blue-900 transition-colors duration-200">
                  {obj}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= OUR JOURNEY ================= */}
      <section className="relative w-full py-32 bg-slate-950 text-white overflow-hidden">

        {/* Ambient Dark Core Glimmer */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black z-0"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-20">

          <div className="text-center mb-24">
            <span className="text-cyan-400 font-extrabold text-xs uppercase tracking-widest font-heading">Milestones</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 font-heading tracking-tight">
              Our Journey
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <JourneyItem
              year="2026"
              title="Official Launch – LevelUp"
              description="Launched successfully with comprehensive career readiness blueprints, architectural code structures, and technical keynote streams led by recognized computational engineers."
            />

            <JourneyItem
              year="2025"
              title="Chapter Formation"
              description="Successful aggregation of the primary executive committee panels under targeted systemic roadmap structures and departmental coordinator governance models."
            />
          </div>

        </div>
      </section>

    </div>
  );
}