import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminKey() {

  const navigate = useNavigate();

  const [key, setKey] = useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/verify-key`,
        {
          secretKey: key
        }
      );

      alert(response.data.message);

      navigate("/admin-signup");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Verification Failed"
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

      {/* ================= CYBER HEADER ================= */}
      <section className="py-24 text-center relative z-10 border-b border-cyan-500/10 bg-slate-900/40 backdrop-blur-xl">

        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(0,242,254,0.15)]">
          <span className="text-cyan-300 text-xs font-bold uppercase tracking-widest font-heading">
            Security Clearance Required
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-emerald-300 drop-shadow-md leading-none">
          Admin Access
        </h1>

        <p className="mt-4 text-cyan-200/60 font-medium text-sm md:text-base tracking-wide max-w-xs mx-auto">
          Enter the secret system key to continue
        </p>

      </section>

      {/* ================= CYBER VERIFICATION FORM ================= */}
      <section className="flex flex-1 items-center justify-center px-4 py-12 relative z-10">

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/60 backdrop-blur-2xl border border-cyan-500/20 rounded-[32px] p-8 md:p-10 w-full max-w-md shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:border-emerald-400/40 hover:shadow-[0_0_35px_rgba(0,242,254,0.1)] transition-all duration-500 group"
        >

          <h2 className="text-xl font-extrabold text-center text-white font-heading tracking-wide mb-8">
            Secret Key Verification
          </h2>

          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Enter Secret Key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full bg-slate-950/60 border border-cyan-500/20 text-white p-4 pr-12 rounded-xl placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 shadow-inner transition-all duration-300 tracking-widest"
              required
            />
            {/* Visual glow element indicator */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300 pointer-events-none select-none text-base">
              🔑
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-black font-heading text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(0,242,254,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform scale-100 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center"
          >
            {
              loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying Crypt...</span>
                </div>
              ) : (
                "Continue"
              )
            }
          </button>

        </form>

      </section>

    </div>

  );

}

export default AdminKey;