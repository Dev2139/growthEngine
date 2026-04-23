import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2, ArrowRight, Layers } from "lucide-react";
import { services } from "@/data/services";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const [auditOpen, setAuditOpen] = useState(false);

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
              <span className="text-xs font-bold uppercase tracking-widest">Our Expertise</span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-8xl font-black tracking-tight mb-8 font-display leading-tight"
            >
              Elite Technical <br /><span className="text-blue">Solutions.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
            >
              We provide the complete technical stack — from high-performance web engineering to custom enterprise software and elite UI/UX design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  to={`/services/${service.slug}`}
                  className="group flex flex-col lg:flex-row bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-blue/5 border border-blue/5 hover:border-gold/30 hover:translate-y-[-5px] transition-all duration-500"
                >
                  {/* Service Image */}
                  <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>

                  {/* Service Content */}
                  <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-widest bg-blue/5 text-blue rounded-full w-fit">
                      {service.category}
                    </div>

                    <h3 className="text-2xl font-black mb-4 text-foreground leading-tight group-hover:text-blue transition-colors font-display">
                      {service.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-8 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-10">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-xs font-bold text-foreground/70">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blue mt-auto pt-6 border-t border-blue/5 group-hover:gap-4 transition-all">
                      Explore Service <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-blue relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&fit=crop" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white font-display mb-8">
            Ready to Build Your <span className="text-gold">Growth Engine?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Schedule a free consultation call. We'll map out exactly how to scale your technical infrastructure.
          </p>
          <Button 
            onClick={() => setAuditOpen(true)}
            className="bg-gold text-blue hover:bg-gold/90 rounded-full px-12 h-16 font-black text-xl shadow-2xl flex gap-2 mx-auto"
          >
            Start Conversation <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default ServicesOverview;
