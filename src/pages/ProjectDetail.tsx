import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, Quote, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import { useState } from "react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [auditOpen, setAuditOpen] = useState(false);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tighter text-foreground mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero with Background Image Overlay */}
      <section className="relative min-h-[70vh] flex items-end pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn}>
              <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to all projects
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-gold">
                {project.category}
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-balance text-foreground max-w-4xl leading-tight">
              {project.title}
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {project.excerpt}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="section-border py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-card card-gold"
              >
                <div className="text-3xl md:text-4xl font-bold text-gold tabular-nums mb-2">
                  {r.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-6">The Challenge</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-6">Our Strategy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
            
            <div className="mt-10 pt-10 border-t border-border/50">
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">Services Delivered:</h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <div key={s} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary border border-border/50 text-[11px] font-medium text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content / Images */}
      <section className="py-24 px-6 section-border bg-secondary/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden card-gold mb-16 shadow-2xl"
          >
            <img src={project.image} alt="Project detail" className="w-full h-auto" />
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24 px-6 section-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="w-10 h-10 text-gold/30 mx-auto mb-8" />
            <p className="text-2xl font-medium text-foreground leading-relaxed mb-10 italic">
              "{project.testimonial.quote}"
            </p>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-xs font-bold text-gold mb-4">
                {project.testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-sm font-bold text-foreground">{project.testimonial.name}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{project.testimonial.role}</div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 px-6 section-border bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6 text-foreground">
            Get Similar Results.
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Every business is different, but the growth engine is universal. Let's audit your current systems and build your roadmap.
          </p>
          <button
            onClick={() => setAuditOpen(true)}
            className="h-12 px-8 text-sm rounded-md btn-gold"
          >
            Schedule Free Audit Call
          </button>
        </motion.div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="section-border">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="group p-12 md:p-16 border-b md:border-b-0 md:border-r border-border/50 hover:bg-card transition-colors"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4 flex items-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5" /> Previous Project
            </div>
            <div className="text-xl font-semibold tracking-tight text-foreground group-hover:text-gold transition-colors line-clamp-1">
              {prevProject.client}
            </div>
          </Link>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group p-12 md:p-16 text-right hover:bg-card transition-colors"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4 flex items-center justify-end gap-2">
              Next Project <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <div className="text-xl font-semibold tracking-tight text-foreground group-hover:text-gold transition-colors line-clamp-1">
              {nextProject.client}
            </div>
          </Link>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
};

export default ProjectDetail;
