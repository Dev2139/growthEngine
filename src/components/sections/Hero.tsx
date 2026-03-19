import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";


interface HeroProps {
  onOpenAudit: () => void;
}



const Hero = ({ onOpenAudit }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
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
          Enterprise App Development
        </motion.span>

        <motion.h1
          variants={fadeIn}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 text-balance leading-[0.9] text-foreground"
        >
          Build Tomorrow's Apps{" "}
          <span className="text-muted-foreground">Today.</span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed"
        >
          Enterprise-grade mobile and web applications built with cutting-edge
          technology, scalable architecture, and agile development practices.
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
