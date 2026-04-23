import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";
import { Server, Cpu, Globe, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Results = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  const stats = [
    { icon: Server, label: "System Uptime", value: "99.9%", description: "Guaranteed SLA for all enterprise platforms", color: "bg-blue/5 text-blue" },
    { icon: Cpu, label: "Efficiency Gain", value: "60%", description: "Average operational speed increase", color: "bg-gold/10 text-gold" },
    { icon: Globe, label: "Deployments", value: "150+", description: "Successful system launches in 5 years", color: "bg-blue/5 text-blue" },
    { icon: ShieldCheck, label: "Security Audits", value: "100%", description: "Compliance rate for data security", color: "bg-gold/10 text-gold" },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue/5 rounded-l-[100px] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-blue/5 px-4 py-2 rounded-full mb-8 text-blue">
              <span className="text-xs font-bold uppercase tracking-widest">Performance Metrics</span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-8xl font-black tracking-tight mb-8 font-display leading-tight"
            >
              Engineering That <br /><span className="text-blue">Delivers Results.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
            >
              Every system we build is benchmarked for elite performance. We don't just deliver software; we deliver scalable solutions that solve real business bottlenecks.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="py-24 px-6 bg-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[40px] bg-white border border-blue/5 shadow-xl shadow-blue/5 text-center group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto transition-transform group-hover:scale-110 ${stat.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-5xl font-black text-foreground mb-3 tabular-nums font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-black text-blue uppercase tracking-[0.2em] mb-4">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Success Stories */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display">
              Technical <span className="text-blue">Impact</span>
            </h3>
          </div>

          <div className="space-y-32">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-widest bg-blue/5 text-blue rounded-full">
                    {project.category}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black mb-8 text-foreground leading-tight font-display">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-12">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="p-6 rounded-3xl bg-blue/5 border border-blue/5">
                        <div className="text-3xl font-black text-blue tabular-nums mb-1 font-display">
                          {result.value}
                        </div>
                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to={`/projects/${project.slug}`}>
                    <Button className="bg-blue text-white hover:bg-blue/90 rounded-full px-8 h-12 font-bold flex gap-2">
                      View Case Study <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className={`rounded-[60px] overflow-hidden shadow-2xl border-8 border-white aspect-video lg:aspect-square ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-blue relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&fit=crop" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white font-display mb-8">
            Let's Engineer Your <span className="text-gold">Next Success.</span>
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Ready to modernize your infrastructure or build a new product? We're ready to help you architect a solution that lasts.
          </p>
          <Button 
            onClick={() => setAuditOpen(true)}
            className="bg-gold text-blue hover:bg-gold/90 rounded-full px-12 h-16 font-black text-xl shadow-2xl flex gap-2 mx-auto"
          >
            Get Free Consultation <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default Results;
