import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Users,
  CreditCard,
  Award
} from "lucide-react";

function AdminSidebar() {

  const menu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard
    },

    {
      name: "Events",
      path: "/admin/events",
      icon: Calendar
    },

    {
      name: "Payments",
      path: "/admin/payments",
      icon: CreditCard
    },

    {
      name: "Members",
      path: "/admin/members",
      icon: Users
    },

    {
      name: "Certificates",
      path: "/admin/certificates",
      icon: Award
    },

    {
      name: "Users",
      path: "/admin/users",
      icon: Users
    }

  ];

  return (
    /* Upgraded to a matching deep translucent cyber container with an accent ice-neon right border wall split */
    <div className="w-64 bg-slate-950/40 backdrop-blur-2xl text-white min-h-screen p-6 border-r border-cyan-500/10 flex flex-col shadow-[4px_0_30px_rgba(0,0,0,0.35)] relative z-40 select-none">

      {/* Crystalline header typography */}
      <h2 className="text-2xl font-black font-heading tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-emerald-300 drop-shadow-sm mb-10 pl-2">
        IEI Admin
      </h2>

      <div className="space-y-3 flex-1">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              /* Injected your exact active indicator indicators alongside smooth animation transformations */
              className={({ isActive }) =>
                `cyber-nav-link flex items-center gap-3.5 px-4 py-3.5 rounded-xl font-heading text-sm font-bold tracking-wide transition-all duration-300 group cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/10 to-emerald-500/5 text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_rgba(0,242,254,0.05)] active"
                    : "text-slate-400 border border-transparent hover:bg-white/5 hover:text-slate-200"
                }`
              }
            >
              {/* Animated nested icon layers matching the cyber aesthetic colors */}
              <Icon size={18} className="transition-transform duration-300 group-hover:scale-110 group-[.active]:text-emerald-400" />
              {item.name}
            </NavLink>
          );
        })}

      </div>

    </div>
  );
}

export default AdminSidebar;