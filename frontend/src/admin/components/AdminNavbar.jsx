import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminNavbar() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("admin");
    navigate("/");

  };

  return (

    /* Upgraded to a frosted translucent cyber panel with a clean glowing ice-cyan accent boundary beneath it */
    <div className="w-full bg-slate-950/60 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] relative z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Crystalline gradient text alignment */}
        <h1 className="text-xl md:text-2xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-emerald-300 drop-shadow-sm">
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
          /* Replaced raw red button with a premium cyber glass panel that glows red on intent hover */
          className="flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl hover:bg-red-500/20 hover:border-red-500/40 shadow-sm transition-all duration-300 transform active:scale-95 cursor-pointer font-heading text-sm font-bold group"
        >

          <LogOut size={16} className="text-slate-400 group-hover:text-red-400 group-hover:-translate-x-0.5 transition-all duration-300" />
          Logout

        </button>

      </div>

    </div>

  );

}

export default AdminNavbar;