import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Our Work
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-balance text-foreground">
              Projects That Speak<br />
              <span className="text-muted-foreground">For Themselves.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-2xl mb-12 text-pretty leading-relaxed">
              Every project below represents a real business that came to us with a growth problem — and left with a growth engine.
            </motion.p>
          </motion.div>

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
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-muted-foreground/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                  className="group block rounded-2xl overflow-hidden bg-card card-depth hover:card-depth-hover transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 text-xs uppercase tracking-widest bg-secondary/80 backdrop-blur-sm border border-border/50 rounded-full text-muted-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-medium tracking-tight mb-3 text-foreground group-hover:text-muted-foreground transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                      {project.excerpt}
                    </p>

                    <div className="flex items-center gap-3 mb-6">
                      {project.results.slice(0, 3).map((r, j) => (
                        <div key={j} className="flex-1 text-center">
                          <div className="text-lg font-semibold tracking-tight text-foreground tabular-nums">{r.value}</div>
                          <div className="text-[10px] uppercase tracking-widest text-muted-foreground/60 mt-1">{r.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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
