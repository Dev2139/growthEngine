import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Play, Cpu, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onOpenAudit: () => void;
}

const bullets = [
  "Custom Enterprise Solutions",
  "Scalable Products & APIs",
  "Luxury UI/UX & Strategy",
];

const Hero = ({ onOpenAudit }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F8F6] pt-32 pb-20">
      {/* Background Decorative Streaks & Glows */}
      <div className="absolute inset-0 grid-pattern-premium -z-10 opacity-70" />
      <div className="absolute top-[10%] right-[5%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[160px] -z-10 pointer-events-none" />
      
      {/* Animated Light streak across the top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent -z-10" />

      {/* Floating Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-black/[0.02] border border-black/[0.03]"
            style={{
              width: Math.random() * 180 + 80,
              height: Math.random() * 180 + 80,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, Math.random() * 60 - 30, 0],
              x: [0, Math.random() * 60 - 30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 12 + 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-black/[0.03] border border-black/[0.04] px-4 py-1.5 rounded-full mb-8 self-start shadow-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-black/60">
              System Release v2.4 • Active Engineering
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-8 text-black font-display">
            Engineering <br />
            <span className="font-serif-italic font-normal text-[#92680A] italic tracking-wide">exceptional</span> <br />
            digital systems
          </h1>

          <p className="text-base md:text-lg text-black/50 leading-relaxed mb-10 max-w-xl font-medium">
            We design, build, and scale premium software solutions for growing businesses. 
            Blending technical mastery with luxury minimalism to build the future of enterprise tech.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              onClick={onOpenAudit}
              className="bg-black text-white hover:bg-black/90 h-13 px-8 rounded-full font-bold text-xs tracking-wider uppercase shadow-xl flex gap-2.5 group transition-all hover:scale-[1.02] active:scale-95 border border-black/10"
            >
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/projects">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-black/10 hover:bg-black/5 text-black hover:text-black h-13 px-8 rounded-full font-bold text-xs tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-95"
              >
                View Portfolio
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {bullets.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-black/[0.03] border border-black/[0.04] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-gold" />
                </div>
                <span className="text-[12px] font-bold text-black/60 uppercase tracking-wider">
                  {b}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[36px] glass-premium p-7 border border-black/[0.03] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden">
            {/* Soft inner lighting */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold/10 rounded-full blur-[70px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-blue-500/5 rounded-full blur-[60px] -z-10 pointer-events-none" />
            
            {/* Header elements inside card */}
            <div className="flex items-center justify-between border-b border-black/[0.04] pb-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-black/70 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/70 font-mono">NODE_ENG_ONLINE</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              </div>
            </div>

            {/* Dashboard Graphics */}
            <div className="my-6 flex-1 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/70 border border-black/[0.02] shadow-sm relative group hover:border-black/[0.06] transition-colors">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-black/40">SYSTEM PERFORMANCE</span>
                    <span className="text-[11px] font-bold text-emerald-600 font-mono">99.98%</span>
                  </div>
                  <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "99.98%" }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                      className="h-full bg-black rounded-full" 
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-black/[0.02] shadow-sm relative group hover:border-black/[0.06] transition-colors">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-black/40">LATENCY INDEX</span>
                    <span className="text-[11px] font-bold text-black/80 font-mono">6ms Avg</span>
                  </div>
                  <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "12%" }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                      className="h-full bg-gold rounded-full" 
                    />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-black/[0.02] shadow-sm relative group hover:border-black/[0.06] transition-colors">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-black/40">GLOBAL THROUGHPUT</span>
                    <span className="text-[11px] font-bold text-black/80 font-mono">4.2 TB/s</span>
                  </div>
                  <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-black rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Widgets */}
            <div className="grid grid-cols-2 gap-4 border-t border-black/[0.04] pt-4">
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-black/40 mb-0.5">ESTABLISHED</span>
                <span className="text-xl font-extrabold text-black font-display tracking-tight">5+ Years</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-black/40 mb-0.5">COMPLETED</span>
                <span className="text-xl font-extrabold text-black font-display tracking-tight">150+ Apps</span>
              </div>
            </div>

            {/* Micro Decorative Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-black text-[#F8F8F6] p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 z-20 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-gold fill-gold" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none mb-1">PROD STACK</div>
                <div className="text-xs font-black tracking-tight font-display text-white">AI Scale Built</div>
              </div>
            </motion.div>

            {/* Micro Decorative Shield Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-black/[0.03] flex items-center gap-3 z-20 pointer-events-none"
            >
              <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-gold" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-black/40 uppercase tracking-widest leading-none mb-1">SECURITY</div>
                <div className="text-xs font-black tracking-tight font-display text-black">ISO Compliant</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
