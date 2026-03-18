import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Search, MapPin, Zap, Star, Globe, Smartphone } from "lucide-react";

const services = [
  { icon: Search, title: "GBP Optimization", desc: "Claim the 'Map Pack' with precision-tuned profiles that put you ahead of every competitor." },
  { icon: MapPin, title: "Local SEO Ranking", desc: "Rank for the keywords that actually drive phone calls and foot traffic to your door." },
  { icon: Zap, title: "Lead Generation System", desc: "Automated funnels that turn anonymous clicks into booked appointments." },
  { icon: Star, title: "Review Management", desc: "Generate and showcase 5-star social proof on autopilot across every platform." },
  { icon: Globe, title: "Web Development", desc: "High-performance sites engineered for conversion, not just aesthetics." },
  { icon: Smartphone, title: "App Development", desc: "Custom tools to scale your business operations and delight your customers." },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-muted-foreground mb-4 text-center">
            What We Do
          </motion.p>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-semibold tracking-tighter text-center mb-16 text-balance text-foreground">
            Everything You Need to Dominate Local.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 border border-border/50 rounded-2xl overflow-hidden"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="group p-10 bg-card hover:bg-secondary/50 transition-colors duration-300 cursor-default"
            >
              <div className="w-10 h-10 mb-6 rounded-xl bg-secondary border border-border flex items-center justify-center group-hover:border-muted-foreground/30 transition-colors duration-300">
                <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium mb-3 tracking-tight text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
