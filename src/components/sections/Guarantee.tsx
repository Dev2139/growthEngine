import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { TrendingUp, User, Zap } from "lucide-react";

const philos = [
  {
    icon: TrendingUp,
    title: "Your Growth is My Growth",
    desc: "I am directly invested in your results. When your business scales, my reputation as a specialist scales with it.",
  },
  {
    icon: User,
    title: "Direct Partnership",
    desc: "I operate as an extension of your business — not a vendor. Your challenges are my challenges, and I handle them personally.",
  },
  {
    icon: Zap,
    title: "Aligned Incentives",
    desc: "No fluff, no busy-work. Every decision I make is with your bottom line as the only benchmark.",
  },
];

const Guarantee = () => {
  return (
    <section className="section-border py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.p
            variants={fadeIn}
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
          >
            My Philosophy
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-lg"
          >
            I don't believe in the traditional agency model.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {philos.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                variants={fadeIn}
                className="p-7 rounded-xl bg-card card-gold"
              >
                <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center mb-5">
                  <Icon className="w-4 h-4 text-gold" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-8 p-7 rounded-xl bg-card"
          style={{ border: "1px solid rgba(200,148,31,0.15)" }}
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">How I operate:</span>{" "}
            I treat every client as a long-term partner. Your revenue goals become my goals.
            You work directly with the founder — no junior account managers, just direct strategy and results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
