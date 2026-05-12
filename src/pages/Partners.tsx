import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { 
  Handshake, 
  Target, 
  Zap, 
  Users, 
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
      benefits: ["High Commission rates", "Early access to new features", "Dedicated partner support"],
      color: "bg-blue/5 text-blue"
    },
    {
      icon: Handshake,
      title: "Strategic Agencies",
      desc: "For design studios and marketing firms that need a reliable technical powerhouse to build their clients' software.",
      benefits: ["White-label development", "Preferred pricing tiers", "Priority engineering support"],
      color: "bg-gold/10 text-gold"
    },
    {
      icon: Cpu,
      title: "Technology Partners",
      desc: "For platforms and SaaS providers looking to integrate their solutions with our elite development services.",
      benefits: ["Joint marketing efforts", "API & Integration priority", "Shared technical resources"],
      color: "bg-blue/5 text-blue"
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
      icon: Users,
      title: "Shared Network",
      desc: "Gain access to our elite network of engineers, designers, and growth specialists."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue/5 rounded-l-[100px] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-blue/5 border border-blue/10 px-4 py-2 rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue">Partnership Program</span>
              </motion.div>
              
              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-display leading-[1.1]"
              >
                Grow Faster, <br />
                <span className="text-blue text-glow">Together.</span>
              </motion.h1>
              
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
              >
                Join the Devdhara Software Solutions Partner Network. Whether you're an individual consultant or a global agency, we provide the technical firepower you need to succeed.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className="bg-blue text-white hover:bg-blue/90 rounded-full px-10 h-14 font-bold text-lg shadow-xl shadow-blue/20"
                >
                  Apply to Partner
                </Button>
                <Link to="/partners/programs">
                  <Button 
                    variant="outline"
                    className="border-blue/20 text-blue hover:bg-blue/5 rounded-full px-10 h-14 font-bold text-lg"
                  >
                    View Programs
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div variants={fadeIn} className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80&fit=crop"
                  alt="Partnership"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[32px] shadow-2xl border border-blue/5 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue">Win-Win</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Collaboration Model</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display">
              Built on <span className="text-blue">Trust & Results</span>
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
            ].map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue/5 p-10 rounded-[40px] border border-blue/10 relative group hover:bg-blue/10 transition-colors"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-blue/40 shadow-lg border border-blue/5">
                    <FaUserCircle className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{story.author}</div>
                    <div className="text-xs font-bold text-blue uppercase tracking-widest">{story.role}</div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "{story.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 px-6 bg-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">The Journey</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display">
              Get Started in <span className="text-blue">4 Simple Steps</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Application", desc: "Submit your details through our simple partnership form." },
              { title: "Onboarding", desc: "A brief call with our partner manager to align on goals." },
              { title: "Activation", desc: "Gain access to your partner portal and marketing assets." },
              { title: "Growth", desc: "Start collaborating and earning as we deliver exceptional software." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-blue/10 mb-4">0{i + 1}</div>
                <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-blue/5 -z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-28 px-6 bg-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Choose Your Path</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display">
              Designed for <span className="text-blue">Every Collaborator</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {partnerTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] p-10 border border-blue/5 shadow-xl hover:border-gold/30 transition-all duration-300 group h-full flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${type.color}`}>
                  <type.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">{type.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {type.desc}
                </p>
                <ul className="space-y-4">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue shrink-0" />
                      <span className="text-sm font-semibold text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-28 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">The Devdhara Software Solutions Advantage</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight text-foreground font-display mb-10">
                Why Industry Leaders <span className="text-blue">Partner With Us</span>
              </h3>
              <div className="space-y-10">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue/5 flex items-center justify-center text-blue shrink-0">
                      <benefit.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue rounded-[40px] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="text-4xl font-black font-display mb-6">Ready to start?</div>
                  <p className="text-lg text-white/80 mb-10 leading-relaxed">
                    Our partnership team reviews applications within 24 hours. Let's discuss how we can build something extraordinary together.
                  </p>
                  <Button 
                    onClick={() => setAuditOpen(true)}
                    className="bg-gold text-blue hover:bg-gold/90 rounded-full px-10 h-14 font-black text-lg shadow-2xl"
                  >
                    Begin Your Partnership <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default Partners;
