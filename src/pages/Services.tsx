import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&fit=crop"
            alt="Data Analysis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.25em] text-gold mb-6 font-medium">
              Solutions
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-balance"
            >
              Dominate Your{" "}
              <span className="text-gold-gradient font-display italic">Digital Market.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed mx-auto md:mx-0"
            >
              I provide the complete growth stack — from high-intent search ranking to automated lead conversion systems. Explore my specialized services below.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={`/services/${service.slug}`}
                  className="group rounded-2xl overflow-hidden card-gold bg-card flex flex-col md:flex-row h-full hover:translate-y-[-5px] transition-all duration-300"
                >
                  {/* Service Image */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-card/80 to-transparent md:block hidden" />
                  </div>

                  {/* Service Content */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-widest border border-gold/30 rounded-full text-gold w-fit">
                      {service.category}
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 text-foreground leading-tight group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <ul className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold mt-auto pt-5 border-t border-border/50">
                      Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-border py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold tracking-tighter mb-6">
              Ready to Build Your Growth Engine?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Schedule a free audit call. I'll map out exactly how to scale your lead flow.
            </p>
            <button
              onClick={() => setAuditOpen(true)}
              className="h-12 px-8 text-sm rounded-md btn-gold"
            >
              Start Conversation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
};

export default ServicesOverview;
