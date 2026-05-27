import { useState } from "react";
import team from "../data/team";
import TeamCard from "../components/cards/TeamCard";

function Team() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="w-full overflow-hidden font-sans">

      {/* HEADER */}
      <section className="relative py-28 text-center bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white overflow-hidden">
        {/* Animated Premium Ambient Glows */}
        <div className="absolute top-10 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-heading">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 drop-shadow-sm">
              Team
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            The passionate individuals behind IEI CSE Student Chapter.
          </p>
        </div>
      </section>


      {/* FACULTY */}
      <section className="py-24 bg-slate-50 text-center">
        <h2 className="text-3xl font-extrabold mb-14 text-slate-900 font-heading tracking-tight">
          Faculty Co-ordinator
        </h2>
        <div className="flex justify-center px-6">
          <div className="w-full md:w-1/3 transition-transform duration-300 hover:scale-[1.02]">
            <TeamCard {...team.faculty} highlight onClick={setSelectedUser} />
          </div>
        </div>
      </section>


      {/* CORE */}
      <section className="py-24 bg-slate-900 text-white">
        <h2 className="text-3xl font-extrabold text-center mb-14 font-heading tracking-tight">
          Core Leadership
        </h2>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.core.map((member, index) => (
            <div key={index} className="transition-transform duration-300 hover:scale-[1.03]">
              <TeamCard
                {...member}
                dark
                onClick={setSelectedUser}
              />
            </div>
          ))}
        </div>
      </section>


      {/* HEADS */}
      <section className="py-24 bg-slate-50">
        <h2 className="text-3xl font-extrabold text-center mb-14 text-slate-900 font-heading tracking-tight">
          Heads
        </h2>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.heads.map((member, index) => (
            <div key={index} className="transition-transform duration-300 hover:scale-[1.03]">
              <TeamCard
                {...member}
                onClick={setSelectedUser}
              />
            </div>
          ))}
        </div>
      </section>


      {/* DEVELOPERS (With Premium 3D Flip Card Animation) */}
      <section className="py-28 bg-gradient-to-b from-slate-950 to-black text-white overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 font-heading tracking-tight">
          Website Architect & Developer
        </h2>

        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          {team.developers.map((dev, index) => (
            /* 3D Perspective Wrapper */
            <div
              key={index}
              onClick={() => setSelectedUser(dev)}
              className="group perspective w-full max-w-5xl h-[650px] cursor-pointer"
            >
              {/* Inner 3D Container handles the flip transition on hover */}
              <div className="relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* ================= CARD FRONT ================= */}
                <div className="absolute inset-0 w-full h-full backface-hidden grid lg:grid-cols-2 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[40px] overflow-hidden shadow-2xl">
                  
                  {/* Left Side: Image Content */}
                  <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-12">
                    <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="relative w-[340px] h-[340px] rounded-[35px] object-cover border-4 border-blue-500/40 shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Right Side: Visual Teaser Content */}
                  <div className="flex flex-col justify-center p-10 lg:p-12">
                    <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase font-heading">
                      AI/ML Developer • Full Stack Developer • Technical Architect
                    </p>
                    <h3 className="text-4xl lg:text-5xl font-black font-heading tracking-tight mt-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {dev.name}
                    </h3>
                    
                    {/* Glowing Premium Interaction Button */}
                    <div className="mt-12">
                      <span className="btn-club-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold shadow-xl">
                        Explore Profile 
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* ================= CARD BACK ================= */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/40 border border-blue-500/30 rounded-[40px] overflow-hidden shadow-2xl p-10 lg:p-16 flex flex-col justify-between">
                  
                  {/* Top Bio Block */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                      <h4 className="text-lg font-bold font-heading uppercase tracking-widest text-blue-400">Biography & Mission</h4>
                    </div>
                    <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-3xl text-justify font-sans tracking-wide">
                      {/* Dynamically uses the dev's intro variable like your original logic */}
                      {dev.intro || `Hi Everyone! I am ${dev.name}, a passionate developer and AI enthusiast focused on building intelligent systems and scalable web applications involving Machine Learning, NLP, and full-stack development.`}
                    </p>
                  </div>

                  {/* Bottom Info & Contacts Block */}
                  <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-slate-800/80 items-end">
                    <div className="space-y-3 font-sans">
                      <a href={`mailto:${dev.email}`} className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group/link text-base md:text-lg">
                        <span className="text-xl">📧</span> 
                        <span className="border-b border-transparent group-hover/link:border-cyan-400/50 transition-all truncate">{dev.email}</span>
                      </a>
                      <a href={`tel:${dev.phone}`} className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group/link text-base md:text-lg">
                        <span className="text-xl">📞</span> 
                        <span className="border-b border-transparent group-hover/link:border-cyan-400/50 transition-all">{dev.phone}</span>
                      </a>
                    </div>
                    
                    <div className="flex md:justify-end">
                      <span className="px-5 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 font-semibold text-sm tracking-wide font-heading">
                        Click Card to Open Interactive Modal
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>


      {/* PROFILE POPUP MODAL (Completely intact logic/layout with sleek styling upgrades) */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all duration-300 animate-fadeIn">
          <div className="bg-white text-slate-900 rounded-3xl p-10 w-full max-w-[440px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative border border-slate-100 transform transition-all scale-100">
            
            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 font-semibold text-sm transition-all duration-200"
            >
              ✕
            </button>

            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"></div>
                <img
                  src={selectedUser.image}
                  className="relative w-28 h-28 mx-auto rounded-full border-4 border-blue-500 shadow-lg object-cover"
                  alt={selectedUser.name}
                />
              </div>

              <h2 className="text-2xl font-extrabold mt-5 font-heading tracking-tight text-slate-900">
                {selectedUser.name}
              </h2>
              <p className="text-blue-600 font-semibold text-sm font-heading tracking-wide mt-1">
                {selectedUser.role}
              </p>

              <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-slate-600 text-sm leading-relaxed text-justify font-sans">
                  {selectedUser.intro}
                </p>
              </div>

              <div className="mt-6 space-y-3 text-sm font-sans font-medium text-left bg-slate-50/50 p-4 rounded-xl border border-dashed border-slate-200">
                {/* EMAIL */}
                <p className="flex items-center gap-2 text-slate-700">
                  <span className="text-base">📧</span>
                  <a
                    href={`mailto:${selectedUser.email}`}
                    className="text-blue-600 hover:text-blue-700 hover:underline truncate"
                  >
                    {selectedUser.email}
                  </a>
                </p>

                {/* PHONE */}
                <p className="flex items-center gap-2 text-slate-700">
                  <span className="text-base">📞</span>
                  <a
                    href={`tel:${selectedUser.phone}`}
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    {selectedUser.phone}
                  </a>
                </p>

                {/* LINKEDIN */}
                {selectedUser.linkedin && selectedUser.linkedin !== "#" && (
                  <p className="flex items-center gap-2 text-slate-700">
                    <span className="text-base">🔗</span>
                    <a
                      href={selectedUser.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-semibold"
                    >
                      LinkedIn Profile
                    </a>
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Team;