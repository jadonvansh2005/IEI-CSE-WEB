import { useEffect, useState } from "react";

import axios from "axios";

import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

function Certificates() {

  const [registrations, setRegistrations] =
    useState([]);

  const [certificates, setCertificates] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const adminToken =
    localStorage.getItem("adminToken");

  /* ================= FETCH DATA ================= */

  const fetchData = async () => {

    try {

      /* FETCH APPROVED REGISTRATIONS */

      const registrationResponse =
        await axios.get(
          `${import.meta.env.VITE_API_URL}/api/registrations`,
          {
            headers: {
              Authorization: `Bearer ${adminToken}`
            }
          }
        );

      const approvedRegistrations =
        registrationResponse.data.filter(
          (reg) =>
            reg.registrationStatus ===
            "approved"
        );

      setRegistrations(
        approvedRegistrations
      );

      /* FETCH CERTIFICATES */

      const certificateResponse =
        await axios.get(
          `${import.meta.env.VITE_API_URL}/api/certificates`,
          {
            headers: {
              Authorization: `Bearer ${adminToken}`
            }
          }
        );

      setCertificates(
        certificateResponse.data
      );

    } catch (error) {

      console.log(error);

      alert("Failed to fetch data");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchData();

  }, []);

  /* ================= GENERATE CERTIFICATE ================= */

  const generateCertificate = async (
    userId,
    eventId
  ) => {

    try {

      const response =
        await axios.post(

          `${import.meta.env.VITE_API_URL}/api/certificates/generate`,

          {
            userId,
            eventId
          },

          {
            headers: {
              Authorization: `Bearer ${adminToken}`
            }
          }

        );

      alert(response.data.message);

      fetchData();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Generation failed"
      );

    }

  };

  /* ================= CHECK GENERATED ================= */

  const isGenerated = (
    userId,
    eventId
  ) => {

    return certificates.find(

      (certificate) =>

        certificate.userId === userId &&
        certificate.eventId === eventId

    );

  };

  return (

    /* Immersive custom dark cyber theme canvas */
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-blue-950 font-sans text-slate-200 relative overflow-hidden">

      {/* Radiant Ice-Blue and Greenish Mint Glowing Ambient Blur Vectors */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none animate-cyber-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <AdminSidebar />

      <div className="flex-1 flex flex-col relative z-10">

        <AdminNavbar />

        <div className="p-8 md:p-10">

          {/* HEADER SECTION LAYER */}
          <div className="mb-10 pl-1">
            <div className="flex items-center gap-3">
              <div className="h-1 w-6 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>
              <h2 className="text-3xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-200 drop-shadow-sm">
                Certificates
              </h2>
            </div>
            <p className="text-cyan-200/60 font-medium text-sm mt-2 tracking-wide">
              Issue and download authenticated chapter award documents
            </p>
          </div>

          {/* TRANSKRIFT DATA CONTAINER BOARD */}
          <div className="bg-slate-900/40 backdrop-blur-2xl border border-cyan-500/10 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden">

            <div className="w-full overflow-x-auto">

              <table className="w-full text-left border-collapse min-w-[700px]">

                <thead className="bg-slate-950/60 text-slate-400 font-heading font-bold text-xs uppercase tracking-wider border-b border-cyan-500/10">
                  <tr>
                    <th className="py-5 px-6 font-semibold">User Profile</th>
                    <th className="py-5 px-6 font-semibold">Event Course</th>
                    <th className="py-5 px-6 font-semibold">Accreditation Status</th>
                    <th className="py-5 px-6 font-semibold text-center">Transmission Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/5 text-sm">

                  {loading ? (

                    <tr>
                      <td
                        colSpan="4"
                        className="p-16 text-center text-slate-400 font-medium font-sans"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                          <span>Querying encryption matrix logs...</span>
                        </div>
                      </td>
                    </tr>

                  ) : registrations.length === 0 ? (

                    <tr>
                      <td
                        colSpan="4"
                        className="p-16 text-center text-slate-500 font-medium font-sans"
                      >
                        🚫 No verified approved participant registers found inside directory data.
                      </td>
                    </tr>

                  ) : (

                    registrations.map((reg) => {

                      const existingCertificate =
                        isGenerated(
                          reg.userId,
                          reg.eventId
                        );

                      return (

                        <tr
                          key={reg.id}
                          className="group transition-colors duration-200 hover:bg-white/5"
                        >

                          <td className="py-4 px-6 font-bold text-white font-heading tracking-wide group-hover:text-cyan-300 transition-colors">
                            {reg.user?.name}
                          </td>

                          <td className="py-4 px-6 text-slate-300 font-medium font-sans">
                            {reg.event?.title}
                          </td>

                          <td className="py-4 px-6">

                            {existingCertificate ? (

                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                Generated
                              </span>

                            ) : (

                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wide uppercase animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                Pending
                              </span>

                            )}

                          </td>

                          <td className="py-4 px-6 flex items-center justify-center">

                            {!existingCertificate ? (

                              <button
                                onClick={() =>
                                  generateCertificate(
                                    reg.userId,
                                    reg.eventId
                                  )
                                }
                                className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-black font-heading text-xs tracking-widest uppercase shadow-[0_4px_15px_rgba(0,242,254,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transform scale-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                              >
                                Generate
                              </button>

                            ) : (

                              <a
                                href={`${import.meta.env.VITE_API_URL}/${existingCertificate.certificateUrl}`}
                                target="_blank"
                                rel="noreferrer"
                                className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white hover:text-slate-950 hover:border-transparent text-xs font-black font-heading tracking-widest uppercase transition-all duration-300 cursor-pointer text-center inline-block"
                              >
                                Download
                              </a>

                            )}

                          </td>

                        </tr>

                      );

                    })

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Certificates;