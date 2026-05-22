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
    <section ref={containerRef} className="py-32 px-6 bg-[#F8F8F6] overflow-hidden relative border-t border-black/[0.02]">
      {/* Background glow atmospheric blurs */}
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[110px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-[#92680A] font-extrabold mb-4">Our Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight text-black font-display mb-8">
              How we build <span className="font-serif-italic font-normal text-[#92680A] lowercase italic">the exceptional</span>
            </h3>
            <p className="text-base text-black/50 max-w-2xl mx-auto leading-relaxed font-medium">
              Our proven engineering process ensures that your vision is transformed into a high-performance digital reality.
            </p>
          </motion.div>
        </div>

        {/* Split Layout: Timeline (left) and Sticky Visual Card (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7 relative pl-8 md:pl-0">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-black/5" />
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#92680A] via-black to-[#92680A] z-10"
            />

            <div className="space-y-16">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex gap-8 md:gap-12 pl-10 md:pl-24"
                >
                  {/* Left Circle dot marker on line */}
                  <div className="absolute left-6 md:left-12 top-2 -translate-x-1/2 z-20">
                    <div className="w-4 h-4 rounded-full bg-[#F8F8F6] border-2 border-black flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <span className="text-[10px] font-extrabold text-[#92680A] uppercase tracking-widest block mb-2 font-mono">
                      PHASE 0{i + 1}
                    </span>
                    <h4 className="text-2xl font-bold text-black mb-3 font-display">
                      {step.title}
                    </h4>
                    <p className="text-sm text-black/50 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Visual Showcase Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 hidden lg:block">
            <div className="relative aspect-square w-full max-w-[420px] rounded-[36px] glass-premium p-8 border border-black/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-hidden">
              {/* Soft interior warm lights */}
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-gold/10 rounded-full blur-[60px] -z-10 pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-black/[0.04] pb-4 mb-6">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-black/60 font-mono">ACTIVE_PIPELINE_FLOW</span>
                <span className="text-[10px] font-bold text-black/40 font-mono">STATE: OK</span>
              </div>

              {/* Graphic Flow Layout representing steps */}
              <div className="flex-1 flex flex-col justify-center space-y-5 my-4">
                {steps.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/60 border border-black/[0.01] p-3 rounded-2xl shadow-sm">
                    <div className="w-8 h-8 rounded-xl bg-black text-[#F8F8F6] flex items-center justify-center shadow-sm">
                      <s.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-extrabold uppercase tracking-wider text-black/40 leading-none mb-1">
                        PHASE 0{idx + 1}
                      </div>
                      <div className="text-xs font-bold text-black uppercase tracking-wider leading-none">
                        {s.title.split(" & ")[0]}
                      </div>
                    </div>
                    <div className="ml-auto w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  </div>
                ))}
              </div>

              {/* Bottom Code Terminal panel */}
              <div className="border-t border-black/[0.04] pt-4 mt-6">
                <pre className="text-[10px] font-mono text-black/60 bg-black/[0.02] p-3 rounded-xl overflow-x-auto leading-normal">
                  {`{\n  "pipeline": "DevDhara Engine v2.4",\n  "status": "ready_to_scale",\n  "delivery": "edge_global"\n}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
