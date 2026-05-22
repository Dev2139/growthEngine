import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";

const NotFound = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-foreground selection:bg-gold/20 selection:text-gold-dark overflow-x-hidden relative flex flex-col justify-between">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <main className="flex-grow flex items-center justify-center pt-44 pb-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center"
          >
            {/* 404 Large background number */}
            <motion.div 
              variants={fadeIn} 
              className="text-[10rem] md:text-[16rem] font-black tracking-tighter leading-none text-black/[0.02] select-none font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] -z-10 pointer-events-none"
            >
              404
            </motion.div>

            <motion.div 
              variants={fadeIn} 
              className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.04] px-4 py-2 rounded-full mb-8 text-black/60 shadow-sm backdrop-blur-sm"
            >
              <Compass className="w-4 h-4 text-gold-dark" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Page Not Found</span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-display leading-[1.1] text-black"
            >
              Lost in the <span className="font-serif-italic italic text-gold font-light">digital ether</span>.
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-base md:text-lg text-black/60 max-w-lg mb-10 leading-relaxed font-medium"
            >
              The coordinates you requested do not point to an active resource. Let us guide you back to our primary nodes.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button 
                  className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md active:scale-95 border border-black/10 shadow-lg"
                >
                  Return Home
                </Button>
              </Link>
              <Button 
                onClick={() => setAuditOpen(true)}
                variant="outline"
                className="bg-white/40 border-black/[0.06] hover:bg-white/80 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 text-black shadow-sm"
              >
                Schedule Audit <ArrowRight className="w-3 h-3 ml-2 text-gold-dark" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default NotFound;
