import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Filter } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Projects = () => {
  const [auditOpen, setAuditOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue/5 rounded-l-[100px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-blue/5 px-4 py-2 rounded-full mb-8 text-blue">
                <span className="text-xs font-bold uppercase tracking-widest">Our Work</span>
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-display leading-[1.1]"
              >
                Case Studies of <span className="text-blue">Digital Growth.</span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
              >
                Discover how we've helped businesses transform their digital presence and achieve record-breaking growth through elite engineering.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className="bg-blue text-white hover:bg-blue/90 rounded-full px-10 h-14 font-bold text-lg shadow-xl shadow-blue/20"
                >
                  Start Your Project
                </Button>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80&fit=crop"
                  alt="Portfolio Showcase"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-blue/5 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue">150+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Successful Projects</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-blue/5">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-20"
          >
            <div className="flex items-center gap-2 mr-4 text-blue/40 font-bold uppercase tracking-widest text-xs">
              <Filter className="w-4 h-4" />
              Filter by:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 text-sm font-bold rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-blue text-white shadow-xl shadow-blue/20"
                    : "bg-white text-foreground/60 hover:bg-blue/5 hover:text-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group block bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-blue/5 border border-blue/5 hover:border-gold/30 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-6 left-6">
                        <span className="px-5 py-2 text-xs font-bold uppercase tracking-widest bg-white/90 backdrop-blur-md rounded-full text-blue shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-10">
                      <h3 className="text-3xl font-black tracking-tight text-foreground group-hover:text-blue transition-colors mb-4 font-display">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-10 line-clamp-2">
                        {project.excerpt}
                      </p>

                      <div className="grid grid-cols-3 gap-4 mb-10">
                        {project.results.slice(0, 3).map((r, j) => (
                          <div key={j} className="p-4 rounded-3xl bg-blue/5 text-center group-hover:bg-blue/10 transition-colors">
                            <div className="text-xl font-black text-blue tabular-nums">{r.value}</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{r.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue group-hover:gap-4 transition-all">
                        View Full Case Study
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default Projects;
