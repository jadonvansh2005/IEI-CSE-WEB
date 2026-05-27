import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

function VerifyPayments() {

  const [registrations, setRegistrations] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const adminToken =
    localStorage.getItem("adminToken");

  /* ================= FETCH REGISTRATIONS ================= */

  const fetchRegistrations = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/registrations`,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        }
      );

      setRegistrations(response.data);

    } catch (error) {

      console.log(error);

      alert("Failed to fetch registrations");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchRegistrations();

  }, []);

  /* ================= APPROVE ================= */

  const approveRegistration = async (id) => {

    try {

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/registrations/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        }
      );

      alert("Registration Approved");

      fetchRegistrations();

    } catch (error) {

      console.log(error);

      alert("Approval Failed");

    }

  };

  /* ================= REJECT ================= */

  const rejectRegistration = async (id) => {

    try {

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/registrations/reject/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        }
      );

      alert("Registration Rejected");

      fetchRegistrations();

    } catch (error) {

      console.log(error);

      alert("Rejection Failed");

    }

  };

  return (

    /* Immersive full-screen flex layout synchronized perfectly with the cyber sidebar matrix */
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-blue-950 font-sans text-slate-200 relative overflow-hidden">

      {/* Cyber Glow FX Core Elements */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none animate-cyber-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT SPACE CONTAINER */}
      <div className="flex-1 flex flex-col relative z-10">

        <AdminNavbar />

        <div className="p-8 md:p-10">

          {/* HEADER LAYER MODULE */}
          <div className="mb-10 pl-1">
            <div className="flex items-center gap-3">
              <div className="h-1 w-6 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>
              <h1 className="text-4xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-200 drop-shadow-sm">
                Verify Event Payments
              </h1>
            </div>
            <p className="text-cyan-200/60 font-medium text-sm mt-2 tracking-wide">
              Approve or reject event registrations
            </p>
          </div>

          {/* ASYNC RENDERING SWITCH BLOCKS */}
          {loading ? (

            <div className="text-center py-24">
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xl text-cyan-200/70 animate-pulse font-medium">
                  Loading registrations...
                </p>
              </div>
            </div>

          ) : registrations.length === 0 ? (

            <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-16 text-center max-w-xl mx-auto">
              <div className="text-4xl mb-4">💳</div>
              <h2 className="text-3xl font-bold text-cyan-100 font-heading tracking-tight">
                No Registrations Found
              </h2>
              <p className="text-cyan-200/50 text-sm font-medium font-sans mt-2">
                All participant payment ledger indexes are fully cleared.
              </p>
            </div>

          ) : (

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {registrations.map((registration) => (

                <div
                  key={registration.id}
                  className="bg-white/5 backdrop-blur-xl rounded-[32px] border border-cyan-400/10 overflow-hidden shadow-[0_0_35px_rgba(0,255,255,0.05)] hover:shadow-[0_0_45px_rgba(0,255,255,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group"
                >

                  <div>
                    {/* USER CARD CARD CAPTION BAR */}
                    <div className="p-6 border-b border-cyan-400/10 bg-slate-950/20">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h2 className="text-3xl font-bold text-white font-heading tracking-wide group-hover:text-cyan-300 transition-colors">
                            {registration.user?.name}
                          </h2>
                          <p className="text-cyan-200/60 mt-2 text-sm font-sans font-medium break-all">
                            {registration.user?.email}
                          </p>
                        </div>

                        <span
                          className={`px-4 py-2 rounded-full text-xs font-bold font-heading tracking-wider uppercase border shadow-sm ${
                            registration.status === "approved"
                              ? "bg-green-500/10 text-green-400 border-green-400/20"
                              : registration.status === "rejected"
                              ? "bg-red-500/10 text-red-400 border-red-400/20"
                              : "bg-yellow-500/10 text-yellow-300 border-yellow-400/20 animate-pulse"
                          }`}
                        >
                          {registration.status}
                        </span>
                      </div>
                    </div>

                    {/* EVENT DATA INSIGHT WRAPPERS */}
                    <div className="p-6 space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-2 bg-[#071C2F]/70 rounded-2xl p-4 border border-cyan-400/10 hover:border-cyan-400/30 transition duration-300 shadow-inner">
                          <p className="text-xs uppercase tracking-wider text-cyan-200/50 mb-1 font-bold">
                            Target Event
                          </p>
                          <h3 className="font-bold text-white text-sm font-heading tracking-wide">
                            {registration.event?.title}
                          </h3>
                        </div>

                        <div className="bg-[#071C2F]/70 rounded-2xl p-4 border border-cyan-400/10 hover:border-cyan-400/30 transition duration-300 shadow-inner">
                          <p className="text-xs uppercase tracking-wider text-cyan-200/50 mb-1 font-bold">
                            Entry Class
                          </p>
                          <h3 className="font-bold text-cyan-400 text-xs font-heading uppercase tracking-widest mt-0.5">
                            {registration.event?.type}
                          </h3>
                        </div>
                      </div>

                      <div className="bg-[#071C2F]/70 rounded-2xl p-4 border border-cyan-400/10 hover:border-cyan-400/30 transition duration-300 shadow-inner w-fit min-w-[140px]">
                        <p className="text-xs uppercase tracking-wider text-cyan-200/50 mb-1 font-bold">
                          Fee Captured
                        </p>
                        <h3 className="font-black text-white text-lg font-heading tracking-tight">
                          ₹{registration.event?.price}
                        </h3>
                      </div>

                      {/* TRANSACTION SCREENSHOT EXPANSION SLOT */}
                      <div className="space-y-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-cyan-200/60 font-heading ml-1">
                          Payment Screenshot Ledger Node
                        </p>
                        <div className="overflow-hidden rounded-2xl border border-cyan-400/10 bg-slate-950 group/img shadow-md">
                          <img
                            src={`${import.meta.env.VITE_API_URL}/${registration.paymentScreenshot?.replace(/\\/g, "/")}`}
                            alt="Payment Screenshot Verification Node"
                            className="w-full h-72 object-cover group-hover/img:scale-[1.02] transition duration-700 select-none pointer-events-none grayscale-[15%] group-hover/img:grayscale-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ACTIVE COMPLIANCE WORKSPACE ACTIONS */}
                  {registration.status === "pending" && (

                    <div className="p-6 border-t border-cyan-400/10 bg-slate-950/20 flex gap-4">
                      <button
                        onClick={() =>
                          approveRegistration(registration.id)
                        }
                        className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 font-black font-heading text-sm tracking-widest uppercase hover:scale-[1.02] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,200,0.18)] cursor-pointer text-center"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          rejectRegistration(registration.id)
                        }
                        className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 text-white font-black font-heading text-sm tracking-widest uppercase hover:scale-[1.02] transition-all duration-300 shadow-[0_0_25px_rgba(255,0,100,0.18)] cursor-pointer text-center"
                      >
                        Reject
                      </button>
                    </div>

                  )}

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default VerifyPayments;