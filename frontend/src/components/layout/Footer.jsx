import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  MapPin
} from "lucide-react";

function Footer() {
  return (
    /* Shifted up to a premium dark-slate club ambiance with clean integrated border dividers */
    <footer className="bg-slate-950 border-t border-slate-900 text-white py-14 md:py-20 mt-20 relative overflow-hidden font-sans select-none">
      
      {/* Subtle ambient deep-blue lighting bleed behind footer elements */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">

          {/* BRAND */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-black font-heading text-white tracking-tight">
              IEI CSE
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Empowering future engineers through innovation,
              professional growth, and technical excellence.
            </p>

            {/* Upgraded social row anchors with smooth transition scale pop elements */}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={idx}
                    href={social.href} 
                    className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/20 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* EXPLORE LINKS */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-heading font-black mb-5 text-blue-500">
              Explore
            </h4>

            <ul className="space-y-3 font-heading font-bold text-xs">
              {[
                { name: "About Us", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Domains", path: "/domains" },
                { name: "Our Team", path: "/team" },
                { name: "Gallery", path: "/gallery" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition duration-200 inline-block tracking-wider transform hover:translate-x-1 duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES LINKS */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-heading font-black mb-5 text-blue-500">
              Resources
            </h4>

            <ul className="space-y-3 font-heading font-bold text-xs">
              {[
                { name: "Blog", path: "/blog" },
                { name: "Join Us", path: "/join" },
                { name: "Contact", path: "/contact" },
                { name: "Privacy Policy", path: "/" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white transition duration-200 inline-block tracking-wider transform hover:translate-x-1 duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO CONTAINER */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-heading font-black mb-5 text-blue-500">
              Contact Us
            </h4>

            <ul className="space-y-4 font-sans font-medium text-sm">
              <li className="flex items-start space-x-3 group">
                <Mail size={16} className="text-blue-500 mt-1 shrink-0 group-hover:scale-110 transition duration-300" />
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors break-all">
                  contact@ieicse.org
                </span>
              </li>

              <li className="flex items-start space-x-3 group">
                <MapPin size={16} className="text-blue-500 mt-1 shrink-0 group-hover:scale-110 transition duration-300" />
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  Madhav Institute of Technology & Science,
                  Gwalior (India)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ATTRIBUTION BAR */}
        <div className="border-t border-white/5 mt-16 pt-8 text-center md:flex md:justify-between md:items-center text-slate-500 font-medium font-sans text-xs">
          <p className="tracking-wide">
            © {new Date().getFullYear()} IEI CSE Student Chapter.
            All rights reserved.
          </p>

          <p className="mt-2 md:mt-0 tracking-wide">
            Designed with <span className="text-red-500 inline-block animate-pulse">♥</span> by Tech Team
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;