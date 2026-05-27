import { useEffect, useState } from "react";

import axios from "axios";

import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

import {
  Users,
  CalendarDays,
  ClipboardCheck,
  IndianRupee
} from "lucide-react";

function AdminDashboard() {

  const [stats, setStats] = useState({

    totalUsers: 0,
    totalEvents: 0,
    totalRegistrations: 0,
    totalRevenue: 0

  });

  const adminToken =
    localStorage.getItem("adminToken");

  /* ================= FETCH DASHBOARD STATS ================= */

  const fetchDashboardStats = async () => {

    try {

      const response =
        await axios.get(

          "http://localhost:5000/api/admin/dashboard-stats",

          {
            headers: {
              Authorization:
                `Bearer ${adminToken}`
            }
          }

        );

      setStats(response.data);

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to fetch dashboard stats"
      );

    }

  };

  useEffect(() => {

    fetchDashboardStats();

  }, []);

  return (

    /* Replaced flat gray frame backgrounds with your dark cyber space teal-ocean theme */
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-blue-950 font-sans text-slate-200 relative overflow-hidden">

      {/* Cyber Space Ambient Light Maps */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none animate-cyber-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col relative z-10">

        <AdminNavbar />

        <div className="p-8 md:p-10">

          <div className="flex items-center gap-3 mb-10 pl-1">
            <div className="h-1 w-6 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>
            <h2 className="text-3xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-200 drop-shadow-sm">
              Dashboard Overview
            </h2>
          </div>

          {/* STATS CARDS MATRIX LAYER */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">

            {/* USERS CARD PANEL */}
            <div className="flex justify-between items-center p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-cyan-500/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-[1.03] hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(0,242,254,0.15)] transition-all duration-400 group cursor-pointer">

              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold font-heading">
                  Total Users
                </h3>

                <p className="text-3xl font-black font-heading mt-2 tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {stats.totalUsers}
                </p>
              </div>

              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl shadow-[inset_0_0_10px_rgba(0,242,254,0.1)] group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-400">
                <Users
                  size={26}
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

            </div>

            {/* EVENTS CARD PANEL */}
            <div className="flex justify-between items-center p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-cyan-500/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-[1.03] hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(0,242,254,0.15)] transition-all duration-400 group cursor-pointer">

              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold font-heading">
                  Total Events
                </h3>

                <p className="text-3xl font-black font-heading mt-2 tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {stats.totalEvents}
                </p>
              </div>

              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-xl shadow-[inset_0_0_10px_rgba(0,242,254,0.1)] group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-400">
                <CalendarDays
                  size={26}
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

            </div>

            {/* REGISTRATIONS CARD PANEL */}
            <div className="flex justify-between items-center p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-cyan-500/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-[1.03] hover:border-emerald-400/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-400 group cursor-pointer">

              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold font-heading">
                  Registrations
                </h3>

                <p className="text-3xl font-black font-heading mt-2 tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  {stats.totalRegistrations}
                </p>
              </div>

              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl shadow-[inset_0_0_10px_rgba(16,185,129,0.1)] group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-400">
                <ClipboardCheck
                  size={26}
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

            </div>

            {/* PAYMENTS CARD PANEL */}
            <div className="flex justify-between items-center p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-cyan-500/10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:scale-[1.03] hover:border-emerald-400/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-400 group cursor-pointer">

              <div>
                <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold font-heading">
                  Total Revenue
                </h3>

                <p className="text-3xl font-black font-heading mt-2 tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  ₹{stats.totalRevenue}
                </p>
              </div>

              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl shadow-[inset_0_0_10px_rgba(16,185,129,0.1)] group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-400">
                <IndianRupee
                  size={26}
                  className="transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;