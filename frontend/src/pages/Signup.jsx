import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/auth/signup", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        branch: formData.branch,
        year: formData.year,
        password: formData.password
      });

      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-800 pb-24">

      {/* ================= PREMIUM HEADER ================= */}
      <section className="relative py-28 text-center bg-slate-950 text-white overflow-hidden">
        {/* Spatial Soft Glows */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/60 z-0"></div>
        <div className="absolute top-10 left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md mb-4">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest font-heading">
              Gateway Access Portal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight leading-none mt-2">
            Create an Account
          </h1>

          <p className="mt-4 text-slate-400 font-medium text-base tracking-wide max-w-sm mx-auto">
            Join the official IEI CSE Student Chapter network today.
          </p>
        </div>
      </section>

      {/* ================= FORM CONTENT BLOCK ================= */}
      <section className="mt-12 flex justify-center px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-8 md:p-10 w-full max-w-[500px]"
        >
          <h2 className="text-2xl font-extrabold text-center mb-8 text-slate-900 font-heading tracking-tight">
            Sign Up
          </h2>

          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-3.5 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-slate-800 placeholder-slate-400"
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-3.5 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-slate-800 placeholder-slate-400"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-3.5 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-slate-800 placeholder-slate-400"
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                name="branch"
                placeholder="Branch (e.g. CSE)"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-3.5 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-slate-800 placeholder-slate-400"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="year"
                placeholder="Year (e.g. 3rd)"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-3.5 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-slate-800 placeholder-slate-400"
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-5">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-3.5 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-slate-800 placeholder-slate-400"
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-3.5 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-slate-800 placeholder-slate-400"
                onChange={handleChange}
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-club-glow w-full py-4 rounded-xl font-bold font-heading text-sm tracking-wide shadow-xl shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center text-white"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>

          <p className="text-center mt-6 text-sm font-medium text-slate-500 font-sans">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-bold hover:text-blue-700 hover:underline ml-1 font-heading"
            >
              Login
            </Link>
          </p>
        </motion.div>

      </section>
    </div>
  );
}

export default Signup;