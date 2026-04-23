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
    <div className="min-h-screen bg-white text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <section className="pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                 <FileText className="w-6 h-6" />
               </div>
               <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight">Terms of Service</h1>
            </motion.div>
            
            <motion.div variants={fadeIn} className="prose prose-blue max-w-none space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg font-medium text-foreground">Last Updated: April 23, 2024</p>
              
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the services of DevDhara Software Solutions, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Provided</h2>
                <p>
                  DevDhara Software Solutions provides custom software engineering, web development, mobile app development, and IT consulting services. The specific scope of work for any project will be outlined in a separate service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
                <p>
                  Unless otherwise agreed upon in writing, all source code and design assets created during the course of a project will be transferred to the client upon full payment of the project fees. DevDhara Software Solutions retains the right to use non-proprietary code snippets and methodologies for other projects.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                <p>
                  Payment schedules and project milestones will be defined in the project contract. Late payments may result in the suspension of services or additional fees as specified in the agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
                <p>
                  DevDhara Software Solutions will not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or any software products delivered.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Information</h2>
                <p>
                  For any inquiries regarding these terms, please contact us at <a href="mailto:info@devdhar.in" className="text-blue font-bold">info@devdhar.in</a>.
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
