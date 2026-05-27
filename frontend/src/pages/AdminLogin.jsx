import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "adminToken",
        response.data.token
      );

      localStorage.setItem(
        "admin",
        JSON.stringify(response.data.admin)
      );

      alert(response.data.message);

      navigate("/admin/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-blue-950 font-sans text-slate-200 flex flex-col relative overflow-hidden">

      {/* Radiant Ice-Blue and Greenish Mint Glowing Ambient Blur Vectors */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-emerald-500/15 rounded-full blur-[150px] pointer-events-none animate-cyber-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      {/* HEADER */}
      <section className="py-24 text-center relative z-10 border-b border-cyan-500/10 bg-slate-900/40 backdrop-blur-xl">

        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(0,242,254,0.15)]">
          <span className="text-cyan-300 text-xs font-bold uppercase tracking-widest font-heading">
            Secure Administrator Portal
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-emerald-300 drop-shadow-md leading-none">
          Admin Login
        </h1>

        <p className="mt-4 text-cyan-200/60 font-medium text-sm md:text-base tracking-wide max-w-xs mx-auto">
          Access IEI Admin Panel
        </p>

      </section>

      {/* LOGIN FORM */}
      <section className="flex flex-1 items-center justify-center px-4 py-12 relative z-10">

        <form
          onSubmit={handleLogin}
          className="bg-slate-900/60 backdrop-blur-2xl border border-cyan-500/20 rounded-[32px] p-8 md:p-10 w-full max-w-md shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:border-emerald-400/40 hover:shadow-[0_0_35px_rgba(0,242,254,0.1)] transition-all duration-500 group"
        >

          <h2 className="text-2xl font-extrabold text-center text-white font-heading tracking-tight mb-8">
            Login to Admin Panel
          </h2>

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-slate-950/60 border border-cyan-500/20 text-white p-4 rounded-xl placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 mb-4 shadow-inner transition-all duration-300"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-slate-950/60 border border-cyan-500/20 text-white p-4 rounded-xl placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 mb-6 shadow-inner transition-all duration-300"
            required
          />

          <button
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-black font-heading text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(0,242,254,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform scale-100 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center"
          >
            {
              loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Authenticating Core...</span>
                </div>
              ) : (
                "Login"
              )
            }
          </button>

          <p className="text-sm text-cyan-200/50 mt-6 text-center font-sans font-medium">
            Need Admin Account?

            <Link
              to="/admin-signup"
              className="text-cyan-400 font-bold hover:text-emerald-400 hover:underline ml-1 font-heading transition-colors"
            >
              Sign Up
            </Link>

          </p>

        </form>

      </section>

    </div>

  );

}

export default AdminLogin;