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

import { useSEO } from "@/hooks/useSEO";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [auditOpen, setAuditOpen] = useState(false);
  const project = projects.find((p) => p.slug === slug);

  useSEO({
    title: project ? `${project.client} | Case Study | DevDhara Technologies` : "Case Study | DevDhara Technologies",
    description: project ? project.excerpt : "Bespoke custom software and SaaS product case studies built by DevDhara Technologies.",
    keywords: project ? `${project.client}, ${project.category}, DevDhara Case Study` : "Case Studies, DevDhara"
  });

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F8F8F6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4 font-display text-black">Project Not Found</h1>
          <Link to="/projects">
             <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 border border-black/10">
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

  const getAvatarGradient = (name: string) => {
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const gradients = [
      "from-amber-100 to-gold",
      "from-blue-200 to-blue-900",
      "from-amber-200 to-amber-700",
      "from-slate-200 to-slate-800",
      "from-indigo-200 to-indigo-900",
      "from-yellow-100 to-gold",
    ];
    return gradients[hash % gradients.length];
  };

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-foreground selection:bg-gold/20 selection:text-gold-dark overflow-x-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero with Background Image Overlay */}
      <section className="relative min-h-[80vh] flex items-center pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-black/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F6] via-[#F8F8F6]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn}>
              <Link to="/projects" className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" /> Back to Portfolio
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-widest bg-gold/15 text-gold rounded-full border border-gold/30">
                {project.category}
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-black max-w-4xl leading-[1.05] font-display">
              {project.title}
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-black/85 max-w-3xl leading-relaxed font-serif-italic italic font-light">
              {project.excerpt}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Results Bar */}
      <section className="py-16 px-6 border-t border-b border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center p-6 rounded-[28px] bg-white/40 backdrop-blur-sm border border-black/[0.04] shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-black text-gold-dark tabular-nums mb-1 font-display">
                  {r.value}
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-black/40">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.04] px-4 py-2 rounded-full mb-6 text-black/60 shadow-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-widest">The Challenge</span>
            </div>
            <p className="text-lg text-black/60 leading-relaxed font-medium">{project.challenge}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/40 backdrop-blur-sm p-10 rounded-[32px] border border-black/[0.04] shadow-sm"
          >
            <div className="inline-flex items-center gap-2 bg-gold/15 px-4 py-2 rounded-full mb-6 text-gold-dark">
              <span className="text-[10px] font-extrabold uppercase tracking-widest">Our Strategy</span>
            </div>
            <p className="text-lg text-black/85 leading-relaxed mb-8 font-medium">{project.solution}</p>
            
            <div className="pt-8 border-t border-black/[0.03]">
              <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-black mb-4">Services Delivered:</h4>
              <div className="flex flex-wrap gap-2.5">
                {project.services.map((s) => (
                  <div key={s} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.04] text-[10px] font-bold text-black/75 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-16 px-6 bg-black/[0.01] border-t border-b border-black/[0.03]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[48px] overflow-hidden shadow-2xl border border-black/[0.06] bg-[#F8F8F6] p-2"
          >
            <img src={project.image} alt="Project detail" className="w-full h-auto rounded-[40px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24 px-6 md:px-12 bg-[#F8F8F6]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-gold/20 mx-auto mb-8" />
            <p className="text-3xl md:text-4xl font-light text-black leading-snug mb-10 font-serif-italic italic">
              "{project.testimonial.quote}"
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#F8F8F6] border border-black/[0.04] p-1 flex items-center justify-center mb-4 shadow-sm">
                <div className={`w-full h-full rounded-full bg-gradient-to-tr ${getAvatarGradient(project.testimonial.name)} flex items-center justify-center text-white font-display text-base font-bold`}>
                  {project.testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="text-lg font-bold text-black">{project.testimonial.name}</div>
              <div className="text-[10px] font-extrabold text-gold-dark mt-1 uppercase tracking-[0.2em]">{project.testimonial.role}</div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Next/Prev Navigation */}
      {projects.length > 1 && (
        <section className="border-t border-black/[0.03] bg-black/[0.01]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group p-12 md:p-16 border-b md:border-b-0 md:border-r border-black/[0.03] hover:bg-white transition-all duration-300"
            >
              <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-black/40 mb-3 flex items-center gap-1.5 group-hover:text-gold-dark transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous Case Study
              </div>
              <div className="text-xl font-bold tracking-tight text-black group-hover:text-gold-dark transition-colors font-display">
                {prevProject.title}
              </div>
            </Link>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group p-12 md:p-16 text-right hover:bg-white transition-all duration-300"
            >
              <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-black/40 mb-3 flex items-center justify-end gap-1.5 group-hover:text-gold-dark transition-colors">
                Next Case Study <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-xl font-bold tracking-tight text-black group-hover:text-gold-dark transition-colors font-display">
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
