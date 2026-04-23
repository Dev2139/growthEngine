import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Search, Map, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    desc: "We dive deep into your business goals, target audience, and market challenges.",
    icon: Search,
    color: "bg-blue/10 text-blue"
  },
  {
    title: "Planning",
    desc: "Strategic roadmap and architecture design to ensure a solid technical foundation.",
    icon: Map,
    color: "bg-gold/10 text-gold"
  },
  {
    title: "Development",
    desc: "Agile engineering using modern tech stacks for high-performance execution.",
    icon: Code2,
    color: "bg-blue/10 text-blue"
  },
  {
    title: "Launch & Support",
    desc: "Seamless deployment followed by 24/7 monitoring and technical maintenance.",
    icon: Rocket,
    color: "bg-gold/10 text-gold"
  }
];

const Process = () => {
  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeIn} className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Our Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display mb-6">
              How We Build <span className="text-blue">Greatness</span>
            </h3>
          </motion.div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue/5 -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-blue/5 transition-transform duration-500 group-hover:rotate-[360deg] ${step.color} bg-white border border-blue/5`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className="absolute top-8 -right-6 text-6xl font-black text-blue/5 hidden lg:block">
                    0{i + 1}
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">{step.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm px-4">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
