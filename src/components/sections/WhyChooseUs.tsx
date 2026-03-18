import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Target, BarChart3, Shield, Cpu } from "lucide-react";

const reasons = [
  { icon: Target, title: "Data-Driven Growth", desc: "Every decision is backed by real analytics, not guesswork." },
  { icon: BarChart3, title: "Local Domination Strategy", desc: "We don't aim for visibility — we aim for market control." },
  { icon: Shield, title: "Real ROI Focus", desc: "Our work pays for itself. If it doesn't move the needle, we don't do it." },
  { icon: Cpu, title: "Full-Stack Systems", desc: "From search to sale, we build the complete growth engine." },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-32 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-muted-foreground mb-4 text-center">
            Why Us
          </motion.p>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-semibold tracking-tighter text-center mb-20 text-balance text-foreground">
            No Fluff. Just Growth.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="flex gap-6 p-8 rounded-2xl bg-card card-depth"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-secondary border border-border flex items-center justify-center">
                <r.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-medium tracking-tight mb-2 text-foreground">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
