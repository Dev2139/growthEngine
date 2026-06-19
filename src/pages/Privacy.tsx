import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";
import { Shield } from "lucide-react";

import { useSEO } from "@/hooks/useSEO";

const Privacy = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  useSEO({
    title: "Privacy Policy | DevDhara Technologies",
    description: "Read DevDhara Technologies' Privacy Policy to learn how we collect, protect, and use your personal information and project data.",
    keywords: "DevDhara Privacy, Data Protection policy"
  });

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-foreground selection:bg-gold/20 selection:text-gold-dark overflow-x-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <section className="pt-44 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
               <div className="w-10 h-10 rounded-2xl bg-gold/15 flex items-center justify-center text-gold-dark">
                 <Shield className="w-5 h-5" />
               </div>
               <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-black">
                 Privacy <span className="font-serif-italic italic text-gold font-light">policy</span>.
               </h1>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white/40 backdrop-blur-sm border border-black/[0.04] p-8 md:p-12 rounded-[32px] shadow-sm space-y-8 text-black/60 leading-relaxed font-medium">
              <p className="text-sm font-semibold text-black/40">Last Updated: April 23, 2024</p>
              
              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">1. Introduction</h2>
                <p className="text-xs md:text-sm">
                  At DevDhara Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">2. Information We Collect</h2>
                <p className="text-xs md:text-sm">
                  We collect information that you provide directly to us, such as when you fill out a contact form, schedule an audit call, or subscribe to our newsletter. This may include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3 text-xs md:text-sm">
                  <li>Name and contact information (Email, Phone)</li>
                  <li>Business details and project requirements</li>
                  <li>Communication history with our team</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">3. How We Use Your Information</h2>
                <p className="text-xs md:text-sm">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3 text-xs md:text-sm">
                  <li>Provide and improve our software engineering services</li>
                  <li>Communicate with you regarding your project inquiries</li>
                  <li>Send technical updates and marketing communications (with your consent)</li>
                  <li>Maintain the security of our platform</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">4. Data Protection</h2>
                <p className="text-xs md:text-sm">
                  We implement industry-standard security measures to protect your data. However, please note that no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">5. Contact Us</h2>
                <p className="text-xs md:text-sm">
                  If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@devdhar.in" className="text-gold-dark hover:underline font-semibold">info@devdhar.in</a>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default Privacy;
