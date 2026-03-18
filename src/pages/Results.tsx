import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import { useState } from "react";
import { TrendingUp, Target, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Results = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  const stats = [
    { icon: TrendingUp, label: "Average ROI", value: "312%", description: "Across all clients" },
    { icon: Target, label: "Avg Lead Increase", value: "247%", description: "Within 90 days" },
    { icon: Users, label: "Businesses Scaled", value: "100+", description: "In 5 years" },
    { icon: Zap, label: "Monthly Revenue Generated", value: "$2.4M", description: "For our clients" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 border-b border-border/50">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto"
        >
          <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Proven Results
          </motion.p>
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-balance"
          >
            Results That{" "}
            <span className="text-muted-foreground">Speak Louder</span>
            <br />
            Than Words.
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg text-muted-foreground max-w-2xl mb-8 text-pretty leading-relaxed"
          >
            Every metric below is real. Every success story is a real business that transformed their growth trajectory with our system.
          </motion.p>
        </motion.div>
      </section>

      {/* Key Stats */}
      <section className="py-20 px-6 border-b border-border/50">
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
                  className="p-8 rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-border transition-colors"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">
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

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Case Studies
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-balance">
              How We Helped Businesses{" "}
              <span className="text-muted-foreground">Hit Their Goals</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-transparent"
              >
                <div>
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest border border-primary/50 rounded-full text-primary/80">
                    {project.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.results.map((result, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-primary">
                          {result.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  {project.testimonial && (
                    <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                      <p className="text-sm italic text-foreground mb-2">
                        "{project.testimonial.quote}"
                      </p>
                      <div className="text-xs font-semibold text-muted-foreground">
                        — {project.testimonial.name}, {project.testimonial.role}
                      </div>
                    </div>
                  )}
                </div>
                <div className="h-96 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">
              Ready to be a success story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's audit your current presence and build your growth engine.
            </p>
            <Button
              size="lg"
              onClick={() => setAuditOpen(true)}
              className="h-14 px-8 text-base rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              Get Your Free Audit
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
};

export default Results;
