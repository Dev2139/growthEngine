import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { TrendingUp, Users, Zap } from "lucide-react";

const philos = [
  {
    icon: TrendingUp,
    title: "Your Growth is Our Growth",
    description: "We don't charge for time spent—we charge when you hit your goals. When you scale, we scale. Our success is directly tied to yours.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We're not vendors. We're extensions of your team. We celebrate your wins, troubleshoot your challenges, and stay invested in your long-term success.",
  },
  {
    icon: Zap,
    title: "Aligned Incentives",
    description: "No fluff, no busy work. Every dollar we spend and every hour we work directly impacts your bottom line. That's how partnerships should work.",
  },
];

const Partnership = () => {
  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.p
            variants={fadeIn}
            className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-4"
          >
            Our Philosophy
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-semibold tracking-tighter text-center mb-6 text-balance text-foreground"
          >
            Your Growth is Our Growth
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-lg text-muted-foreground text-center max-w-2xl mx-auto text-pretty"
          >
            We don't believe in the traditional agency model. We believe in building real partnerships where both sides win together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {philos.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                variants={fadeIn}
                className="p-8 rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 border border-primary/30"
        >
          <p className="text-center text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">This is how we operate:</span> We treat every client like a partner, not a transaction. Your revenue goals become our goals. Your challenges become our challenges. When you succeed, we succeed. It's that simple.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
