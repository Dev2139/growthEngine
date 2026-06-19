import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { services } from "@/data/services";
import { ArrowLeft, ArrowRight, CheckCircle2, Laptop, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/sections/CTASection";
import { useState } from "react";

import { useSEO } from "@/hooks/useSEO";

const ServiceDetail = () => {
  const { slug } = useParams();
  const [auditOpen, setAuditOpen] = useState(false);
  
  const service = services.find((s) => s.slug === slug);

  useSEO({
    title: service ? `${service.title} | Services | DevDhara Technologies` : "Service Detail | DevDhara Technologies",
    description: service ? service.description : "Premium IT and Custom Software development service at DevDhara Technologies.",
    keywords: service ? `${service.title}, ${service.category}, DevDhara IT Services` : "IT Services, DevDhara"
  });

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F8F8F6] text-foreground relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

        <Navbar onOpenAudit={() => setAuditOpen(true)} />
        <section className="pt-48 pb-20 px-6 text-center">
          <h1 className="text-4xl font-black mb-4 font-display text-black">Service Not Found</h1>
          <p className="text-black/60 mb-8 text-lg font-medium">We're currently expanding our service portfolio.</p>
          <Link to="/services">
            <Button className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 border border-black/10">
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
    <div className="min-h-screen bg-[#F8F8F6] text-foreground selection:bg-gold/20 selection:text-gold-dark overflow-x-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-1/3 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn}>
              <Link to="/services" className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-black/50 mb-8 hover:text-gold-dark transition-colors">
                <ArrowLeft className="w-4 h-4" /> All Services
              </Link>
            </motion.div>

            <motion.h1 
              variants={fadeIn} 
              className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-black font-display"
            >
              {service.title}
            </motion.h1>

            <motion.div variants={fadeIn} className="space-y-6 max-w-xl">
              <p className="text-xl text-gold-dark font-display font-light leading-relaxed font-serif-italic italic">
                "{service.tagline}"
              </p>
              <p className="text-base text-black/60 leading-relaxed font-medium">
                {service.fullDescription}
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 flex flex-wrap gap-4">
              <Button
                onClick={() => setAuditOpen(true)}
                className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md active:scale-95 border border-black/10 shadow-lg flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 text-gold" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-black/[0.06] bg-[#F8F8F6] p-2">
              <div className="rounded-[32px] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-[28px] shadow-xl border border-black/[0.04] hidden sm:block">
              <div className="text-center">
                <div className="text-3xl font-black text-black mb-1">99.9%</div>
                <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/40">Uptime Guaranteed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-10 px-6 border-t border-b border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 md:gap-20">
          {service.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-black/60">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features & Tech Stack */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-gold/10 flex items-center justify-center text-gold-dark">
                <Laptop className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-black tracking-tight font-display text-black">Technology Stack</h2>
            </div>
            <p className="text-base text-black/60 mb-10 leading-relaxed font-medium">
              We leverage the most advanced and reliable technologies to ensure your product is secure, scalable, and blazingly fast.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {service.techStack?.map((tech) => (
                <div key={tech} className="p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-black/[0.04] flex items-center justify-center text-center hover:bg-white hover:border-gold/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.02)] transition-all duration-300">
                  <span className="text-xs font-bold text-black/85">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-gold/10 flex items-center justify-center text-gold-dark">
                <Package className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-black tracking-tight font-display text-black">Key Deliverables</h2>
            </div>
            <p className="text-base text-black/60 mb-10 leading-relaxed font-medium">
              Every project includes a comprehensive set of deliverables ensuring you have full ownership of your technical assets.
            </p>
            <div className="space-y-4">
              {service.deliverables?.map((item) => (
                <div key={item} className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-black/[0.04] hover:bg-white hover:border-gold/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.02)] transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold-dark transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-black/75">{item}</span>
                </div>
              ))}
            </div>
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

export default ServiceDetail;
