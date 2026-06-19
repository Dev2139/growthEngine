import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/sections/CTASection";
import { useState } from "react";
import { Server, Cpu, Globe, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { useSEO } from "@/hooks/useSEO";

const Results = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  useSEO({
    title: "Engineering Results & Performance Metrics | DevDhara Technologies",
    description: "Review DevDhara Technologies' engineering performance. Key metrics including average operational speed increases, verified system uptime, and project deliverables.",
    keywords: "DevDhara Uptime SLA, Software Engineering performance metrics, system latency"
  });

  const stats = [
    { icon: Server, label: "System Uptime", value: "99.9%", description: "Guaranteed SLA for all enterprise platforms" },
    { icon: Cpu, label: "Efficiency Gain", value: "60%", description: "Average operational speed increase" },
    { icon: Globe, label: "Deployments", value: "25+", description: "Successful launches in 2 years" },
    { icon: ShieldCheck, label: "Security Audits", value: "100%", description: "Compliance rate for data security" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-foreground selection:bg-gold/20 selection:text-gold-dark overflow-x-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.04] px-4 py-2 rounded-full mb-8 text-black/60 shadow-sm backdrop-blur-sm">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Performance Metrics</span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-8xl font-black tracking-tight mb-8 font-display leading-[1.05] text-black"
            >
              Engineering that <br /><span className="font-serif-italic italic text-gold font-light">delivers results</span>.
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-base md:text-lg text-black/60 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
            >
              Every system we build is benchmarked for elite performance. We don't just deliver software; we deliver scalable solutions that solve real business bottlenecks.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="py-20 px-6 border-t border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[32px] bg-white/40 backdrop-blur-sm border border-black/[0.04] text-center group hover:bg-white hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.02)] transition-all duration-500 flex flex-col items-center"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 bg-gold/15 text-gold-dark`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-4xl font-black text-black mb-1.5 tabular-nums font-display">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-extrabold text-gold-dark uppercase tracking-[0.15em] mb-3">
                    {stat.label}
                  </div>
                  <div className="text-xs text-black/60 leading-relaxed font-medium">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Success Stories */}
      <section className="py-24 px-6 md:px-12 border-t border-black/[0.03]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-dark mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black font-display">
              Technical <span className="font-serif-italic italic text-gold font-light">impact</span>
            </h3>
          </div>

          <div className="space-y-32">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center`}
              >
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block px-4.5 py-1.5 mb-6 text-[9px] font-extrabold uppercase tracking-widest bg-gold/15 text-gold-dark rounded-full border border-gold/30">
                    {project.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-black leading-tight font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-black/60 mb-8 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-black/[0.04] hover:bg-white transition-all duration-300">
                        <div className="text-2xl font-black text-gold-dark tabular-nums mb-1 font-display">
                          {result.value}
                        </div>
                        <div className="text-[9px] font-extrabold text-black/40 uppercase tracking-widest">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to={`/projects/${project.slug}`}>
                    <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md border border-black/10 shadow-lg flex items-center gap-2">
                      View Case Study <ArrowRight className="w-4 h-4 text-gold" />
                    </Button>
                  </Link>
                </div>

                <div className={`rounded-[48px] overflow-hidden shadow-2xl border border-black/[0.06] bg-[#F8F8F6] p-2 aspect-video lg:aspect-square group ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-[40px] overflow-hidden h-full w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection onOpenAudit={() => setAuditOpen(true)} />

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default Results;
