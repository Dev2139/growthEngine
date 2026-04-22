import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import { useState } from "react";
import { Server, Cpu, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";

const Results = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  const stats = [
    { icon: Server, label: "System Uptime", value: "99.9%", description: "Guaranteed SLA for all enterprise platforms" },
    { icon: Cpu, label: "Efficiency Gain", value: "60%", description: "Average operational speed increase" },
    { icon: Globe, label: "Deployments", value: "150+", description: "Successful system launches in 5 years" },
    { icon: ShieldCheck, label: "Security Audits", value: "100%", description: "Compliance rate for data security" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&fit=crop"
            alt="System Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center lg:text-left">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.25em] text-gold mb-6 font-medium">
              Performance Metrics
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-balance"
            >
              Engineering That{" "}
              <span className="text-gold-gradient font-display italic">Delivers.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Every system I build is benchmarked for performance. I don't just deliver software; I deliver 
              scalable solutions that solve real business bottlenecks.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="section-border py-20 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-xl bg-card card-gold text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2 tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gold uppercase tracking-widest mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Detailed List */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3 font-medium">Validation</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Technical Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-20">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-widest border border-gold/30 rounded-full text-gold">
                    {project.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                        <div className="text-2xl font-bold text-gold tabular-nums">
                          {result.value}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {project.testimonial && (
                    <div className="p-6 rounded-xl bg-card card-gold italic">
                      <p className="text-sm text-foreground mb-4 leading-relaxed">
                        "{project.testimonial.quote}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-[10px] font-bold text-gold">
                          {project.testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-foreground">
                            {project.testimonial.name}
                          </div>
                          <div className="text-[10px] text-muted-foreground">
                            {project.testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className={`rounded-2xl overflow-hidden card-gold aspect-video lg:aspect-square ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-border py-24 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold tracking-tighter mb-6">
              Let's engineer your next success.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Ready to modernize your infrastructure or build a new product? 
              I'm ready to help you architect a solution that lasts.
            </p>
            <button
              onClick={() => setAuditOpen(true)}
              className="h-12 px-8 text-sm rounded-md btn-gold"
            >
              Get Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
};

export default Results;
