import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { services } from "@/data/services";
import { ArrowLeft, ArrowRight, CheckCircle2, Laptop, Package, Sparkles, HelpCircle, ChevronDown, Rocket } from "lucide-react";
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const service = services.find((s) => s.slug === slug);

  useSEO({
    title: service ? `${service.title} | Services | DevDhara Technologies` : "Service Detail | DevDhara Technologies",
    description: service ? service.description : "Premium IT, Digital Marketing, and Custom Software services at DevDhara Technologies.",
    keywords: service ? `${service.title}, ${service.category}, DevDhara Services` : "IT Services, DevDhara"
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
              <Link to="/services" className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-black/50 hover:text-gold-dark transition-colors">
                <ArrowLeft className="w-4 h-4" /> All Services
              </Link>
              <span className="text-black/30">•</span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-dark bg-gold/10 px-3 py-1 rounded-full">
                {service.category}
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeIn} 
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-black font-display"
            >
              {service.title}
            </motion.h1>

            <motion.div variants={fadeIn} className="space-y-5 max-w-xl">
              <p className="text-lg md:text-xl text-gold-dark font-display leading-relaxed font-serif-italic italic">
                "{service.tagline}"
              </p>
              <p className="text-base text-black/60 leading-relaxed font-medium">
                {service.fullDescription}
              </p>
            </motion.div>

            {/* Highlights metrics if available */}
            {service.highlights && service.highlights.length > 0 && (
              <motion.div variants={fadeIn} className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {service.highlights.map((h, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/60 border border-black/[0.04] shadow-sm">
                    <div className="text-lg font-black font-display text-black">{h.value}</div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-black/40 mt-0.5">{h.label}</div>
                  </div>
                ))}
              </motion.div>
            )}

            <motion.div variants={fadeIn} className="mt-10 flex flex-wrap gap-4">
              <Button
                onClick={() => setAuditOpen(true)}
                className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md active:scale-95 border border-black/10 shadow-lg flex items-center gap-2"
              >
                Get Custom Proposal
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
              <div className="rounded-[32px] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-widest font-extrabold text-gold mb-1">Service Excellence</div>
                  <div className="text-xl font-bold font-display">{service.title}</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl p-6 rounded-[28px] shadow-xl border border-black/[0.04] hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-gold/15 flex items-center justify-center text-gold-dark font-black text-lg">
                  ★
                </div>
                <div>
                  <div className="text-xl font-black text-black">100% Tailored</div>
                  <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/40">Results Driven Strategy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-10 px-6 border-t border-b border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {service.benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-black/70">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features & Key Solutions */}
      {service.features && service.features.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-white/30 border-b border-black/[0.03]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full mb-4 text-[10px] font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Capabilities & Capabilities
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight text-black mb-4">
                What We Bring To <span className="font-serif-italic font-normal italic text-gold-dark">Your Growth</span>
              </h2>
              <p className="text-black/60 text-sm md:text-base font-medium">
                Comprehensive, end-to-end strategy and execution tailored to your specific business targets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="bg-white/70 hover:bg-white rounded-[32px] p-8 border border-black/[0.04] hover:border-gold/30 shadow-sm hover:shadow-[0_16px_40px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-black/[0.03] text-black group-hover:bg-gold group-hover:text-white flex items-center justify-center font-bold text-xs transition-colors mb-6">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold font-display text-black mb-3 group-hover:text-gold-dark transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-black/60 leading-relaxed font-medium">
                      {feature.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-black/[0.03] flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">
                    Included Solution <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Strategic Execution Roadmap (Process) */}
      {service.process && service.process.length > 0 && (
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.04] px-4 py-1.5 rounded-full mb-4 text-[10px] font-extrabold uppercase tracking-widest text-black/60">
                <Rocket className="w-3.5 h-3.5 text-gold" /> Proven Roadmap
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight text-black mb-4">
                How We Execute <span className="font-serif-italic font-normal italic text-gold-dark">Step-By-Step</span>
              </h2>
              <p className="text-black/60 text-sm md:text-base font-medium">
                Our structured 4-phase framework ensures complete transparency, rapid deployment, and maximum ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((p, i) => (
                <div 
                  key={i} 
                  className="bg-white/50 backdrop-blur-sm rounded-[32px] p-8 border border-black/[0.04] relative hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl font-black font-display text-gold/30 mb-4">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-bold font-display text-black mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs text-black/60 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack & Key Deliverables */}
      <section className="py-24 px-6 md:px-12 bg-black/[0.01] border-t border-black/[0.03]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Tech Stack / Tools */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-gold/10 flex items-center justify-center text-gold-dark">
                <Laptop className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-black tracking-tight font-display text-black">Tools & Technologies</h2>
            </div>
            <p className="text-base text-black/60 mb-10 leading-relaxed font-medium">
              We utilize industry-leading platforms and analytics tools to ensure peak performance and measurable output.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {service.techStack?.map((tech) => (
                <div key={tech} className="p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-black/[0.04] flex items-center justify-center text-center hover:bg-white hover:border-gold/30 hover:shadow-sm transition-all duration-300">
                  <span className="text-xs font-bold text-black/85">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-gold/10 flex items-center justify-center text-gold-dark">
                <Package className="w-5 h-5" />
              </div>
              <h2 className="text-3xl font-black tracking-tight font-display text-black">Tangible Deliverables</h2>
            </div>
            <p className="text-base text-black/60 mb-10 leading-relaxed font-medium">
              Every project includes a comprehensive set of deliverables giving you full transparency and asset ownership.
            </p>
            <div className="space-y-4">
              {service.deliverables?.map((item) => (
                <div key={item} className="flex items-center gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-black/[0.04] hover:bg-white hover:border-gold/30 hover:shadow-sm transition-all duration-300 group">
                  <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold-dark transition-colors shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark group-hover:text-white" />
                  </div>
                  <span className="text-sm font-bold text-black/75">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 px-6 md:px-12 border-t border-black/[0.03]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full mb-4 text-[10px] font-extrabold uppercase tracking-widest">
                <HelpCircle className="w-3.5 h-3.5" /> Answers & Clarity
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight text-black mb-4">
                Frequently Asked <span className="font-serif-italic font-normal italic text-gold-dark">Questions</span>
              </h2>
              <p className="text-black/60 text-sm md:text-base font-medium">
                Got questions about our {service.title} process? Here are answers to common inquiries.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/60 border border-black/[0.04] rounded-2xl overflow-hidden transition-all duration-300 hover:border-gold/30"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold font-display text-black text-base md:text-lg"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gold-dark transition-transform duration-300 shrink-0 ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-sm text-black/70 leading-relaxed font-medium border-t border-black/[0.02]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <CTASection onOpenAudit={() => setAuditOpen(true)} />

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetail;

