import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase, 
  FaCloud, 
  FaMobileAlt,
  FaFigma,
  FaGithub,
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
  { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
  { name: "Flutter", icon: SiFlutter, color: "text-[#02569B]" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
  { name: "Postgres", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "AWS", icon: FaAws, color: "text-[#FF9900]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]" },
];

const TechStack = () => {
  return (
    <section className="py-24 bg-blue/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Our Ecosystem</h2>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display">
          Modern <span className="text-blue">Tech Stack</span>
        </h3>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-blue/5 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-blue/5 to-transparent z-10" />

        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap px-4"
          style={{ width: "max-content" }}
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-blue/5 shadow-xl shadow-blue/5 min-w-[160px] transition-all duration-300 hover:border-blue/30 hover:-translate-y-2"
            >
              <tech.icon className={`w-12 h-12 mb-4 transition-transform group-hover:scale-110 ${tech.color}`} />
              <span className="text-sm font-bold text-foreground/80">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
