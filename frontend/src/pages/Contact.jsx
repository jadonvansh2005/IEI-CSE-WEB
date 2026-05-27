import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Instagram,
  Linkedin,
  Facebook
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="w-full overflow-hidden font-sans bg-slate-50 text-slate-800">

      {/* ================= PREMIUM HEADER ================= */}
      <section className="relative py-32 text-center bg-slate-950 text-white overflow-hidden">
        
        {/* Spatial Blur Profiles */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/60 z-0"></div>
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>

        <div className="absolute top-10 left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md mb-6">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest font-heading">
              Get in Touch
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight leading-none mt-2">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400/70 drop-shadow-sm">
              Us
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed font-medium tracking-wide">
            Have questions or want to collaborate? Reach out to us.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-28 bg-slate-50/60 border-t border-slate-100 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-slate-50/50 to-slate-100/20 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-stretch">

          {/* LEFT CARD PANEL (Occupies 5 Columns for a Sleeker Horizon Ratio) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white p-10 md:p-12 rounded-[32px] shadow-2xl flex flex-col justify-between border border-blue-800/20"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-1 w-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <h2 className="text-2xl font-black font-heading tracking-wide">
                  Contact Information
                </h2>
              </div>

              <div className="space-y-6">
                <ContactItem icon={Mail} title="Email Us" value="contact@ieicsc.org" />
                <ContactItem icon={Phone} title="Call Us" value="+91 98765 43210" />
                <ContactItem icon={MapPin} title="Visit Us" value="Department of CSE, MITS Gwalior" />
              </div>
            </div>

            <div className="mt-14 pt-8 border-t border-white/10">
              <p className="font-bold text-xs uppercase tracking-widest text-cyan-400 font-heading mb-4">
                Follow Us
              </p>

              <div className="flex gap-4">
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Linkedin} />
                <SocialIcon Icon={Facebook} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM PANEL (Occupies 7 Columns - Premium Opaque Glass Architecture) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 bg-white p-10 md:p-12 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-200/80 flex flex-col justify-center"
          >
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading tracking-tight mb-8">
              Send us a Message
            </h2>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-sm font-semibold mb-6 shadow-sm"
              >
                <CheckCircle size={18} className="shrink-0 text-emerald-600" />
                Message Sent Successfully!
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField placeholder="First Name" />
                <InputField placeholder="Last Name" />
              </div>
              
              <InputField type="email" placeholder="Email Address" />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-4 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium font-sans text-sm text-slate-800 placeholder-slate-400"
              ></textarea>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-club-glow w-full py-4 rounded-xl font-bold font-heading text-sm tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 cursor-pointer"
                >
                  Send Message <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="py-28 bg-gradient-to-b from-slate-950 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-extrabold text-xs uppercase tracking-widest font-heading">Navigation</span>
            <h2 className="text-4xl font-black text-white font-heading tracking-tight mt-2">
              Our Location
            </h2>
          </div>

          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="rounded-[32px] overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-900"
          >
            <iframe
              title="IEI Location"
              src="https://www.google.com/maps?q=MITS+Gwalior&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="w-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out"
            ></iframe>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

/* ================= COMPONENT PLUGINS (Upgraded Visual Styling) ================= */

/* Contact Item Sub-Module */
const ContactItem = ({ icon: Icon, title, value }) => (
  <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/20 hover:bg-white/10 hover:translate-x-2 transition-all duration-300 group cursor-pointer">
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-xl text-white shadow-md shadow-blue-500/10 transform group-hover:scale-110 transition-transform duration-300">
      <Icon size={20} />
    </div>
    <div>
      <p className="font-bold font-heading text-sm tracking-wide text-slate-200">{title}</p>
      <p className="text-base font-medium text-slate-300 mt-0.5 font-sans truncate">{value}</p>
    </div>
  </div>
);

/* Social Icon Button Frame */
const SocialIcon = ({ Icon }) => (
  <motion.div 
    whileHover={{ scale: 1.15, y: -4 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer text-slate-300 hover:bg-white hover:text-blue-900 shadow-sm hover:shadow-xl transition-colors duration-300"
  >
    <Icon size={20} />
  </motion.div>
);

/* Modularized Input Field System */
const InputField = ({ placeholder, type = "text" }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-4 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium font-sans text-sm text-slate-800 placeholder-slate-400"
  />
);