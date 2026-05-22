import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onOpenAudit: () => void;
}

const CTASection = ({ onOpenAudit }: CTASectionProps) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F8F8F6] relative overflow-hidden border-t border-black/[0.03]">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[48px] bg-zinc-950 text-white overflow-hidden p-12 md:p-24 shadow-2xl border border-white/5 flex flex-col items-center text-center"
        >
          {/* Deluxe Radial Ambient Glows */}
          <div className="absolute right-[-10%] top-[-20%] w-[350px] h-[350px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute left-[-10%] bottom-[-20%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-gold/5 to-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

          {/* Minimalist grid overlay inside card */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] opacity-100 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-6 block">
              Elevate Your Operations
            </span>
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white font-display mb-8 leading-[1.1]">
              Ready to build your <span className="font-serif-italic font-light text-gold text-5xl">digital future</span>?
            </h2>

            <p className="text-base md:text-lg text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
              Partner with Devdhara Software Solutions. Obtain an executive consultation or request a custom architectural roadmap designed for your enterprise scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-100 active:scale-95 transition-all duration-200 h-14 px-8 rounded-full font-display text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2 group shadow-lg"
              >
                Get My Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto bg-transparent border border-white/20 hover:bg-white/5 active:scale-95 text-white transition-all duration-200 h-14 px-8 rounded-full font-display text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
