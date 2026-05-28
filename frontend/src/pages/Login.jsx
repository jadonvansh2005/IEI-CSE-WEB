import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api/axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await API.post("/auth/login", {
        email: email.trim().toLowerCase(),
        password
      });

      /* SAVE TOKEN */
      localStorage.setItem(
        "token",
        response.data.token
      );

      /* SAVE USER */
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      
      toast.success(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-800 pb-24">

      {/* ================= PREMIUM HEADER ================= */}
      <section className="relative py-28 text-center bg-slate-950 text-white overflow-hidden">
        {/* Spatial Blur Profiles */}
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
            Login to Your Account
          </h1>
        </div>
      </section>

      {/* ================= FORM CONTENT BLOCK ================= */}
      <section className="mt-12 flex justify-center px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-3xl p-8 md:p-10 w-full max-w-[440px]"
        >
          <h2 className="text-2xl font-extrabold text-center mb-8 text-slate-900 font-heading tracking-tight">
            Login
          </h2>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-3.5 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-slate-800 placeholder-slate-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500/40 p-3.5 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 font-medium text-sm text-slate-800 placeholder-slate-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                    <span>Logging in...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>

          <p className="text-center mt-6 text-sm font-medium text-slate-500 font-sans">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-bold hover:text-blue-700 hover:underline ml-1 font-heading"
            >
              Sign Up
            </Link>
          </p>

        </motion.div>
      </section>

    </div>
  );
}

export default Login;
