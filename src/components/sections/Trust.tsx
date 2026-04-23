import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Users, Briefcase, Award, Headphones } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "150+", label: "Projects Completed", icon: Briefcase },
  { value: "5+", label: "Years Experience", icon: Award },
  { value: "24/7", label: "Support Availability", icon: Headphones },
];

const Trust = () => {
  return (
    <section className="py-24 px-6 bg-blue/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground font-display">
              The Results That Build Trust
            </h2>
            <div className="w-20 h-1.5 bg-gold mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-white p-8 rounded-[32px] shadow-xl shadow-blue/5 border border-blue/5 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue/5 flex items-center justify-center mb-6 group-hover:bg-blue group-hover:text-white transition-colors">
                  <stat.icon className="w-8 h-8 text-blue group-hover:text-white" />
                </div>
                <div className="text-4xl font-black text-blue tabular-nums mb-2 font-display">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
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
