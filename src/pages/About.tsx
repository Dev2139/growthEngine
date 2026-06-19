import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import CTASection from "@/components/sections/CTASection";
import { useState } from "react";
import { Award, Zap, CheckCircle2, Code2, Monitor, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  const values = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description:
        "We build systems with long-term scalability in mind. Every line of code is written to be maintainable, secure, and high-performance.",
      color: "bg-gold/10 text-gold-dark"
    },
    {
      icon: Monitor,
      title: "User-Centric Design",
      description:
        "We believe technology should be intuitive. Our UI/UX process ensures that your software is as easy to use as it is powerful.",
      color: "bg-gold/10 text-gold-dark"
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description:
        "Using modern frameworks like React and Next.js, we ship production-ready applications faster than traditional agencies.",
      color: "bg-gold/10 text-gold-dark"
    },
    {
      icon: Cpu,
      title: "Custom IT Solutions",
      description:
        "We don't believe in one-size-fits-all. We build bespoke software tailored to your specific business challenges and scale.",
      color: "bg-gold/10 text-gold-dark"
    },
  ];

  const team = [
    { 
      name: "Dev Patel", 
      role: "Managing Director", 
      subRole: "Fullstack Developer",
    },
    { 
      name: "Mahir Patel", 
      role: "Lead Developer", 
      subRole: "Fullstack Engineer",
    },
    { 
      name: "Mohit Soni", 
      role: "Tech Lead", 
      subRole: "UI/UX Specialist",
    },
    { 
      name: "Harshit Tiwari", 
      role: "Backend Lead", 
      subRole: "System Architect",
    },
    { 
      name: "Jaiv Patel", 
      role: "Mobile Lead", 
      subRole: "Flutter Specialist",
    },
    { 
      name: "Manthan Bharwad", 
      role: "SEO Specialist", 
      subRole: "Digital Strategist",
    },
    { 
      name: "Tanish Parmar", 
      role: "Project Manager", 
      subRole: "Agile Specialist",
    },
    { 
      name: "Mahiraj Gohil", 
      role: "DevOps Engineer", 
      subRole: "Cloud Architect",
    },
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
      <section className="relative pt-44 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.04] px-4 py-2 rounded-full mb-8 text-black/60 shadow-sm backdrop-blur-sm">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Our Story</span>
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-display leading-[1.1] text-black"
              >
                Engineering the <span className="font-serif-italic italic text-gold font-light">future</span> of digital solutions.
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-base md:text-lg text-black/60 max-w-2xl mb-10 leading-relaxed font-medium"
              >
                DevDhara Technologies was founded with a single mission: to bridge the gap between complex business challenges and elegant technical execution.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md active:scale-95 border border-black/10 shadow-lg"
                >
                  Start Your Project
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
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&q=80&fit=crop"
                    alt="DevDhara Engineering Studio"
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-[28px] shadow-xl border border-black/[0.04] hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gold/15 flex items-center justify-center text-gold-dark">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-black">Top Rated</div>
                    <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/40">Engineering Agency</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-28 px-6 md:px-12 border-t border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-black/[0.06] bg-[#F8F8F6] p-2">
              <div className="rounded-[32px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=80&fit=crop"
                  alt="Technical Excellence"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-xl p-8 rounded-[28px] shadow-xl border border-black/[0.04]">
              <div className="text-4xl font-black text-black font-display mb-1">Elite</div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/40">Technical Standards</div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-dark mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black font-display mb-8 leading-[1.15]">
              Built on code. <span className="font-serif-italic italic text-gold font-light">Driven by results.</span>
            </h3>
            <div className="space-y-6 text-base text-black/60 leading-relaxed font-medium">
              <p>
                At DevDhara Technologies, we provide businesses with the technical foundation they need to scale. In an era where software is the backbone of every industry, we focus on building tools that are reliable, secure, and beautiful.
              </p>
              <p>
                When you work with us, you're partnering with a team that understands the product lifecycle. We don't just write code; we help you design the strategy, the user experience, and the infrastructure that will carry your business forward.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Technical Mastery",
                "Design Thinking",
                "Scalable Systems",
                "Direct Partnership",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-dark" />
                  </div>
                  <span className="text-sm font-bold text-black/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 px-6 md:px-12 border-t border-black/[0.03]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-dark mb-4">Our Talent</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tight text-black font-display mb-6">
                Meet the <span className="font-serif-italic italic text-gold font-light">experts</span>
              </h3>
              <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto leading-relaxed font-medium">
                A diverse group of engineers and designers committed to building the next generation of digital products.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => {
              const initials = member.name.split(" ").map(n => n[0]).join("");
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative bg-white/40 backdrop-blur-sm rounded-[32px] p-8 text-center border border-black/[0.04] hover:bg-white hover:border-black/[0.08] hover:shadow-[0_16px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col items-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.01] to-black/[0.01] opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-full bg-[#F8F8F6] border border-black/[0.04] p-1 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                        <div className={`w-full h-full rounded-full bg-gradient-to-tr ${getAvatarGradient(member.name)} flex items-center justify-center text-white font-display text-xl font-bold shadow-inner`}>
                          {initials}
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gold rounded-full flex items-center justify-center text-white shadow-md border-2 border-white transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                        <Zap className="w-3 h-3 fill-white" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-lg font-bold text-black mb-1 group-hover:text-gold-dark transition-colors">{member.name}</h4>
                      <div className="text-[10px] font-extrabold text-gold-dark uppercase tracking-widest mb-1">{member.role}</div>
                      <div className="text-[10px] font-bold text-black/40 uppercase tracking-wider">{member.subRole}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28 px-6 md:px-12 border-t border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-dark mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-black font-display">
              Built on <span className="font-serif-italic italic text-gold font-light">core principles</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-8 rounded-[32px] bg-white/50 backdrop-blur-sm border border-black/[0.04] hover:bg-white hover:border-gold/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.02)] transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${value.color}`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-black mb-3">{value.title}</h4>
                <p className="text-xs text-black/60 leading-relaxed font-medium">
                  {value.description}
                </p>
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

export default About;
