import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Launch Events", "Workshops", "Tech Games"];

const galleryImages = [
  {
    id: 1,
    category: "Launch Events",
    src: "Screenshot 2026-03-06 201334.png",
  },
  {
    id: 2,
    category: "Workshops",
    src: "Screenshot 2026-03-07 131625.png",
  },
  {
    id: 3,
    category: "Tech Games",
    src: "Screenshot 2026-03-06 201850.png",
  },
  {
    id: 4,
    category: "Workshops",
    src: "Screenshot 2026-03-07 131726.png",
  },
  {
    id: 5,
    category: "Launch Events",
    src: "Screenshot 2026-03-06 201927.png",
  },
  {
    id: 6,
    category: "Tech Games",
    src: "Screenshot 2026-03-07 131741.png",
  },
  {
    id: 7,
    category: "Workshops",
    src: "Screenshot 2026-03-07 131825.png",
  },
  {
    id: 8,
    category: "Launch Events",
    src: "Screenshot 2026-03-07 131705.png",
  },
  {
    id: 9,
    category: "Workshops",
    src: "Screenshot 2026-03-07 131807.png",
  },
  {
    id: 10,
    category: "Workshops",
    src: "F1.jpeg",
  },
  {
    id: 11,
    category: "Workshops",
    src: "F2.jpeg",
  },
  {
    id: 12,
    category: "Workshops",
    src:"F3.jpeg",
  },
  {
    id: 13,
    category: "Workshops",
    src: "F4.jpeg",
  },
  {
    id: 14,
    category: "Workshops",
    src: "F5.jpeg",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="w-full overflow-hidden font-sans bg-slate-50 text-slate-800">

      {/* ================= HEADER ================= */}
      <section className="relative py-32 text-center bg-slate-950 text-white overflow-hidden">
        
        {/* Spatial Geometric Lighting Profiles */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/60 z-0"></div>
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>

        {/* Ambient Blur Core Orbs */}
        <div className="absolute top-10 left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md mb-6">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest font-heading">
              Visual Archives
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight leading-none mt-2">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400/70 drop-shadow-sm">
              Gallery
            </span>
          </h1>

          <p className="text-slate-300 mt-6 max-w-xl mx-auto text-lg md:text-xl leading-relaxed font-medium tracking-wide">
            Moments captured from our events, workshops, and celebrations.
          </p>

          {/* FILTER BUTTONS (Utilizing Premium Integrated State Mechanics) */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 relative z-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "btn-club-glow text-white shadow-xl shadow-blue-600/25"
                    : "bg-white/5 text-slate-300 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="relative py-28 bg-slate-50/60 border-t border-slate-100">
        
        {/* Soft Modern Surface Light Distribution Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-slate-50/50 to-slate-100/20 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Bento-Asymmetric Masonry Framing Array Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[280px]">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, type: "spring", stiffness: 100 }}
                className={`relative overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-200/60 bg-slate-900 group cursor-pointer transition-all duration-500 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:border-blue-500/30 ${
                  index % 3 === 0 ? "lg:row-span-2" : ""
                }`}
              >
                {/* Image Processing Core Component */}
                <img
                  src={image.src}
                  alt="Gallery Item Content Frame"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0"
                />

                {/* Micro-Interaction Dark Ambient Gradient Veil Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-40 group-hover:opacity-90 transition-all duration-500 flex items-end p-8 z-10" />
                
                {/* Meta-Text Content Block */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                    <span className="text-white font-extrabold text-sm font-heading tracking-widest uppercase">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default Gallery;