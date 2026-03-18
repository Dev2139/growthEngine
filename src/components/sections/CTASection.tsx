import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onOpenAudit: () => void;
}

const CTASection = ({ onOpenAudit }: CTASectionProps) => {
  return (
    <section className="py-32 px-6 border-t border-border/50">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-balance text-foreground"
        >
          Ready to Dominate Local Search?
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty"
        >
          Book your free growth strategy call. We'll audit your local presence
          and show you exactly where the opportunities are.
        </motion.p>
        <motion.div variants={fadeIn}>
          <Button
            size="lg"
            onClick={onOpenAudit}
            className="h-14 px-8 text-base rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors active:scale-[0.97] gap-2"
          >
            Book Your Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
