import domains from "../data/domains";
import DomainCard from "../components/cards/DomainCard";

function Domains() {
  return (
    <div className="w-full overflow-hidden font-sans bg-slate-50 text-slate-800">

      {/* ================= HEADER ================= */}
      <section className="relative py-32 text-center overflow-hidden bg-slate-950 text-white">
        
        {/* Modern Depth Grid Layer & Blur Orbs */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/60 z-0"></div>
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>
        
        <div className="absolute top-10 left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse"></div>

        <div className="relative z-10 px-6 lg:px-20 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md mb-6">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest font-heading">
              Our Structure
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight leading-none">
            Domains of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400/70 drop-shadow-sm">
              Excellence
            </span>
          </h1>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium tracking-wide">
            IEI CSE is structured into specialized domains, each providing
            a unique platform for students to innovate, collaborate,
            and grow professionally.
          </p>
        </div>
      </section>

      {/* ================= DOMAINS GRID ================= */}
      <section className="relative py-28 bg-slate-50/60 border-t border-slate-100">
        
        {/* Soft Modern Industrial Surface Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-slate-50/50 to-slate-100/20 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

          {/* First 4 Domains Container with interactive scaling frames */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {domains.slice(0, 4).map((domain) => (
              <div 
                key={domain.id} 
                className="transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] rounded-3xl"
              >
                <DomainCard
                  title={domain.title}
                  description={domain.description}
                  skills={domain.skills}
                  iconColor={domain.iconColor}
                  shapeColor={domain.shapeColor}
                />
              </div>
            ))}
          </div>

          {/* Last Domain Centered Layout Block */}
          {domains.length > 4 && (
            <div className="flex justify-center mt-14 lg:mt-16">
              <div className="w-full md:w-1/2 transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_20px_40px_rgba(0,0,0,0.02)] rounded-3xl">
                <DomainCard
                  title={domains[4].title}
                  description={domains[4].description}
                  skills={domains[4].skills}
                  iconColor={domains[4].iconColor}
                  shapeColor={domains[4].shapeColor}
                />
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

export default Domains;