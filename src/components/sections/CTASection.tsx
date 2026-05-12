import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

interface CTASectionProps {
  onOpenAudit: () => void;
}

const CTASection = ({ onOpenAudit }: CTASectionProps) => {
  return (
    <section className="py-28 px-6 relative overflow-hidden bg-blue">
      {/* Background visual elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80&fit=crop" 
          alt="Growth" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 text-white">
            <Rocket className="w-4 h-4 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest">Ignite Your Success</span>
          </motion.div>

          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-6xl font-black tracking-tight text-white font-display mb-8 max-w-4xl mx-auto leading-[1.1]"
          >
            Ready to Build Your <span className="text-gold">Digital Future?</span>
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join 500+ businesses that scaled with DevDhara Software Solutions. 
            Book a free quote today and let's turn your vision into reality.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onOpenAudit}
              className="bg-gold text-blue hover:bg-gold/90 h-16 px-10 rounded-full font-bold text-lg shadow-2xl flex gap-2 group transition-all"
            >
              Get My Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue h-16 px-10 rounded-full font-bold text-lg transition-all"
            >
              Schedule a Call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
