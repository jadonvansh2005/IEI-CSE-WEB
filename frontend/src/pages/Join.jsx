import { motion } from "framer-motion";
import { useState } from "react";

export default function Join() {
  const [selectedDomain, setSelectedDomain] = useState("");

  const domains = ["Technical", "Design", "Marketing", "Events"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-6 py-20 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/30 blur-3xl rounded-full"></div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-10 md:p-14 rounded-3xl shadow-2xl text-white"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Join The Community
          </h1>
          <p className="text-blue-200 mt-3">
            Be a part of the innovation. Fill out the form below to apply for membership.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Full Name" />
            <Input type="email" placeholder="Email Address" />
          </div>

          {/* Phone + Branch */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Phone Number" />
            <Input placeholder="Branch & Year" />
          </div>

          {/* Preferred Domain */}
          <div>
            <p className="mb-3 text-sm text-blue-200">
              Preferred Domain
            </p>
            <div className="flex flex-wrap gap-3">
              {domains.map((domain) => (
                <button
                  type="button"
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-5 py-2 rounded-full border transition ${
                    selectedDomain === domain
                      ? "bg-blue-600 border-blue-600"
                      : "border-white/30 hover:bg-white/20"
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* Skills */}
          <Input placeholder="Technical Skills (Optional)" />

          {/* Motivation */}
          <textarea
            rows="4"
            placeholder="Why do you want to join IEI?"
            className="w-full bg-white/10 border border-white/30 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          ></textarea>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            Submit Application
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
}

/* Reusable Input */
const Input = ({ placeholder, type = "text" }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full bg-white/10 border border-white/30 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
  />
);