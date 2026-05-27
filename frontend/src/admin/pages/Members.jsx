import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

function Members() {

  const [memberships, setMemberships] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const adminToken =
    localStorage.getItem("adminToken");

  /* ================= FETCH MEMBERSHIPS ================= */

  const fetchMemberships = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/memberships`,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        }
      );

      setMemberships(response.data);

    } catch (error) {

      console.log(error);

      alert("Failed to fetch memberships");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchMemberships();

  }, []);

  /* ================= APPROVE ================= */

  const approveMembership = async (id) => {

    try {

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/memberships/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        }
      );

      alert("Membership Approved");

      fetchMemberships();

    } catch (error) {

      console.log(error);

      alert("Approval Failed");

    }

  };

  /* ================= REJECT ================= */

  const rejectMembership = async (id) => {

    const reason =
      prompt("Enter rejection reason");

    if (!reason) return;

    try {

      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/memberships/reject/${id}`,
        {
          reason
        },
        {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        }
      );

      alert("Membership Rejected");

      fetchMemberships();

    } catch (error) {

      console.log(error);

      alert("Rejection Failed");

    }

  };

  return (

    /* Unified flex interface to bind your AdminSidebar layout correctly */
    <div className="flex min-h-screen bg-gradient-to-br from-[#031525] via-[#05293A] to-[#0A2240] text-white relative overflow-hidden font-sans">

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT BLOCK */}
      <div className="flex-1 flex flex-col relative z-10">

        <AdminNavbar />

        <div className="p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-10 pl-1">
            <div className="flex items-center gap-3">
              <div className="h-1 w-6 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight font-heading">
                Membership Applications
              </h1>
            </div>
            <p className="text-cyan-200/70 mt-3 text-lg font-medium tracking-wide">
              Manage all IEI membership requests
            </p>
          </div>

          {/* LOADING CONFIGS & APPS MATRIX DISPLAY */}
          {loading ? (

            <div className="text-center py-24">
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xl text-cyan-200/70 animate-pulse font-medium">
                  Loading memberships...
                </p>
              </div>
            </div>

          ) : memberships.length === 0 ? (

            <div className="bg-white/5 backdrop-blur-xl border border-cyan-400/10 rounded-[32px] shadow-[0_0_40px_rgba(0,255,255,0.08)] p-16 text-center max-w-xl mx-auto">
              <div className="text-4xl mb-4">📭</div>
              <h2 className="text-3xl font-bold text-cyan-100 font-heading tracking-tight">
                No Membership Applications
              </h2>
              <p className="text-cyan-200/50 text-sm font-medium font-sans mt-2">
                All registered requests have been synchronized and successfully evaluated.
              </p>
            </div>

          ) : (

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {memberships.map((member) => (

                <div
                  key={member.id}
                  className="bg-white/5 backdrop-blur-xl rounded-[32px] border border-cyan-400/10 overflow-hidden shadow-[0_0_35px_rgba(0,255,255,0.05)] hover:shadow-[0_0_45px_rgba(0,255,255,0.15)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
                >

                  <div>
                    {/* TOP SECTION */}
                    <div className="p-6 border-b border-cyan-400/10 bg-slate-950/20">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h2 className="text-3xl font-bold text-white font-heading tracking-wide">
                            {member.user?.name}
                          </h2>
                          <p className="text-cyan-200/60 mt-2 text-sm font-sans font-medium break-all">
                            {member.user?.email}
                          </p>
                        </div>

                        <span
                          className={`px-4 py-2 rounded-full text-xs font-bold font-heading tracking-wider uppercase border ${
                            member.membershipStatus === "approved"
                              ? "bg-green-500/10 text-green-400 border-green-400/20 shadow-[0_0_10px_rgba(74,222,128,0.05)]"
                              : member.membershipStatus === "rejected"
                              ? "bg-red-500/10 text-red-400 border-red-400/20 shadow-[0_0_10px_rgba(248,113,113,0.05)]"
                              : "bg-yellow-500/10 text-yellow-300 border-yellow-400/20 animate-pulse"
                          }`}
                        >
                          {member.membershipStatus}
                        </span>
                      </div>
                    </div>

                    {/* DETAILS FORM DATA FIELDS */}
                    <div className="p-6 space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-[#071C2F]/70 rounded-2xl p-4 border border-cyan-400/10 hover:border-cyan-400/30 transition duration-300 shadow-inner">
                          <p className="text-xs uppercase tracking-wider text-cyan-200/50 mb-1 font-bold">
                            Phone
                          </p>
                          <h3 className="font-semibold text-white text-sm font-sans">
                            {member.user?.phone || "N/A"}
                          </h3>
                        </div>

                        <div className="bg-[#071C2F]/70 rounded-2xl p-4 border border-cyan-400/10 hover:border-cyan-400/30 transition duration-300 shadow-inner">
                          <p className="text-xs uppercase tracking-wider text-cyan-200/50 mb-1 font-bold">
                            Branch
                          </p>
                          <h3 className="font-bold text-white text-sm font-heading tracking-wide">
                            {member.user?.branch || "N/A"}
                          </h3>
                        </div>

                        <div className="bg-[#071C2F]/70 rounded-2xl p-4 border border-cyan-400/10 hover:border-cyan-400/30 transition duration-300 shadow-inner">
                          <p className="text-xs uppercase tracking-wider text-cyan-200/50 mb-1 font-bold">
                            Year
                          </p>
                          <h3 className="font-bold text-white text-sm font-heading tracking-wide">
                            {member.user?.year || "N/A"}
                          </h3>
                        </div>

                        <div className="bg-[#071C2F]/70 rounded-2xl p-4 border border-cyan-400/10 hover:border-cyan-400/30 transition duration-300 shadow-inner">
                          <p className="text-xs uppercase tracking-wider text-cyan-200/50 mb-1 font-bold">
                            Preferred Domain
                          </p>
                          <h3 className="font-bold text-white text-sm font-heading tracking-wide text-cyan-300">
                            {member.domain || "N/A"}
                          </h3>
                        </div>
                      </div>

                      <div className="bg-[#071C2F]/70 rounded-2xl p-4 border border-cyan-400/10 hover:border-cyan-400/30 transition duration-300 shadow-inner">
                        <p className="text-xs uppercase tracking-wider text-cyan-200/50 mb-1 font-bold">
                          Skills Ledger
                        </p>
                        <h3 className="font-semibold text-slate-200 text-sm leading-relaxed font-sans">
                          {member.skills || "N/A"}
                        </h3>
                      </div>

                      <div className="bg-[#071C2F]/70 rounded-2xl p-4 border border-cyan-400/10 hover:border-cyan-400/30 transition duration-300 shadow-inner">
                        <p className="text-xs uppercase tracking-wider text-cyan-200/50 mb-1 font-bold">
                          Reason for Application
                        </p>
                        <p className="text-slate-300 text-sm font-medium font-sans leading-relaxed">
                          {member.reason || "N/A"}
                        </p>
                      </div>

                      {/* SCREENSHOT CONTAINER FRAME */}
                      <div className="space-y-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-cyan-200/60 font-heading ml-1">
                          Payment Screenshot
                        </p>
                        <div className="overflow-hidden rounded-2xl border border-cyan-400/10 bg-slate-950 group/img shadow-md">
                          <img
                            src={`${import.meta.env.VITE_API_URL}/${member.paymentScreenshot.replace(/\\/g, "/")}`}
                            alt="Payment Screenshot Verification Node"
                            className="w-full h-72 object-cover group-hover/img:scale-[1.02] transition duration-700 select-none pointer-events-none grayscale-[15%] group-hover/img:grayscale-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ACTION CONTROLS BUTTON BLOCK */}
                  {member.membershipStatus === "pending" && (

                    <div className="p-6 border-t border-cyan-400/10 bg-slate-950/20 flex gap-4">
                      <button
                        onClick={() =>
                          approveMembership(member.id)
                        }
                        className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 font-black font-heading text-sm tracking-widest uppercase hover:scale-[1.02] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,200,0.18)] cursor-pointer text-center"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          rejectMembership(member.id)
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

export default Members;