import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ContactSection from "@/components/sections/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import AuditModal from "@/components/sections/AuditModal";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

const Contact = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue/5 rounded-l-[100px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-blue/5 px-4 py-2 rounded-full mb-8 text-blue">
                <span className="text-xs font-bold uppercase tracking-widest">Contact Us</span>
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-black tracking-tight mb-8 font-display leading-[1.1]"
              >
                Let's Build Something <span className="text-blue">Extraordinary.</span>
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
              >
                Ready to start your next project? Our team of expert engineers and designers is standing by to help you scale your technical infrastructure.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn}
              className="relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&q=80&fit=crop"
                  alt="Contact Us"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-blue/5 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
                    <span className="font-black">@</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue">24/7</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      
      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
