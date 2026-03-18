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

      {/* Hero */}
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn}>
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> All Projects
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 text-xs uppercase tracking-widest bg-secondary border border-border rounded-full text-muted-foreground">
                {project.category}
              </span>
              <span className="px-3 py-1 text-xs uppercase tracking-widest bg-secondary border border-border rounded-full text-muted-foreground">
                {project.client}
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-balance text-foreground max-w-4xl">
              {project.title}
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl text-pretty leading-relaxed">
              {project.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 pb-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden card-depth">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover aspect-[16/9]" />
          </div>
        </div>
      </motion.section>

      {/* Results Grid */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-muted-foreground mb-12 text-center">
              Key Results
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.results.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="text-center p-6 rounded-2xl bg-card card-depth"
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground tabular-nums mb-2">
                    {r.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeIn}>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">The Challenge</h3>
              <p className="text-foreground leading-relaxed text-lg">{project.challenge}</p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Our Solution</h3>
              <p className="text-foreground leading-relaxed text-lg">{project.solution}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-muted-foreground mb-8 text-center">
              Services Delivered
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-3">
              {project.services.map((s) => (
                <div key={s} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                  {s}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 px-6 border-t border-border/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="w-8 h-8 text-border mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 text-pretty">
              "{project.testimonial.quote}"
            </p>
            <div className="text-sm font-medium text-foreground">{project.testimonial.name}</div>
            <div className="text-xs text-muted-foreground mt-1">{project.testimonial.role}</div>
          </motion.div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-foreground">
            Want Results Like These?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's audit your business and show you exactly where the growth opportunities are.
          </p>
          <Button
            onClick={() => setAuditOpen(true)}
            size="lg"
            className="h-14 px-8 text-base rounded-full bg-foreground text-background hover:bg-foreground/90 active:scale-[0.97] transition-all"
          >
            Get Your Free Audit
          </Button>
        </motion.div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="border-t border-border/50">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="group p-10 md:p-14 border-b md:border-b-0 md:border-r border-border/50 hover:bg-card/50 transition-colors"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-3 flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" /> Previous
            </div>
            <div className="text-lg font-medium tracking-tight text-foreground group-hover:text-muted-foreground transition-colors line-clamp-1">
              {prevProject.client}
            </div>
          </Link>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group p-10 md:p-14 text-right hover:bg-card/50 transition-colors"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-3 flex items-center justify-end gap-2">
              Next <ArrowRight className="w-3 h-3" />
            </div>
            <div className="text-lg font-medium tracking-tight text-foreground group-hover:text-muted-foreground transition-colors line-clamp-1">
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
