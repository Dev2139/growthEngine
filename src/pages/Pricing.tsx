import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AuditModal from "@/components/sections/AuditModal";
import CTASection from "@/components/sections/CTASection";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Check, Zap, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Startup",
    tagline: "Perfect for new ventures",
    price: "Custom",
    icon: Zap,
    features: [
      "Custom Web Development",
      "UI/UX Design Concepts",
      "Mobile Responsive Design",
      "Basic SEO Optimization",
      "1 Month Free Support",
      "Standard Deployment"
    ],
    color: "gold",
    popular: false
  },
  {
    name: "Business",
    tagline: "Scaling your operations",
    price: "Custom",
    icon: Target,
    features: [
      "Advanced Web & App Dev",
      "Full Product Strategy",
      "Dedicated Project Manager",
      "Full SEO & Google Ranking",
      "3 Months Premium Support",
      "High-Scale Architecture",
      "API & System Integration"
    ],
    color: "gold",
    popular: true
  },
  {
    name: "Enterprise",
    tagline: "Total digital transformation",
    price: "Custom",
    icon: Rocket,
    features: [
      "Custom Software Development",
      "Legacy System Migration",
      "24/7 Priority Support",
      "Unlimited Revisions",
      "Cloud Infrastructure Setup",
      "Security Audits",
      "White-Glove Service"
    ],
    color: "gold",
    popular: false
  }
];

const Pricing = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-foreground selection:bg-gold/20 selection:text-gold-dark overflow-x-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <Navbar onOpenAudit={() => setAuditOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.04] px-4 py-2 rounded-full mb-8 text-black/60 shadow-sm backdrop-blur-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Our Pricing</span>
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-display leading-[1.1] text-black"
              >
                Tailored plans for <span className="font-serif-italic italic text-gold font-light">your growth</span>.
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-base md:text-lg text-black/60 max-w-2xl mb-10 leading-relaxed font-medium"
              >
                We don't believe in one-size-fits-all. Every project is unique, and our pricing reflects the custom engineering and strategy we provide.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md active:scale-95 border border-black/10 shadow-lg"
                >
                  Get Custom Quote
                </Button>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl border border-black/[0.06] bg-[#F8F8F6] p-2">
                <div className="rounded-[32px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80&fit=crop"
                    alt="Pricing and Strategy"
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-[28px] shadow-xl border border-black/[0.04] hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold/15 flex items-center justify-center text-gold-dark">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-black">Fixed</div>
                    <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/40">Milestone Based</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 px-6 border-t border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`relative p-10 rounded-[32px] border bg-white/40 backdrop-blur-sm group hover:-translate-y-1 transition-all duration-500 flex flex-col ${
                  plan.popular 
                    ? 'border-gold bg-white shadow-2xl shadow-gold/5' 
                    : 'border-black/[0.04] shadow-sm hover:border-black/[0.08]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-[9px] font-extrabold uppercase tracking-widest px-5 py-2 rounded-full border-2 border-white shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 bg-gold/15 text-gold-dark`}>
                  <plan.icon className="w-5 h-5" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-1 font-display">{plan.name}</h3>
                <p className="text-xs text-black/40 mb-6 font-medium">{plan.tagline}</p>
                
                <div className="text-4xl font-black text-black mb-8 font-display">
                  {plan.price}
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-4.5 h-4.5 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center flex-shrink-0 p-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-bold text-black/70 leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className={`w-full h-12 rounded-2xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 border ${
                    plan.popular 
                      ? 'bg-black text-white hover:bg-black/90 border-transparent shadow-lg shadow-black/10' 
                      : 'bg-transparent border-black/20 text-black hover:bg-black/5'
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenAudit={() => setAuditOpen(true)} />

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default Pricing;
