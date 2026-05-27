import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Users,
  Briefcase,
  Zap,
  Code,
  Star,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";
import clsx from "clsx";

/* ================= FLOATING CARD ================= */
const FloatingCard = ({ delay, icon: Icon, title, className }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [0, -15, 0], opacity: 1 }}
    transition={{
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
      opacity: { duration: 0.5 }
    }}
    className={clsx(
      "absolute bg-slate-950/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-4 w-56 hover:border-blue-500/30 transition-colors duration-300",
      className
    )}
  >
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl text-white shadow-md shadow-blue-500/20">
      <Icon size={20} />
    </div>
    <span className="text-slate-100 text-sm font-semibold font-heading tracking-wide">{title}</span>
  </motion.div>
);

/* ================= STAT CARD ================= */
const StatCard = ({ count, label, icon: Icon }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-slate-100 text-center group hover:border-blue-500/20 hover:shadow-[0_20px_40px_rgba(37,99,235,0.06)] transition-all duration-300"
  >
    <div className="mb-5 mx-auto w-14 h-14 bg-blue-50/80 p-3 rounded-full text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-sm">
      <Icon size={24} />
    </div>
    <h3 className="text-4xl font-extrabold text-slate-900 font-heading tracking-tight">{count}</h3>
    <p className="text-sm font-medium text-slate-500 mt-2 font-sans tracking-wide">{label}</p>
  </motion.div>
);

/* ================= DOMAIN CARD ================= */
const DomainCard = ({ title, icon: Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.04, y: -4 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className={clsx(
      "relative overflow-hidden rounded-2xl p-8 h-56 flex flex-col justify-end cursor-pointer group shadow-lg shadow-black/5 border border-transparent hover:border-white/20 transition-all duration-300",
      color
    )}
  >
    {/* Deep dynamic overlay gradients */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-transparent z-10 opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
    
    <Icon className="absolute top-6 right-6 text-white/10 w-20 h-20 group-hover:text-white/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-0" />
    
    <div className="relative z-20">
      <h3 className="text-white font-extrabold text-xl font-heading tracking-wide">{title}</h3>
      <div className="w-8 h-1 bg-gradient-to-r from-white to-cyan-300 mt-3 group-hover:w-20 transition-all duration-300 rounded-full" />
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <div className="w-full overflow-hidden font-sans bg-slate-50 text-slate-800">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden">

        {/* Mesh Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/60 z-0"></div>
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>

        {/* Dynamic Soft Blur Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 blur-[130px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-indigo-600/15 blur-[150px] rounded-full animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md mb-6">
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest font-heading">
                Official Student Chapter
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 font-heading tracking-tight leading-none">
              IEI – CSE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400/70 drop-shadow-sm">
                Student Chapter
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-lg leading-relaxed font-medium tracking-wide">
              Empowering future engineers through innovation,
              professional growth, and technical excellence.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link to="/join">
                <button className="btn-club-glow px-8 py-4 rounded-xl text-white font-bold shadow-xl shadow-blue-600/20 flex items-center">
                  Join IEI Now
                </button>
              </Link>

              <Link to="/events">
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 transition-all duration-300 group">
                  Explore Events 
                  <ArrowRight size={18} className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <div className="relative h-[550px] hidden lg:flex items-center justify-center">

            <FloatingCard delay={0} icon={Code} title="Technical Workshops" className="top-12 -left-4" />
            <FloatingCard delay={1.2} icon={Briefcase} title="Resume Sessions" className="top-1/2 -right-6" />
            <FloatingCard delay={0.6} icon={Zap} title="Tech Activities" className="bottom-12 left-10" />

            <div className="relative flex items-center justify-center">
              {/* Premium Geometric Glow Core */}
              <div className="absolute w-[380px] h-[380px] bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 rounded-full blur-[80px] opacity-25 animate-pulse" />

              <div className="relative p-6 bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[35px] shadow-[0_30px_70px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition duration-500">
                <img
                  src="/Institution_of_Engineers_(India).png"
                  alt="IEI Logo"
                  className="relative w-72 h-72 object-contain filter drop-shadow-[0_10px_20px_rgba(37,99,235,0.15)]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="py-28 bg-white relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-2xl pointer-events-none"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students"
              className="rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-slate-100 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-slate-50 hidden lg:block transform hover:scale-105 transition duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-50 p-2.5 rounded-xl text-emerald-600">
                  <Trophy size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Awarded</p>
                  <p className="text-base font-extrabold text-slate-900 font-heading">Best Student Chapter</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-blue-600 rounded-full"></div>
              <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest font-heading">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Building the Engineers <br />of Tomorrow
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-sans tracking-wide text-justify">
              The IEI-CSE Student Chapter promotes professional development
              through comprehensive architectural workshops, specialized industry-standard career guidance, and energetic interactive activities.
            </p>
            <div className="pt-2">
              <Link to="/about" className="text-blue-600 font-bold text-base inline-flex items-center group/link">
                Learn more about us 
                <ArrowRight size={18} className="ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-slate-50/80 border-y border-slate-100/50">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard count="20+" label="Events Hosted" icon={Calendar} />
          <StatCard count="500+" label="Students Engaged" icon={Users} />
          <StatCard count="12" label="Workshops" icon={Briefcase} />
          <StatCard count="4" label="Active Domains" icon={Zap} />
        </div>
      </section>

      {/* ================= DOMAINS ================= */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-extrabold text-xs uppercase tracking-widest font-heading">Specialization</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-4 font-heading tracking-tight">
              Explore Our Domains
            </h2>
            <p className="text-slate-500 font-medium text-lg font-sans tracking-wide">
              We specialize in multiple fields to provide holistic technical learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DomainCard title="Technical" icon={Code} color="bg-gradient-to-br from-blue-600 to-blue-700" />
            <DomainCard title="Design & Media" icon={Star} color="bg-gradient-to-br from-purple-600 to-indigo-700" />
            <DomainCard title="Marketing" icon={Zap} color="bg-gradient-to-br from-orange-500 to-amber-600" />
            <DomainCard title="Event Management" icon={Calendar} color="bg-gradient-to-br from-pink-600 to-rose-700" />
          </div>

          <Link to="/domains">
            <button className="mt-16 px-8 py-3.5 border border-slate-200 hover:border-blue-500/40 rounded-xl font-bold font-heading text-slate-700 text-sm tracking-wide bg-white shadow-sm hover:bg-slate-50 hover:text-blue-600 transition-all duration-300">
              Explore All Domains
            </button>
          </Link>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-center text-white relative overflow-hidden">
        
        {/* Decorative Fluid Ambient Background Vectors */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 font-heading tracking-tight">
            Ready to Level Up?
          </h2>
          <p className="text-slate-300/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium font-sans leading-relaxed tracking-wide">
            Join the IEI CSE Student Chapter today and gain absolute industry readiness.
          </p>
          <Link to="/join">
            <button className="px-10 py-4 bg-white text-blue-600 font-extrabold rounded-xl shadow-2xl hover:bg-slate-50 hover:scale-[1.03] transition-all duration-300 font-heading text-base tracking-wide">
              Apply for Membership
            </button>
          </Link>
        </div>
      </section>

      {/* Floating System Controller Access Portal */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link to="/admin-key">
          <button className="bg-slate-950/80 backdrop-blur-md border border-white/10 text-slate-200 px-6 py-3 rounded-xl shadow-2xl hover:bg-slate-900 hover:text-white transition-all duration-300 font-heading font-bold text-sm tracking-widest uppercase">
            Admin
          </button>
        </Link>
      </div>

    </div>
  );
}