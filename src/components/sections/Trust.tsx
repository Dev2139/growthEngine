import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Users, Briefcase, Award, Headphones } from "lucide-react";

const stats = [
  { value: "20+", label: "Happy Clients", icon: Users },
  { value: "25+", label: "Projects Completed", icon: Briefcase },
  { value: "2+", label: "Years Experience", icon: Award },
  { value: "24/7", label: "Support Availability", icon: Headphones },
];

const Trust = () => {
  return (
    <section className="py-28 px-6 bg-[#F8F8F6] relative overflow-hidden border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeIn} className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display max-w-2xl mx-auto leading-[1.15]">
              The results that <span className="font-serif-italic font-light text-gold text-5xl">build trust</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="card-premium-modern p-10 rounded-[32px] flex flex-col items-center text-center relative group overflow-hidden"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute -right-12 -top-12 w-28 h-28 bg-gold/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="w-14 h-14 rounded-2xl bg-gold/5 text-gold flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-gold group-hover:text-zinc-950">
                  <stat.icon className="w-6 h-6" />
                </div>
                
                <div className="text-5xl font-black text-foreground tabular-nums mb-2 font-display tracking-tight">
                  {stat.value}
                </div>
                
                <div className="text-[11px] font-bold text-foreground/40 uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
