import { motion } from "framer-motion";
import { 
   FaReact, 
   FaNodeJs, 
   FaPython, 
   FaFigma, 
   FaAws 
} from "react-icons/fa";
import { 
   SiNextdotjs, 
   SiTailwindcss, 
   SiTypescript, 
   SiSupabase, 
   SiFirebase,
   SiFlutter,
   SiPostgresql
} from "react-icons/si";

const technologies = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: FaPython },
  { name: "Flutter", icon: SiFlutter },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Supabase", icon: SiSupabase },
  { name: "Postgres", icon: SiPostgresql },
  { name: "AWS", icon: FaAws },
  { name: "Firebase", icon: SiFirebase },
  { name: "Figma", icon: FaFigma },
];

const TechStack = () => {
  return (
    <section className="py-28 bg-[#F8F8F6] overflow-hidden relative border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Our Ecosystem</span>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display leading-[1.15]">
            Modern <span className="font-serif-italic font-light text-gold text-5xl">tech stack</span>
          </h3>
        </motion.div>
      </div>

      <div className="relative z-10">
        {/* Soft edge masking for fading */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#F8F8F6] to-transparent z-15 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#F8F8F6] to-transparent z-15 pointer-events-none" />

        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap px-4"
          style={{ width: "max-content" }}
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center p-8 rounded-3xl card-premium-modern min-w-[160px] transition-all duration-300 hover:border-gold/20"
            >
              <tech.icon className="w-10 h-10 mb-4 text-foreground/40 group-hover:text-gold transition-colors duration-300 group-hover:scale-105" />
              <span className="text-xs font-bold text-foreground/60 group-hover:text-foreground tracking-tight transition-colors duration-300">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
