import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, Quote, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [auditOpen, setAuditOpen] = useState(false);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4 font-display">Project Not Found</h1>
          <Link to="/projects">
             <Button className="bg-blue text-white rounded-full px-8 h-12 font-bold">
               Back to Projects
             </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero with Background Image Overlay */}
      <section className="relative min-h-[80vh] flex items-center pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn}>
              <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue hover:text-gold transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Portfolio
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mb-6">
              <span className="px-5 py-2 text-[10px] font-black uppercase tracking-widest bg-blue text-white rounded-full">
                {project.category}
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-foreground max-w-4xl leading-tight font-display">
              {project.title}
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-foreground/80 max-w-3xl leading-relaxed italic">
              {project.excerpt}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="py-20 px-6 bg-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-[40px] bg-white border border-blue/5 shadow-xl shadow-blue/5"
              >
                <div className="text-4xl md:text-5xl font-black text-blue tabular-nums mb-2 font-display">
                  {r.value}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue/5 px-4 py-2 rounded-full mb-6 text-blue">
              <span className="text-xs font-bold uppercase tracking-widest">The Challenge</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">{project.challenge}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue/5 p-12 rounded-[40px] border border-blue/5"
          >
            <div className="inline-flex items-center gap-2 bg-gold/15 px-4 py-2 rounded-full mb-6 text-gold">
              <span className="text-xs font-bold uppercase tracking-widest">Our Strategy</span>
            </div>
            <p className="text-xl text-foreground/80 leading-relaxed mb-10">{project.solution}</p>
            
            <div className="pt-10 border-t border-blue/10">
              <h4 className="text-xs font-black uppercase tracking-widest text-foreground mb-6">Services Delivered:</h4>
              <div className="flex flex-wrap gap-3">
                {project.services.map((s) => (
                  <div key={s} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue/5 text-[11px] font-bold text-blue shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(30,58,138,0.2)] border-8 border-white"
          >
            <img src={project.image} alt="Project detail" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-28 px-6 bg-blue/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-16 h-16 text-blue/10 mx-auto mb-10" />
            <p className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12 font-display italic">
              "{project.testimonial.quote}"
            </p>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-3xl bg-blue text-white flex items-center justify-center text-xl font-black mb-6 shadow-xl shadow-blue/20">
                {project.testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-xl font-black text-foreground">{project.testimonial.name}</div>
              <div className="text-sm font-bold text-blue mt-2 uppercase tracking-[0.2em]">{project.testimonial.role}</div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Next/Prev Navigation */}
      {projects.length > 1 && (
        <section className="border-t border-blue/5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group p-16 md:p-24 border-b md:border-b-0 md:border-r border-blue/5 hover:bg-blue/5 transition-all"
            >
              <div className="text-xs font-black uppercase tracking-[0.3em] text-blue/40 mb-6 flex items-center gap-2 group-hover:text-blue transition-colors">
                <ArrowLeft className="w-4 h-4" /> Previous Case Study
              </div>
              <div className="text-3xl font-black tracking-tight text-foreground group-hover:text-blue transition-colors font-display">
                {prevProject.title}
              </div>
            </Link>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group p-16 md:p-24 text-right hover:bg-blue/5 transition-all"
            >
              <div className="text-xs font-black uppercase tracking-[0.3em] text-blue/40 mb-6 flex items-center justify-end gap-2 group-hover:text-blue transition-colors">
                Next Case Study <ArrowRight className="w-4 h-4" />
              </div>
              <div className="text-3xl font-black tracking-tight text-foreground group-hover:text-blue transition-colors font-display">
                {nextProject.title}
              </div>
            </Link>
          </div>
        </section>
      )}

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default ProjectDetail;
