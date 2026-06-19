import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/sections/CTASection";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Link } from "react-router-dom";

import { useSEO } from "@/hooks/useSEO";

const ServicesOverview = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  useSEO({
    title: "Our IT & Custom Software Services | DevDhara Technologies",
    description: "Premium IT services by DevDhara Technologies in Ahmedabad. Specializing in Custom Web Development, Android & iOS Mobile Apps, UI/UX Design, and SEO ranking strategies.",
    keywords: "DevDhara Services, Web Development Services, App Development Ahmedabad, UI/UX Design Gujarat, SEO Agency"
  });

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
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Our Expertise</span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-8xl font-black tracking-tight mb-8 font-display leading-[1.05] text-black"
            >
              Elite Technical <br /><span className="font-serif-italic italic text-gold font-light">solutions</span>.
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-base md:text-lg text-black/60 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
            >
              We provide the complete technical stack — from high-performance web engineering to custom enterprise software and elite UI/UX design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 border-t border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link 
                  to={`/services/${service.slug}`}
                  className="group flex flex-col sm:flex-row bg-white/40 backdrop-blur-sm rounded-[32px] overflow-hidden border border-black/[0.04] hover:bg-white hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-500 min-h-[340px]"
                >
                  {/* Service Image */}
                  <div className="sm:w-1/2 h-56 sm:h-auto overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F6]/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Service Content */}
                  <div className="sm:w-1/2 p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 mb-4 text-[9px] font-extrabold uppercase tracking-widest bg-gold/15 text-gold-dark rounded-full w-fit">
                      {service.category}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-black leading-tight group-hover:text-gold-dark transition-colors font-display">
                      {service.title}
                    </h3>

                    <p className="text-xs text-black/60 mb-6 leading-relaxed font-medium line-clamp-2">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          <span className="text-[11px] font-bold text-black/75">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-black mt-auto pt-4 border-t border-black/[0.03] group-hover:gap-3 transition-all">
                      Explore Service <ArrowRight className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                </Link>
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

export default ServicesOverview;
