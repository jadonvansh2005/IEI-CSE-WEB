import { useEffect, useState } from "react";

import axios from "axios";

import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

function Users() {

  const [users, setUsers] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const adminToken =
    localStorage.getItem("adminToken");

  /* ================= FETCH USERS ================= */

  const fetchUsers = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/users",
        {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        }
      );

      setUsers(response.data);

    } catch (error) {

      console.log(error);

      alert("Failed to fetch users");

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchUsers();

  }, []);

  /* ================= CHANGE ROLE ================= */

  const changeRole = async (
    id,
    currentRole
  ) => {

    try {

      const newRole =
        currentRole === "admin"
          ? "user"
          : "admin";

      const response =
        await axios.put(

          `http://localhost:5000/api/users/role/${id}`,

          {
            role: newRole
          },

          {
            headers: {
              Authorization: `Bearer ${adminToken}`
            }
          }

        );

      alert(response.data.message);

      fetchUsers();

    } catch (error) {

      console.log(error);

      alert("Role update failed");

    }

  };

  /* ================= BLOCK/UNBLOCK ================= */

  const toggleBlock = async (
    id,
    isBlocked
  ) => {

    try {

      const endpoint =
        isBlocked
          ? "unblock"
          : "block";

      const response =
        await axios.put(

          `http://localhost:5000/api/users/${endpoint}/${id}`,

          {},

          {
            headers: {
              Authorization: `Bearer ${adminToken}`
            }
          }

        );

      alert(response.data.message);

      fetchUsers();

    } catch (error) {

      console.log(error);

      alert("Operation failed");

    }

  };

  /* ================= DELETE USER ================= */

  const deleteUser = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this user?"
      );

    if (!confirmDelete) return;

    try {

      const response =
        await axios.delete(

          `http://localhost:5000/api/users/${id}`,

          {
            headers: {
              Authorization: `Bearer ${adminToken}`
            }
          }

        );

      alert(response.data.message);

      fetchUsers();

    } catch (error) {

      console.log(error);

      alert("Delete failed");

    }

  };

  /* ================= FILTER USERS ================= */

  const filteredUsers =
    users.filter((user) =>

      user.name
        ?.toLowerCase()
        .includes(search.toLowerCase())

      ||

      user.email
        ?.toLowerCase()
        .includes(search.toLowerCase())

    );

  return (

    /* Dynamic cyber background color scheme */
    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-blue-950 font-sans text-slate-200 relative overflow-hidden">

      {/* Lighting Blur FX */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none animate-cyber-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <AdminSidebar />

      <div className="flex-1 flex flex-col relative z-10">

        <AdminNavbar />

        <div className="p-8 md:p-10">

          {/* HEADER LAYER */}

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8 pl-1">

            <div className="flex items-center gap-3">
              <div className="h-1 w-6 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>
              <h2 className="text-3xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-200">
                Users Management
              </h2>
            </div>

            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="bg-slate-900/60 border border-cyan-500/20 text-white px-5 py-3 rounded-xl w-full sm:w-80 placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 shadow-inner"
            />

          </div>

          {/* DATA DATA TABLE SHEET CONTAINER */}

          <div className="bg-slate-900/40 backdrop-blur-2xl border border-cyan-500/10 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden">

            <div className="w-full overflow-x-auto">

              <table className="w-full text-left border-collapse min-w-[900px]">

                <thead className="bg-slate-950/60 text-slate-400 font-heading font-bold text-xs uppercase tracking-wider border-b border-cyan-500/10">

                  <tr>

                    <th className="py-5 px-6 font-semibold">
                      Name
                    </th>

                    <th className="py-5 px-6 font-semibold">
                      Email Coordinates
                    </th>

                    <th className="py-5 px-6 font-semibold">
                      System Role
                    </th>

                    <th className="py-5 px-6 font-semibold">
                      Memberships
                    </th>

                    <th className="py-5 px-6 font-semibold">
                      Registrations
                    </th>

                    <th className="py-5 px-6 font-semibold">
                      Access Status
                    </th>

                    <th className="py-5 px-6 font-semibold text-center">
                      Control Operations
                    </th>

                  </tr>

                </thead>

                <tbody className="divide-y divide-white/5 text-sm">

                  {loading ? (

                    <tr>

                      <td
                        colSpan="7"
                        className="p-16 text-center text-slate-400 font-medium font-sans"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                          <span>Syncing registry index...</span>
                        </div>
                      </td>

                    </tr>

                  ) : filteredUsers.length === 0 ? (

                    <tr>

                      <td
                        colSpan="7"
                        className="p-16 text-center text-slate-500 font-medium font-sans"
                      >
                        🚫 No verified directory records found matching data parameters.
                      </td>

                    </tr>

                  ) : (

                    filteredUsers.map((user) => (

                      <tr
                        key={user.id}
                        className="group transition-colors duration-200 hover:bg-white/5"
                      >

                        <td className="py-4 px-6 font-bold text-white font-heading tracking-wide group-hover:text-cyan-300 transition-colors">
                          {user.name}
                        </td>

                        <td className="py-4 px-6 text-slate-300 font-medium font-sans">
                          {user.email}
                        </td>

                        <td className="py-4 px-6">

                          <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold tracking-wider font-heading uppercase ${
                            user.role === "admin"
                              ? "bg-purple-500/10 border border-purple-500/30 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.05)]"
                              : "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.05)]"
                          }`}>
                            {user.role}
                          </span>

                        </td>

                        <td className="py-4 px-6 font-black font-heading text-slate-200 pl-10">
                          {user.memberships?.length || 0}
                        </td>

                        <td className="py-4 px-6 font-black font-heading text-slate-200 pl-12">
                          {user.registrations?.length || 0}
                        </td>

                        <td className="py-4 px-6">

                          {user.isBlocked ? (

                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-wide uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                              Blocked
                            </span>

                          ) : (

                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wide uppercase animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                              Active
                            </span>

                          )}

                        </td>

                        <td className="py-4 px-6 flex items-center justify-center gap-2">

                          <button
                            onClick={() =>
                              changeRole(
                                user.id,
                                user.role
                              )
                            }
                            className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-transparent text-xs font-bold font-heading tracking-wide transition-all duration-200 cursor-pointer"
                          >
                            Change Role
                          </button>

                          <button
                            onClick={() =>
                              toggleBlock(
                                user.id,
                                user.isBlocked
                              )
                            }
                            className={`px-3 py-1.5 rounded-xl border text-xs font-bold font-heading tracking-wide transition-all duration-200 cursor-pointer ${
                              user.isBlocked
                                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 hover:border-transparent"
                                : "bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-500 hover:text-slate-950 hover:border-transparent"
                            }`}
                          >
                            {user.isBlocked ? "Unblock" : "Block"}
                          </button>

                          <button
                            onClick={() =>
                              deleteUser(user.id)
                            }
                            className="px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-white hover:border-transparent text-red-400 text-xs font-bold font-heading tracking-wide transition-all duration-200 cursor-pointer"
                          >
                            Delete
                          </button>

                        </td>

                      </tr>

                    ))

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

export default Users;