import { motion } from "framer-motion";
import { User, Calendar } from "lucide-react";

const blogs = [
  {
    id: 1,
    category: "Career",
    title: "Resume Tips for Engineers",
    author: "Dr. Manojeet Roy",
    date: "Jan 30, 2026",
    description:
      "Crafting a resume that stands out is crucial. Learn how to highlight your technical skills and projects effectively.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Preparation",
    title: "Interview Preparation Guide",
    author: "Aditya Sharma",
    date: "Feb 10, 2026",
    description:
      "Master the art of technical interviews with proven strategies and common questions asked by top tech companies.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Growth",
    title: "Technical Growth Journey",
    author: "Rahul Verma",
    date: "Feb 15, 2026",
    description:
      "From a novice to an expert. A roadmap for computer science students to navigate the vast world of technology.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  },
];

function Blog() {
  return (
    <div className="w-full overflow-hidden font-sans bg-slate-50 text-slate-800">

      {/* ================= HEADER ================= */}
      <section className="relative py-32 text-center bg-slate-950 text-white overflow-hidden">
        
        {/* Deep Space Spatial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/60 z-0"></div>
        <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay z-0"></div>

        {/* Ambient Blur Core Orbs */}
        <div className="absolute top-10 left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-[420px] h-[420px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md mb-6">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest font-heading">
              Insights & Articles
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight leading-none mt-2">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400/70 drop-shadow-sm">
              Blog
            </span>
          </h1>

          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium tracking-wide">
            Stay informed with the latest trends, career advice, and technical insights from our community.
          </p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="relative py-24 bg-slate-50/60 border-t border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-slate-50/50 to-slate-100/20 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.06)] transition-shadow duration-300 overflow-hidden border border-slate-200/60 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* IMAGE COMPONENT FRAME */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
                  
                  <span className="absolute top-4 left-4 bg-blue-600 border border-blue-400/20 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md tracking-wider uppercase font-heading">
                    {blog.category}
                  </span>
                </div>

                {/* CONTENT WRAPPER */}
                <div className="p-6 md:p-7">
                  {/* AUTHOR + DATE META FRAME */}
                  <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans">
                    <div className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                      <User size={13} className="text-slate-400/80" /> 
                      <span className="truncate max-w-[120px]">{blog.author}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-400/80" /> 
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-extrabold mt-4 text-slate-900 font-heading tracking-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-slate-500 mt-3 text-sm md:text-base leading-relaxed font-sans font-medium text-justify line-clamp-3">
                    {blog.description}
                  </p>
                </div>
              </div>

              {/* READ MORE CTA PANEL SECTION */}
              <div className="px-6 md:px-7 pb-6 md:pb-7 pt-0">
                <button className="text-blue-600 font-bold text-sm tracking-wide inline-flex items-center group/btn cursor-pointer font-heading">
                  Read More 
                  <span className="inline-block ml-1 transition-transform duration-300 group-hover/btn:translate-x-1.5">→</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
export default Blog;