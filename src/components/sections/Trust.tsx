import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "100+", label: "Businesses Scaled" },
  { value: "3X", label: "Leads in 60 Days" },
  { value: "#1", label: "Local Rankings Achieved" },
  { value: "98%", label: "Client Retention" },
];

const Trust = () => {
  return (
    <section className="py-24 px-6 border-t border-border/50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.p
          variants={fadeIn}
          className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-16"
        >
          Trusted by businesses across the country
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground tabular-nums mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Trust;
