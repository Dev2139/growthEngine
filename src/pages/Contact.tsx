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
      
      {/* Page Header */}
      <section className="pt-40 pb-20 px-6 bg-blue/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-blue/5 px-4 py-2 rounded-full mb-8 text-blue">
              <span className="text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-8xl font-black tracking-tight mb-8 font-display leading-tight"
            >
              Let's Build Something <br /><span className="text-blue">Extraordinary.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Ready to start your next project? Our team of expert engineers and designers is standing by to help you scale.
            </motion.p>
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
