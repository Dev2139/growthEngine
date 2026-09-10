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

import { useSEO } from "@/hooks/useSEO";

const Projects = () => {
  const [auditOpen, setAuditOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const allProjectKeywords = Array.from(
    new Set(
      projects.flatMap((p) => [
        ...(p.searchKeywords || []),
        ...(p.altNames || []),
        p.client,
      ])
    )
  ).join(", ");

  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "DevDhara Technologies Client Projects & Case Studies",
    "description": "Comprehensive engineering portfolio by DevDhara Technologies including ScholarGrid ERP, ChemX Pumps, Omax Industries, RestoPlus, InvoxaERP, SavioERP, MV Fluid, JAAG Alumni, Jaiswal App, and AWM Store.",
    "url": "https://devdhar.in/projects",
    "itemListElement": projects.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": p.title,
        "alternateName": p.altNames || [p.client],
        "url": `https://devdhar.in/projects/${p.slug}`,
        "description": p.excerpt,
        "author": {
          "@type": "Organization",
          "name": "DevDhara Technologies"
        }
      }
    }))
  };

  useSEO({
    title: "Our Portfolio & Case Studies | DevDhara Technologies",
    description: "Explore DevDhara Technologies' portfolio: ScholarGrid School Management ERP, Chemx pumps, Omax Industries, RestoPlus, InvoxaERP, SavioERP, MV Fluid, JAAG, Jaiswal App. High-performance custom software engineering.",
    keywords: `DevDhara Portfolio, Case Studies, Software Projects, School ERP, ScholarGrid ERP, ChemX Pumps, Chem-X Pumps, Chemx, ${allProjectKeywords}`,
    canonicalUrl: "https://devdhar.in/projects",
    jsonLd: projectsJsonLd
  });

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-foreground selection:bg-gold/20 selection:text-gold-dark overflow-x-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.04] px-4 py-2 rounded-full mb-8 text-black/60 shadow-sm backdrop-blur-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Our Work</span>
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-display leading-[1.1] text-black"
              >
                Case studies of <span className="font-serif-italic italic text-gold font-light">digital growth</span>.
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-base md:text-lg text-black/60 max-w-2xl mb-10 leading-relaxed font-medium"
              >
                Discover how we've helped businesses transform their digital presence and achieve record-breaking growth through elite engineering.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md active:scale-95 border border-black/10 shadow-lg"
                >
                  Start Your Project
                </Button>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl border border-black/[0.06] bg-[#F8F8F6] p-2">
                <div className="rounded-[32px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80&fit=crop"
                    alt="Portfolio Showcase"
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-[28px] shadow-xl border border-black/[0.04] hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold/15 flex items-center justify-center text-gold-dark">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-black">25+</div>
                    <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/40">Successful Projects</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 px-6 border-t border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-16"
          >
            <div className="flex items-center gap-1.5 mr-4 text-black/40 font-extrabold uppercase tracking-[0.15em] text-[10px]">
              <Filter className="w-3.5 h-3.5" />
              Filter:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-xs font-bold rounded-full transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-black text-white shadow-md"
                    : "bg-white/40 backdrop-blur-sm border border-black/[0.04] text-black/60 hover:bg-white hover:text-black hover:border-black/[0.08]"
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
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group block bg-white/40 backdrop-blur-sm rounded-[32px] overflow-hidden border border-black/[0.04] hover:bg-white hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-widest bg-white/90 backdrop-blur-md rounded-full text-gold-dark border border-black/[0.04] shadow-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold tracking-tight text-black group-hover:text-gold-dark transition-colors mb-3 font-display">
                        {project.title}
                      </h3>
                      <p className="text-xs text-black/60 leading-relaxed mb-6 font-medium line-clamp-2">
                        {project.excerpt}
                      </p>

                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {project.results.slice(0, 3).map((r, j) => (
                          <div key={j} className="p-4 rounded-2xl bg-[#F8F8F6] border border-black/[0.03] text-center group-hover:bg-gold/5 transition-colors">
                            <div className="text-lg font-black text-gold-dark tabular-nums">{r.value}</div>
                            <div className="text-[9px] font-bold uppercase tracking-widest text-black/40 mt-1">{r.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-black group-hover:gap-3 transition-all">
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 text-gold" />
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
