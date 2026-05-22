import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";
import { FileText } from "lucide-react";

const Terms = () => {
  const [auditOpen, setAuditOpen] = useState(false);

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
                 <FileText className="w-5 h-5" />
               </div>
               <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-black">
                 Terms of <span className="font-serif-italic italic text-gold font-light">service</span>.
               </h1>
            </motion.div>
            
            <motion.div variants={fadeIn} className="bg-white/40 backdrop-blur-sm border border-black/[0.04] p-8 md:p-12 rounded-[32px] shadow-sm space-y-8 text-black/60 leading-relaxed font-medium">
              <p className="text-sm font-semibold text-black/40">Last Updated: April 23, 2024</p>
              
              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">1. Acceptance of Terms</h2>
                <p className="text-xs md:text-sm">
                  By accessing or using the services of Devdhara Software Solutions, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">2. Services Provided</h2>
                <p className="text-xs md:text-sm">
                  Devdhara Software Solutions provides custom software engineering, web development, mobile app development, and IT consulting services. The specific scope of work for any project will be outlined in a separate service agreement.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">3. Intellectual Property</h2>
                <p className="text-xs md:text-sm">
                  Unless otherwise agreed upon in writing, all source code and design assets created during the course of a project will be transferred to the client upon full payment of the project fees. Devdhara Software Solutions retains the right to use non-proprietary code snippets and methodologies for other projects.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">4. Payment Terms</h2>
                <p className="text-xs md:text-sm">
                  Payment schedules and project milestones will be defined in the project contract. Late payments may result in the suspension of services or additional fees as specified in the agreement.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">5. Limitation of Liability</h2>
                <p className="text-xs md:text-sm">
                  Devdhara Software Solutions will not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or any software products delivered.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">6. Governing Law</h2>
                <p className="text-xs md:text-sm">
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.03]">
                <h2 className="text-xl font-bold text-black mb-3">7. Contact Information</h2>
                <p className="text-xs md:text-sm">
                  For any inquiries regarding these terms, please contact us at <a href="mailto:info@devdhar.in" className="text-gold-dark hover:underline font-semibold">info@devdhar.in</a>.
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

export default Terms;
