import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenAudit: () => void;
}

// Animated background elements with web-like structure
const AnimatedBackground = () => {
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

      <div className="absolute inset-0 z-0 grid-pattern pointer-events-none" />
    </div>
  );
};

const Hero = ({ onOpenAudit }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      <AnimatedBackground />

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
          Digital Growth & Visibility
        </motion.span>

        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 text-balance leading-[0.9] text-foreground"
        >
          Rank Higher.{" "}
          <span className="text-muted-foreground">Grow Faster.</span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed"
        >
          We strategically help businesses rank higher on Google and other platforms
          through data-driven optimization and sustained growth systems.
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
            Start Your Project
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
            className="h-14 px-8 text-base rounded-full border-border bg-transparent hover:bg-secondary transition-all active:scale-[0.97] text-foreground"
          >
            See Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
