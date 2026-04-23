import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onOpenAudit: () => void;
}

const bullets = [
  "Custom Software & Enterprise Solutions",
  "Scalable Web & Mobile App Development",
  "UI/UX Design & Product Strategy",
];

const Hero = ({ onOpenAudit }: HeroProps) => {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white pt-24">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue/5 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue/5 border border-blue/10 px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue"></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue">
              Leading Software Engineering Agency
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 font-display text-foreground">
            Building Powerful <br />
            <span className="text-blue">Digital Solutions</span> <br />
            <span className="relative">
              for Growing Businesses
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-gold/20 -z-10"
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Websites, Apps, Software & Growth Services tailored for your business. 
            We engineer premium digital products that scale.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              onClick={onOpenAudit}
              className="bg-blue text-white hover:bg-blue/90 h-14 px-10 rounded-full font-bold text-base shadow-xl shadow-blue/20 flex gap-2 group transition-all hover:scale-105 active:scale-95"
            >
              Start Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-blue/20 text-blue hover:bg-blue/5 h-14 px-10 rounded-full font-bold text-base transition-all active:scale-95"
              >
                View Portfolio
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {bullets.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue" />
                </div>
                <span className="text-[13px] font-semibold text-foreground/80 leading-tight">
                  {b}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:block"
        >
          <div className="relative">
            {/* Main Hero Image */}
            <div className="rounded-[40px] overflow-hidden shadow-[0_32px_80px_-20px_rgba(30,58,138,0.2)] border-8 border-white relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&fit=crop"
                alt="DevDhara Software Solutions Team"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue/30 to-transparent" />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-12 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-blue/5 hidden sm:block"
            >
              <div className="flex flex-col items-center">
                <div className="text-5xl font-black text-blue mb-1 font-display tracking-tight">5+</div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                  Years of Excellence
                </div>
              </div>
            </motion.div>

            {/* Floating Project Card */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -right-12 bg-white px-6 py-4 rounded-2xl shadow-2xl z-20 border border-gold/10 hidden sm:flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
                <Play className="w-5 h-5 text-gold fill-gold" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">150+ Projects</div>
                <div className="text-[11px] font-medium text-muted-foreground">Successfully Delivered</div>
              </div>
            </motion.div>

            {/* Tech Stack Bubbles */}
            <div className="absolute -top-10 -right-4 flex flex-col gap-3 z-0">
               {[1, 2, 3].map((i) => (
                 <div key={i} className={`w-${8+i*4} h-${8+i*4} rounded-full bg-blue/5 blur-xl`} />
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
