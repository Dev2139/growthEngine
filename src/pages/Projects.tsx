import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import { useState } from "react";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Projects = () => {
  const [auditOpen, setAuditOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&fit=crop"
            alt="Business collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.25em] text-gold mb-6 font-medium">
              Portfolio
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-balance"
            >
              Projects That Speak<br />
              <span className="text-gold-gradient font-display italic">For Themselves.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              Every project below represents a real business that came to us with a growth problem — and left with a growth engine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-2 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold text-background border-gold font-bold"
                    : "bg-transparent text-muted-foreground border-border/50 hover:border-gold/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-card card-gold hover:translate-y-[-5px] transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-gold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-semibold tracking-tight mb-4 text-foreground group-hover:text-gold transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-2">
                      {project.excerpt}
                    </p>

                    <div className="flex items-center gap-4 mb-8">
                      {project.results.slice(0, 3).map((r, j) => (
                        <div key={j} className="flex-1 p-3 rounded-lg bg-secondary/50 border border-border/50 text-center">
                          <div className="text-base font-bold tracking-tight text-gold tabular-nums">{r.value}</div>
                          <div className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mt-1">{r.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-gold transition-colors duration-300">
                      View Case Study
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
};

export default Projects;
