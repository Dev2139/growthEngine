import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import { useState } from "react";
import { Award, Users, Zap, Target, CheckCircle2, Search, BarChart3, Globe, Code2, Monitor, Cpu, Layout } from "lucide-react";

const About = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  const values = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description:
        "I build systems with long-term scalability in mind. Every line of code is written to be maintainable, secure, and high-performance.",
    },
    {
      icon: Monitor,
      title: "User-Centric Design",
      description:
        "I believe technology should be intuitive. My UI/UX process ensures that your software is as easy to use as it is powerful.",
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description:
        "Using modern frameworks like React and Next.js, I ship production-ready applications faster than traditional agencies.",
    },
    {
      icon: Cpu,
      title: "Custom IT Solutions",
      description:
        "I don't believe in one-size-fits-all. I build bespoke software tailored to your specific business challenges and scale.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80&fit=crop"
            alt="Modern Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center lg:text-left">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeIn} className="text-xs uppercase tracking-[0.25em] text-gold mb-6 font-medium">
              The Founder
            </motion.p>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-balance"
            >
              Engineering The Future of{" "}
              <span className="text-gold-gradient font-display italic">IT Solutions.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              I am Dev Patel, a full-stack engineer and product designer. I help businesses build robust software, 
              scalable web applications, and intuitive digital experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Profile Section - Detailed Bio */}
      <section className="section-border py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden card-gold aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop"
                alt="Dev Patel"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-gold/30 p-6 rounded-xl shadow-2xl backdrop-blur-md">
              <div className="text-4xl font-bold text-gold tabular-nums">5+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Years in Engineering</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-semibold tracking-tighter mb-8 leading-tight">
              Obsessed with Code.
              <br />
              <span className="text-muted-foreground">Driven by Performance.</span>
            </h2>
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
              <p>
                My name is Dev Patel, and I built DevDhara to provide businesses with the technical foundation they need to scale. In an era where software is the backbone of every industry, I focus on building tools that are reliable, secure, and beautiful.
              </p>
              <p>
                Over the last 5 years, I've mastered the art of full-stack engineering, from architecting complex backends to crafting pixel-perfect frontends. I believe that good software should solve problems, not create them.
              </p>
              <p>
                When you work with me, you're partnering with a developer who understands the product lifecycle. I don't just write code; I help you design the strategy, the user experience, and the infrastructure that will carry your business forward.
              </p>
              <p>
                Whether it's a mobile app, a web platform, or a custom enterprise tool, my goal is to deliver a product that exceeds expectations and provides genuine business value from day one.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { label: "Technical Mastery", icon: CheckCircle2 },
                { label: "Design Thinking", icon: CheckCircle2 },
                { label: "Scalable Systems", icon: CheckCircle2 },
                { label: "Direct Partnership", icon: CheckCircle2 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground font-medium">
                  <item.icon className="w-4 h-4 text-gold" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-border py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3 font-medium">The IT Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Why Choose DevDhara.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-xl bg-card card-gold hover:translate-y-[-5px] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills / Expertise Strip */}
      <section className="py-24 px-6 section-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Code2, title: "Full-Stack Dev", desc: "Building end-to-end applications with React, Next.js, and Node.js." },
              { icon: Globe, title: "Mobile Apps", desc: "Native and cross-platform mobile solutions for iOS and Android." },
              { icon: Layout, title: "UI/UX Design", desc: "Creating intuitive interfaces that focus on user engagement." },
            ].map((skill, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <skill.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{skill.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-border py-24 px-6 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold tracking-tighter mb-6">
              Let's Build Your Digital Future.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              When you hire DevDhara, you're partnering with an expert who cares about your product's success. 
              Let's discuss your next project and build something extraordinary.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setAuditOpen(true)}
                className="h-12 px-8 text-sm rounded-md btn-gold"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
};

export default About;
