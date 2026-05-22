import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/sections/CTASection";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Handshake, 
  CheckCircle2, 
  ArrowRight, 
  Gift, 
  ShieldCheck,
  TrendingUp,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Partners = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  const partnerTypes = [
    {
      icon: Gift,
      title: "Affiliate Partners",
      desc: "Perfect for individual consultants and influencers. Earn generous commissions for every successful client referral.",
      benefits: ["High commission rates", "Early access to new features", "Dedicated partner support"],
      color: "bg-gold/10 text-gold-dark"
    },
    {
      icon: Handshake,
      title: "Strategic Agencies",
      desc: "For design studios and marketing firms that need a reliable technical powerhouse to build their clients' software.",
      benefits: ["White-label development", "Preferred pricing tiers", "Priority engineering support"],
      color: "bg-gold/10 text-gold-dark"
    },
    {
      icon: Cpu,
      title: "Technology Partners",
      desc: "For platforms and SaaS providers looking to integrate their solutions with our elite development services.",
      benefits: ["Joint marketing efforts", "API & Integration priority", "Shared technical resources"],
      color: "bg-gold/10 text-gold-dark"
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Reliable Execution",
      desc: "Partner with a team that has a 100% project delivery rate and obsession with code quality."
    },
    {
      icon: TrendingUp,
      title: "Mutual Growth",
      desc: "We prioritize long-term relationships that result in consistent revenue growth for our partners."
    },
    {
      icon: Cpu,
      title: "Shared Network",
      desc: "Gain access to our elite network of engineers, designers, and growth specialists."
    }
  ];

  const getAvatarGradient = (name: string) => {
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const gradients = [
      "from-amber-100 to-gold",
      "from-blue-200 to-blue-900",
      "from-amber-200 to-amber-700",
      "from-slate-200 to-slate-800",
      "from-indigo-200 to-indigo-900",
      "from-yellow-100 to-gold",
    ];
    return gradients[hash % gradients.length];
  };

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
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.04] px-4 py-2 rounded-full mb-8 text-black/60 shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Partnership Program</span>
              </motion.div>
              
              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-display leading-[1.1] text-black"
              >
                Grow faster, <br />
                <span className="font-serif-italic italic text-gold font-light">together</span>.
              </motion.h1>
              
              <motion.p
                variants={fadeIn}
                className="text-base md:text-lg text-black/60 max-w-2xl mb-10 leading-relaxed font-medium"
              >
                Join the Devdhara Software Solutions Partner Network. Whether you're an individual consultant or a global agency, we provide the technical firepower you need to succeed.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md active:scale-95 border border-black/10 shadow-lg"
                >
                  Apply to Partner
                </Button>
                <Link to="/partners/programs">
                  <Button 
                    variant="outline"
                    className="bg-transparent border-black/20 text-black hover:bg-black/5 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300"
                  >
                    View Programs
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div variants={fadeIn} className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border border-black/[0.06] bg-[#F8F8F6] p-2 relative z-10">
                <div className="rounded-[32px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80&fit=crop"
                    alt="Partnership"
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/85 backdrop-blur-xl p-6 rounded-[28px] shadow-xl border border-black/[0.04] hidden sm:block z-20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold/15 flex items-center justify-center text-gold-dark">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-black">Win-Win</div>
                    <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/40">Collaboration Model</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-6 md:px-12 border-t border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-dark mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black font-display">
              Built on <span className="font-serif-italic italic text-gold font-light">trust & results</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Partnering with Devdhara Software Solutions allowed our agency to take on enterprise-level software projects that we previously had to turn away. Their technical expertise is truly world-class.",
                author: "Vaibhav Patel",
                role: "Owner, V R Graphics",
              },
              {
                quote: "The affiliate program is straightforward and highly rewarding. I've referred multiple clients, and the feedback from them about Devdhara Software Solutions's work has been exceptional.",
                author: "Anand Patel",
                role: "MD, Savio ERP Softwares pvt ltd",
              }
            ].map((story, i) => {
              const initials = story.author.split(" ").map(n => n[0]).join("");
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/40 backdrop-blur-sm p-8 rounded-[32px] border border-black/[0.04] relative group hover:bg-white transition-colors duration-500 shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#F8F8F6] border border-black/[0.04] p-1 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                      <div className={`w-full h-full rounded-full bg-gradient-to-tr ${getAvatarGradient(story.author)} flex items-center justify-center text-white font-display text-base font-bold`}>
                        {initials}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-black text-base">{story.author}</div>
                      <div className="text-[9px] font-extrabold text-gold-dark uppercase tracking-widest">{story.role}</div>
                    </div>
                  </div>
                  <p className="text-base text-black/60 italic leading-relaxed font-medium">
                    "{story.quote}"
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 md:px-12 border-t border-black/[0.03]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-dark mb-4">The Journey</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black font-display">
              Get started in <span className="font-serif-italic italic text-gold font-light">4 simple steps</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Application", desc: "Submit your details through our simple partnership form." },
              { title: "Onboarding", desc: "A brief call with our partner manager to align on goals." },
              { title: "Activation", desc: "Gain access to your partner portal and marketing assets." },
              { title: "Growth", desc: "Start collaborating and earning as we deliver exceptional software." }
            ].map((step, i) => (
              <div key={i} className="relative bg-white/40 backdrop-blur-sm p-6 rounded-3xl border border-black/[0.04] hover:bg-white transition-all duration-300">
                <div className="text-5xl font-black text-gold/15 mb-3 font-display">0{i + 1}</div>
                <h4 className="text-base font-bold text-black mb-2">{step.title}</h4>
                <p className="text-xs text-black/60 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 px-6 md:px-12 border-t border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-dark mb-4">Choose Your Path</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black font-display">
              Designed for <span className="font-serif-italic italic text-gold font-light">every collaborator</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/40 backdrop-blur-sm rounded-[32px] p-8 border border-black/[0.04] hover:bg-white hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.02)] transition-all duration-300 group h-full flex flex-col"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${type.color}`}>
                  <type.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-black mb-3">{type.title}</h4>
                <p className="text-xs text-black/60 leading-relaxed mb-6 flex-grow font-medium">
                  {type.desc}
                </p>
                <ul className="space-y-3 pt-6 border-t border-black/[0.03]">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-[11px] font-bold text-black/75 leading-none">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 px-6 md:px-12 border-t border-black/[0.03]">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-dark mb-4">The Devdhara Software Solutions Advantage</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight text-black font-display mb-10 leading-[1.1]">
                Why industry leaders <span className="font-serif-italic italic text-gold font-light">partner with us</span>
              </h3>
              <div className="space-y-8">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-5"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-gold/10 flex items-center justify-center text-gold-dark shrink-0">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-black mb-1">{benefit.title}</h4>
                      <p className="text-xs text-black/60 leading-relaxed font-medium">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-zinc-950 rounded-[42px] p-10 md:p-12 text-white relative overflow-hidden border border-white/5 shadow-2xl">
                {/* Ambient lights */}
                <div className="absolute right-[-10%] top-[-20%] w-[250px] h-[250px] bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute left-[-10%] bottom-[-20%] w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="text-3xl font-black font-display mb-4 leading-tight">Ready to start?</div>
                  <p className="text-xs text-white/60 mb-8 leading-relaxed font-medium">
                    Our partnership team reviews applications within 24 hours. Let's discuss how we can build something extraordinary together.
                  </p>
                  <Button 
                    onClick={() => setAuditOpen(true)}
                    className="bg-white text-zinc-950 hover:bg-zinc-100 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-md flex items-center gap-2"
                  >
                    Begin Your Partnership <ArrowRight className="w-4 h-4 text-gold-dark" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection onOpenAudit={() => setAuditOpen(true)} />

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default Partners;
