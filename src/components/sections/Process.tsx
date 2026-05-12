import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Search, Map, Code2, Rocket, Zap, Heart, Shield, Globe } from "lucide-react";

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We dive deep into your business goals, target audience, and market challenges to build a data-driven roadmap.",
    icon: Search,
    color: "from-blue/20 to-blue/5",
    iconColor: "text-blue"
  },
  {
    title: "Planning & Architecture",
    desc: "Strategic UI/UX design and scalable system architecture to ensure a solid and future-proof foundation.",
    icon: Map,
    color: "from-gold/20 to-gold/5",
    iconColor: "text-gold"
  },
  {
    title: "Agile Engineering",
    desc: "Rapid, clean-code execution using modern frameworks like React and Next.js for high-performance apps.",
    icon: Code2,
    color: "from-blue/20 to-blue/5",
    iconColor: "text-blue"
  },
  {
    title: "Launch & Optimization",
    desc: "Seamless deployment with continuous monitoring and 24/7 technical support to ensure peak performance.",
    icon: Rocket,
    color: "from-gold/20 to-gold/5",
    iconColor: "text-gold"
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Our Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight text-foreground font-display mb-8">
              How We Build <span className="text-blue">The Exceptional</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our proven engineering process ensures that your vision is transformed into a high-performance digital reality.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-blue/5 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue via-gold to-blue -translate-x-1/2 hidden md:block z-10"
          />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Step Content */}
                <div className={`flex-1 w-full ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-xl border border-blue/5 mb-6 md:hidden`}>
                     <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>
                  <h4 className="text-3xl font-black text-foreground mb-4 font-display">
                    <span className="text-blue/10 mr-4 md:hidden">0{i + 1}</span>
                    {step.title}
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg ml-auto mr-auto md:ml-0 md:mr-0">
                    {step.desc}
                  </p>
                </div>

                {/* Center Circle */}
                <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 hidden md:block">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 rounded-[24px] bg-white shadow-2xl border-4 border-white flex items-center justify-center group relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                    <step.icon className={`w-7 h-7 ${step.iconColor} relative z-10`} />
                  </motion.div>
                </div>

                {/* Number for desktop */}
                <div className={`flex-1 hidden md:block ${i % 2 === 0 ? "text-left" : "text-right"}`}>
                  <div className="text-[120px] font-black text-blue/[0.03] leading-none select-none">
                    0{i + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
