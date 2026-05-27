import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import API from "../api/axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await API.get("/users/profile");
      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white gap-4">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-400 font-medium font-sans tracking-wide text-sm">
          Loading system profile...
        </p>
      </div>
    );
  }

  const myEvents = user.registrations || [];

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
              Student Control Panel
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight leading-none mt-2">
            Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-400">{user.name}</span>
          </h1>

          <p className="mt-4 text-slate-400 font-medium text-base tracking-wide max-w-md mx-auto">
            Manage your official IEI Student Chapter credentials and records.
          </p>
        </div>
      </section>

      {/* ================= DASHBOARD LAYOUT GRID ================= */}
      <section className="mt-12 max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT COLUMN: DETAILS & MEMBERSHIP */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* USER DETAILS CARD */}
          <div className="admin-card p-8 rounded-2xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
            <h2 className="text-lg font-bold text-slate-900 font-heading tracking-wide border-b border-slate-100 pb-4 mb-5">
              Profile Information
            </h2>

            <div className="space-y-4 text-sm font-medium">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-slate-400">Full Name</span>
                <span className="text-slate-800 text-base font-semibold">{user.name}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-slate-400">Email Address</span>
                <span className="text-slate-800 text-base font-semibold break-all">{user.email}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400">Branch</span>
                  <span className="text-slate-800 text-base font-semibold">{user.branch}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400">Year</span>
                  <span className="text-slate-800 text-base font-semibold">{user.year}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-slate-400">Phone Number</span>
                <span className="text-slate-800 text-base font-semibold">{user.phone}</span>
              </div>
            </div>
          </div>

          {/* MEMBERSHIP STATUS CARD */}
          <div className="admin-card p-8 rounded-2xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
            <h2 className="text-lg font-bold text-slate-900 font-heading tracking-wide border-b border-slate-100 pb-4 mb-4">
              Membership Status
            </h2>
            {user.memberships.length > 0 ? (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-sm tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Active Chapter Member
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 font-bold text-sm tracking-wide">
                No Membership Registered
              </div>
            )}
          </div>

        </div>

        {/* RIGHT COLUMN: EVENTS & CERTIFICATES */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* REGISTERED EVENTS COMPONENT */}
          <div className="admin-card p-8 rounded-2xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
            <h2 className="text-lg font-bold text-slate-900 font-heading tracking-wide border-b border-slate-100 pb-4 mb-6">
              Registered Events
            </h2>

            {myEvents.length === 0 ? (
              <div className="text-center py-10 text-slate-400 font-medium text-sm border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                🚀 No activities or events registered yet.
              </div>
            ) : (
              <div className="space-y-4">
                {myEvents.map((registration) => (
                  <div
                    key={registration.id}
                    className="p-5 bg-slate-50 border border-slate-200/60 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-500/20 transition-all duration-200"
                  >
                    <div>
                      <h3 className="text-base font-bold text-slate-900 font-heading tracking-wide">
                        {registration.event.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium mt-1">
                        📅 {registration.event.date}
                      </p>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1 font-semibold">Payment</span>
                      <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold tracking-wide ${
                        registration.paymentStatus === "Completed" || registration.paymentStatus === "Success"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}>
                        {registration.paymentStatus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DIGITAL CERTIFICATES BLOCK */}
          <div className="admin-card p-8 rounded-2xl bg-white border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
            <h2 className="text-lg font-bold text-slate-900 font-heading tracking-wide border-b border-slate-100 pb-4 mb-6">
              Verified Certificates
            </h2>

            {user.certificates.length === 0 ? (
              <div className="text-center py-10 text-slate-400 font-medium text-sm border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                🎓 Certificates will automatically generate here after successful event completion.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {user.certificates.map((certificate) => (
                  <div
                    key={certificate.id}
                    className="p-5 bg-slate-50 border border-slate-200/60 rounded-xl flex flex-col justify-between gap-4 hover:border-blue-500/20 transition-all duration-200"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 font-heading tracking-wide line-clamp-1">
                        {certificate.event.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-semibold block mt-1">IEI Verified Accreditation</span>
                    </div>

                    <a
                      href={`http://localhost:5000/${certificate.certificateUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 tracking-wide font-heading inline-flex items-center gap-1 group w-fit"
                    >
                      Download Document 
                      <span className="transform transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </section>

    </div>
  );
}

export default Profile;