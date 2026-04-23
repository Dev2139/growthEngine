import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";
import { Award, Users, Zap, Target, CheckCircle2, Search, BarChart3, Globe, Code2, Monitor, Cpu, Layout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  const values = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description:
        "We build systems with long-term scalability in mind. Every line of code is written to be maintainable, secure, and high-performance.",
      color: "bg-blue/5 text-blue"
    },
    {
      icon: Monitor,
      title: "User-Centric Design",
      description:
        "We believe technology should be intuitive. Our UI/UX process ensures that your software is as easy to use as it is powerful.",
      color: "bg-gold/10 text-gold"
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description:
        "Using modern frameworks like React and Next.js, we ship production-ready applications faster than traditional agencies.",
      color: "bg-blue/5 text-blue"
    },
    {
      icon: Cpu,
      title: "Custom IT Solutions",
      description:
        "We don't believe in one-size-fits-all. We build bespoke software tailored to your specific business challenges and scale.",
      color: "bg-gold/10 text-gold"
    },
  ];

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
            className="text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-blue/5 px-4 py-2 rounded-full mb-8 text-blue">
                <span className="text-xs font-bold uppercase tracking-widest">Our Story</span>
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-display leading-[1.1]"
              >
                Engineering the <span className="text-blue">Future</span> of Digital Solutions.
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
              >
                DevDhara Software Solutions was founded with a single mission: to bridge the gap between complex business challenges and elegant technical execution.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className="bg-blue text-white hover:bg-blue/90 rounded-full px-10 h-14 font-bold text-lg shadow-xl shadow-blue/20"
                >
                  Start Your Project
                </Button>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?w=1000&q=80&fit=crop"
                  alt="Modern Office"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-blue/5 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue">Top Rated</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Engineering Agency</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-28 px-6 bg-blue/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop"
                alt="Dev Patel"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-2xl border border-gold/10">
              <div className="text-5xl font-black text-blue font-display mb-1">5+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Years of Experience</div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Founder's Vision</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display mb-8">
              Obsessed with Code. <span className="text-blue">Driven by Results.</span>
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My name is Dev Patel, and I built DevDhara Software Solutions to provide businesses with the technical foundation they need to scale. In an era where software is the backbone of every industry, I focus on building tools that are reliable, secure, and beautiful.
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
                  <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-blue" />
                  </div>
                  <span className="text-base font-bold text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display">
              Built on <span className="text-blue">Core Principles</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[40px] bg-white border border-blue/5 shadow-xl shadow-blue/5 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${value.color}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80&fit=crop" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white font-display mb-8">
            Let's Build Your <span className="text-gold">Digital Future.</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Ready to scale your business with premium software engineering? Let's discuss your next project and build something extraordinary together.
          </p>
          <Button 
            onClick={() => setAuditOpen(true)}
            className="bg-gold text-blue hover:bg-gold/90 rounded-full px-12 h-16 font-black text-xl shadow-2xl flex gap-2 mx-auto"
          >
            Start Project <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default About;
