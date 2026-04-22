import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onOpenAudit: () => void;
}

const CTASection = ({ onOpenAudit }: CTASectionProps) => {
  return (
    <section className="section-border py-28 px-6">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-2xl mx-auto"
      >
        <motion.p
          variants={fadeIn}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5"
        >
          Get Started
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-5"
        >
          Ready to dominate local search?
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-base text-muted-foreground mb-8 leading-relaxed"
        >
          Book a free growth strategy call. I'll audit your local presence and show you exactly
          where the opportunities are — no commitment required.
        </motion.p>
        <motion.div variants={fadeIn}>
          <Button
            size="lg"
            onClick={onOpenAudit}
            className="h-12 px-7 text-sm rounded-md border-0 btn-gold gap-2"
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
