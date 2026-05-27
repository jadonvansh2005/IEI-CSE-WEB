import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import { Menu, X, User } from "lucide-react";

function Navbar() {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState(null);

  /* LOAD USER */

  useEffect(() => {

    const loadUser = () => {

      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }

    };

    // INITIAL LOAD
    loadUser();

    // LISTEN STORAGE CHANGES
    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
    };

  }, []);

  /* LOGOUT */

  const handleLogout = () => {

    localStorage.removeItem("user");

    localStorage.removeItem("token");

    setUser(null);

    navigate("/login");

    window.location.reload();

  };

  /* NAV ITEMS */

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Domains", path: "/domains" },
    { name: "Events", path: "/events" },

    // ✅ MEMBERSHIP ONLY FOR LOGGED-IN USERS
    ...(user && user.role !== "admin"
      ? [{ name: "Membership", path: "/join" }]
      : []),

    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (

    /* Replaced flat solid white background with a premium glassmorphic blur profile */
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all duration-300">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}

        <Link to="/" className="flex items-center gap-3 group select-none">

          {/* Upgraded badge to utilize your standard Club Blue color framework */}
          <div className="bg-blue-600 text-white px-3 py-1.5 rounded-xl font-black tracking-wider font-heading text-sm shadow-[0_4px_12px_rgba(37,99,235,0.25)] group-hover:scale-105 transition duration-300">
            IEI
          </div>

          <div>
            <h1 className="font-black text-base text-slate-800 font-heading tracking-tight leading-none group-hover:text-blue-600 transition-colors">
              IEI CSE
            </h1>

            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
              Student Chapter
            </p>
          </div>

        </Link>

        {/* DESKTOP MENU */}

        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              /* Upgraded bottom indicators to lock perfectly with your global.css `.admin-nav-link` blueprint rules */
              className={({ isActive }) =>
                `text-xs uppercase tracking-wider font-heading font-bold transition-all duration-300 pb-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
                  isActive
                    ? "text-blue-600 after:w-full"
                    : "text-slate-600 hover:text-blue-600 after:w-0 hover:after:w-full"
                }`
              }
            >
              {item.name}
            </NavLink>

          ))}

          {/* USER LOGGED IN PLATFORM SELECTION */}

          {user ? (

            <div className="flex items-center gap-5 border-l border-slate-200 pl-5 ml-2">

              {/* DASHBOARD */}

              <Link
                to="/dashboard"
                className="text-xs uppercase tracking-wider font-heading font-bold text-slate-600 hover:text-blue-600 transition duration-200"
              >
                Dashboard
              </Link>

              {/* PROFILE */}

              <Link
                to="/profile"
                className="p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-500/5 border border-transparent hover:border-blue-500/10 transition-all duration-200"
              >
                <User size={18} />
              </Link>

              {/* ADMIN PANEL BUTTON */}

              {user.role === "admin" && (

                <Link
                  to="/admin-dashboard"
                  className="text-xs uppercase tracking-wider font-heading font-black text-blue-600 hover:text-blue-700 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-xl transition shadow-inner"
                >
                  Admin Panel
                </Link>

              )}

              {/* LOGOUT */}

              <button
                onClick={handleLogout}
                className="text-xs uppercase tracking-wider font-heading font-bold text-red-500 hover:text-red-600 cursor-pointer transition duration-200"
              >
                Logout
              </button>

            </div>

          ) : (

            <div className="flex items-center gap-4 border-l border-slate-200/80 pl-5 ml-1">
              <Link
                to="/login"
                className="text-xs uppercase tracking-wider font-heading font-bold text-slate-600 hover:text-blue-600 transition duration-200"
              >
                Login
              </Link>

              <Link
                to="/signup"
                /* Seamless link targeting your established custom glow action-triggers inside css layout */
                className="btn-club-glow text-xs uppercase tracking-widest font-heading px-5 py-2.5 rounded-xl shadow-md cursor-pointer inline-block"
              >
                Sign Up
              </Link>
            </div>

          )}

        </nav>

        {/* MOBILE MENU BUTTON */}

        <button
          className="lg:hidden text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {
            isOpen
              ? <X size={24} />
              : <Menu size={24} />
          }
        </button>

      </div>

      {/* MOBILE MENU PANEL OVERLAY */}

      {isOpen && (

        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-6 py-5 space-y-3.5 shadow-xl animate-fade-in">

          {navItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-bold font-heading tracking-wide py-1.5 border-l-2 pl-3 transition-colors ${
                  isActive
                    ? "text-blue-600 border-blue-600 bg-blue-500/5 rounded-r-lg"
                    : "text-slate-600 border-transparent hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>

          ))}

          {/* USER LOGGED IN CONTROLS MOBILE VIEW */}

          {user ? (

            <div className="pt-4 border-t border-slate-100 space-y-3.5 pl-3">

              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block text-sm font-bold font-heading text-slate-600 hover:text-blue-600"
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="block text-sm font-bold font-heading text-slate-600 hover:text-blue-600"
              >
                Profile
              </Link>

              {user.role === "admin" && (

                <Link
                  to="/admin-dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-black font-heading text-blue-600 hover:text-blue-700"
                >
                  Admin Panel
                </Link>

              )}

              <button
                onClick={handleLogout}
                className="block w-full text-left text-sm font-bold font-heading text-red-500 hover:text-red-600 cursor-pointer"
              >
                Logout
              </button>

            </div>

          ) : (

            <div className="pt-4 border-t border-slate-100 flex items-center gap-4 pl-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold font-heading text-slate-600 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="btn-club-glow text-xs uppercase tracking-widest font-heading px-5 py-2.5 rounded-xl shadow-sm text-center flex-1"
              >
                Sign Up
              </Link>
            </div>

          )}

        </div>

      )}

    </header>

  );

}

export default Navbar;