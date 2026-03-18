import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ClipboardCheck, Settings, TrendingUp, PhoneCall } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, step: "01", title: "Audit", desc: "We analyze your current local presence, competitors, and opportunities." },
  { icon: Settings, step: "02", title: "Optimization", desc: "Precision-tune every signal Google uses to rank local businesses." },
  { icon: TrendingUp, step: "03", title: "Ranking", desc: "Climb to the top of local search results and the coveted Map Pack." },
  { icon: PhoneCall, step: "04", title: "Lead Growth", desc: "Watch your phone ring as qualified leads flow in on autopilot." },
];

const HowItWorks = () => {
  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-muted-foreground mb-4 text-center">
            The Process
          </motion.p>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-semibold tracking-tighter text-center mb-20 text-balance text-foreground">
            From Invisible to Inevitable.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((s, i) => (
            <motion.div key={i} variants={fadeIn} className="relative">
              <div className="text-6xl font-bold tracking-tighter text-border/80 mb-4">{s.step}</div>
              <div className="w-10 h-10 mb-4 rounded-xl bg-secondary border border-border flex items-center justify-center">
                <s.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-2 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
