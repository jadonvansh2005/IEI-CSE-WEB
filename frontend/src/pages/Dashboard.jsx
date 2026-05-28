import { useEffect, useState } from "react";
import API from "../api/axios";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await API.get("/users/profile");
      setUser(response.data);
      setRegistrations(response.data.registrations);
    } catch (error) {
      console.log(error);
    } finally {
      loading && setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white gap-4">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-400 font-medium font-sans tracking-wide text-sm">
          Loading user console...
        </p>
      </div>
    );
  }

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
              Student Workspace
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight leading-none mt-2">
            Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-400">{user?.name}</span>
          </h1>

          <p className="mt-4 text-slate-400 font-medium text-base tracking-wide max-w-sm mx-auto">
            Manage your events and download verified completion certificates.
          </p>
        </div>
      </section>

      {/* ================= DATA GRID SHEET CONTAINER ================= */}
      <section className="mt-12 max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="flex items-center gap-3 mb-6">
          <div className="h-1 w-6 bg-blue-600 rounded-full"></div>
          <h2 className="text-xl font-extrabold text-slate-900 font-heading tracking-tight">
            My Registered Events
          </h2>
        </div>

        {registrations.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-200/80 rounded-3xl p-10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] max-w-lg mx-auto">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-bold text-slate-800 font-heading">No Registrations Yet</h3>
            <p className="text-slate-500 text-sm mt-2 font-sans">
              You have not registered for any events yet. Check out the events catalog to get started.
            </p>
          </div>
        ) : (
          <div className="admin-card bg-white border border-slate-200/80 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.01)] overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                
                <thead className="bg-slate-50/80 text-slate-400 font-heading font-bold text-xs uppercase tracking-wider border-b border-slate-200/60">
                  <tr>
                    <th className="py-5 px-6 font-semibold">Event Description</th>
                    <th className="py-5 px-6 font-semibold">Verification Status</th>
                    <th className="py-5 px-6 font-semibold text-right">Accreditation</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 text-sm">
                  {registrations.map((registration) => (
                    <tr
                      key={registration.id}
                      className="group transition-colors duration-200 hover:bg-slate-50/60"
                    >
                      <td className="py-5 px-6 font-bold text-slate-900 font-heading tracking-wide group-hover:text-blue-600 transition-colors">
                        {registration.event.title}
                      </td>

                      <td className="py-5 px-6">
                        <span className={`inline-flex items-center px-3 py-1 text-xs font-bold tracking-wide rounded-lg ${
                          registration.registrationStatus === "Approved" || registration.registrationStatus === "Success"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                            : "bg-amber-50 text-amber-700 border border-amber-200/50"
                        }`}>
                          {registration.registrationStatus}
                        </span>
                      </td>

                      <td className="py-5 px-6 text-right font-medium">
                        {
                          user.certificates.find(
                            (certificate) =>
                              certificate.eventId === registration.event.id
                          ) ? (
                            <a
                              href={`${import.meta.env.VITE_API_URL}/${
                                user.certificates
                                  .find(
                                    (certificate) =>
                                      certificate.eventId === registration.event.id
                                  )
                                  .certificateUrl.replace(/\\/g, "/")
                              }`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs font-bold text-blue-600 hover:text-blue-700 font-heading tracking-wide inline-flex items-center gap-1 group/link bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-all"
                            >
                              Get Document
                              <span className="transform transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
                            </a>
                          ) : (
                            <span className="text-xs font-bold font-heading text-slate-400 tracking-wide bg-slate-100 px-3 py-2 rounded-xl select-none">
                              Processing
                            </span>
                          )
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}

export default Dashboard;