import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AuditModal from "@/components/sections/AuditModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Check, ArrowRight, Zap, Target, Rocket } from "lucide-react";
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
    color: "blue",
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
    color: "blue",
    popular: false
  }
];

const Pricing = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue/5 rounded-l-[100px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-blue/5 px-4 py-2 rounded-full mb-8 text-blue">
                <span className="text-xs font-bold uppercase tracking-widest">Our Pricing</span>
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-display leading-[1.1]"
              >
                Tailored Plans for <span className="text-blue">Your Growth.</span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
              >
                We don't believe in one-size-fits-all. Every project is unique, and our pricing reflects the custom engineering and strategy we provide.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className="bg-blue text-white hover:bg-blue/90 rounded-full px-10 h-14 font-bold text-lg shadow-xl shadow-blue/20"
                >
                  Get Custom Quote
                </Button>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80&fit=crop"
                  alt="Pricing and Strategy"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-blue/5 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue">Fixed</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Milestone Based</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-10 rounded-[40px] border ${plan.popular ? 'border-gold shadow-2xl shadow-gold/10' : 'border-blue/5 shadow-xl shadow-blue/5'} bg-white group hover:-translate-y-2 transition-all duration-500`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${plan.color === 'gold' ? 'bg-gold/15 text-gold' : 'bg-blue/5 text-blue'}`}>
                  <plan.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-black text-foreground mb-2 font-display">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-8">{plan.tagline}</p>
                
                <div className="text-5xl font-black text-foreground mb-10 font-display">
                  {plan.price}
                </div>
                
                <ul className="space-y-5 mb-12">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.color === 'gold' ? 'bg-gold/10 text-gold' : 'bg-blue/10 text-blue'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm font-bold text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className={`w-full h-14 rounded-2xl font-bold text-lg transition-all ${plan.color === 'gold' ? 'bg-gold text-white hover:bg-gold/90' : 'bg-blue text-white hover:bg-blue/90'}`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-blue/5 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground font-display mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Tell us about your project requirements and we'll get back to you with a detailed technical proposal and roadmap.
          </p>
          <Button 
            onClick={() => setAuditOpen(true)}
            variant="outline"
            className="border-blue text-blue hover:bg-blue hover:text-white rounded-full px-10 h-14 font-bold text-lg"
          >
            Schedule a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default Pricing;
