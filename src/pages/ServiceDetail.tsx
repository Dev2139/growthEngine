import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { services } from "@/data/services";
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Cpu, Rocket, ShieldCheck, HelpCircle, ChevronDown, Laptop, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const [auditOpen, setAuditOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-foreground">
        <Navbar onOpenAudit={() => setAuditOpen(true)} />
        <section className="pt-40 pb-20 px-6 text-center">
          <h1 className="text-4xl font-black mb-4 font-display">Service Not Found</h1>
          <p className="text-muted-foreground mb-8 text-lg">We're currently expanding our service portfolio.</p>
          <Link to="/services">
            <Button className="bg-blue text-white rounded-full px-8 h-12 font-bold">
              View All Services
            </Button>
          </Link>
        </section>
        <Footer />
        <FloatingButtons />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-foreground overflow-hidden">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue/5 rounded-l-[100px] -z-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn}>
              <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue mb-8 hover:text-gold transition-colors">
                <ArrowLeft className="w-4 h-4" /> All Services
              </Link>
            </motion.div>

            <motion.h1 
              variants={fadeIn} 
              className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-foreground font-display"
            >
              {service.title}
            </motion.h1>

            <motion.div variants={fadeIn} className="space-y-6 max-w-xl">
              <p className="text-xl text-foreground/80 font-bold leading-relaxed italic">
                "{service.tagline}"
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => setAuditOpen(true)}
                className="bg-blue text-white hover:bg-blue/90 h-16 px-10 rounded-full font-bold text-lg shadow-xl shadow-blue/20 flex gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-blue/5 hidden sm:block">
              <div className="text-center">
                <div className="text-4xl font-black text-blue mb-1">99.9%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Uptime Guaranteed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 px-6 bg-blue/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20">
          {service.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-blue" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features & Tech Stack */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue/5 flex items-center justify-center text-blue">
                <Laptop className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black tracking-tight font-display">Technology Stack</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We leverage the most advanced and reliable technologies to ensure your product is secure, scalable, and blazingly fast.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {service.techStack?.map((tech) => (
                <div key={tech} className="p-5 rounded-3xl bg-blue/5 border border-blue/5 flex items-center justify-center text-center hover:bg-blue/10 transition-colors">
                  <span className="text-sm font-bold text-blue">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
                <Package className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black tracking-tight font-display">Key Deliverables</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Every project includes a comprehensive set of deliverables ensuring you have full ownership of your technical assets.
            </p>
            <div className="space-y-4">
              {service.deliverables?.map((item) => (
                <div key={item} className="flex items-center gap-4 p-6 rounded-3xl bg-white border border-blue/5 shadow-xl shadow-blue/5 group hover:border-blue/20 transition-all">
                  <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center group-hover:bg-blue transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-blue group-hover:text-white" />
                  </div>
                  <span className="text-base font-bold text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-blue relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
           <img src={service.image} alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white font-display mb-8">
            Let's Build Your <span className="text-gold">{service.title}</span> Solution.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Ready to scale? Book a free technical audit and let's map out your roadmap to success.
          </p>
          <Button 
            onClick={() => setAuditOpen(true)}
            className="bg-gold text-blue hover:bg-gold/90 rounded-full px-12 h-16 font-black text-xl shadow-2xl flex gap-2 mx-auto"
          >
            Get Free Quote <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetail;
