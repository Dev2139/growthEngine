import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import {
  Search,
  Building2,
  TrendingUp,
  Zap,
  Users,
  Target,
} from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
}

// Network nodes with business-related icons
const networkNodes = [
  { id: 1, icon: Search, label: "Google", x: 15, y: 25 },
  { id: 2, icon: Building2, label: "Business", x: 85, y: 30 },
  { id: 3, icon: TrendingUp, label: "Growth", x: 50, y: 10 },
  { id: 4, icon: Zap, label: "Leads", x: 20, y: 75 },
  { id: 5, icon: Users, label: "Customers", x: 80, y: 70 },
  { id: 6, icon: Target, label: "Results", x: 50, y: 85 },
];

// Animated background elements
const AnimatedNodes = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated background gradients */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-3xl"
      />

      {/* Animated connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop
              offset="50%"
              stopColor="hsl(var(--accent))"
              stopOpacity="0.2"
            />
            <stop
              offset="100%"
              stopColor="hsl(var(--primary))"
              stopOpacity="0.4"
            />
          </linearGradient>
        </defs>

        {/* Lines connecting nodes */}
        <motion.line
          x1="15%"
          y1="25%"
          x2="50%"
          y2="10%"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.line
          x1="15%"
          y1="25%"
          x2="85%"
          y2="30%"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.line
          x1="85%"
          y1="30%"
          x2="80%"
          y2="70%"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.line
          x1="50%"
          y1="10%"
          x2="80%"
          y2="70%"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4.8, repeat: Infinity, delay: 0.3 }}
        />
        <motion.line
          x1="50%"
          y1="85%"
          x2="80%"
          y2="70%"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5.2, repeat: Infinity, delay: 0.7 }}
        />
        <motion.line
          x1="20%"
          y1="75%"
          x2="50%"
          y2="85%"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4.3, repeat: Infinity, delay: 0.2 }}
        />
        <motion.line
          x1="15%"
          y1="25%"
          x2="20%"
          y2="75%"
          stroke="url(#connectionGradient)"
          strokeWidth="1.5"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5.5, repeat: Infinity, delay: 1.2 }}
        />
      </svg>

      {/* Network nodes with icons */}
      {networkNodes.map((node) => {
        const IconComponent = node.icon;
        return (
          <motion.div
            key={node.id}
            style={{
              position: "absolute",
              left: node.x + "%",
              top: node.y + "%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 6 + node.id,
              repeat: Infinity,
              ease: "ease-in-out",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(var(--primary-rgb), 0.2)",
                  "0 0 40px rgba(var(--primary-rgb), 0.4)",
                  "0 0 20px rgba(var(--primary-rgb), 0.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "ease-in-out",
              }}
              className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary/60 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm hover:border-primary transition-colors"
            >
              <IconComponent className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </motion.div>
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "ease-in-out",
                delay: 0.5,
              }}
              className="text-xs font-semibold text-center text-primary mt-2 whitespace-nowrap"
            >
              {node.label}
            </motion.p>
          </motion.div>
        );
      })}

      <div className="absolute inset-0 z-0 grid-pattern pointer-events-none" />
    </div>
  );
};

const Hero = ({ onOpenAudit }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      <AnimatedNodes />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-5xl text-center"
      >
        <motion.span
          variants={fadeIn}
          className="inline-block px-4 py-1.5 mb-8 text-xs font-medium tracking-widest uppercase border border-border rounded-full bg-secondary text-muted-foreground"
        >
          Google Business Profile Experts
        </motion.span>

        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 text-balance leading-[0.9] text-foreground"
        >
          Turn Google Searches Into{" "}
          <span className="text-muted-foreground">Paying Customers.</span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed"
        >
          We optimize your local presence to dominate search results,
          automate your lead flow, and manage your reputation—all in one system.
        </motion.p>

        <motion.div
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={onOpenAudit}
            className="h-14 px-8 text-base rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors active:scale-[0.97]"
          >
            Get Free Audit
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
            className="h-14 px-8 text-base rounded-full border-border bg-transparent hover:bg-secondary transition-all active:scale-[0.97] text-foreground"
          >
            View Results
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
