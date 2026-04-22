import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "100+", label: "Businesses Scaled" },
  { value: "3×", label: "Average Lead Growth" },
  { value: "#1", label: "Local Rankings" },
  { value: "98%", label: "Client Retention" },
];

const Trust = () => {
  return (
    <section className="section-border py-20 px-6">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto"
      >
        <motion.p
          variants={fadeIn}
          className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-12"
        >
          Trusted by businesses across the country
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeIn} className="text-center">
              <div className="text-4xl font-semibold tracking-tight text-gold tabular-nums mb-1.5">
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
