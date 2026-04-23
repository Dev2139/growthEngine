import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";
import { Shield } from "lucide-react";

const Privacy = () => {
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
               <div className="w-12 h-12 rounded-2xl bg-blue/5 flex items-center justify-center text-blue">
                 <Shield className="w-6 h-6" />
               </div>
               <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight">Privacy Policy</h1>
            </motion.div>
            
            <motion.div variants={fadeIn} className="prose prose-blue max-w-none space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg font-medium text-foreground">Last Updated: April 23, 2024</p>
              
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  At DevDhara Software Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us, such as when you fill out a contact form, schedule an audit call, or subscribe to our newsletter. This may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Name and contact information (Email, Phone)</li>
                  <li>Business details and project requirements</li>
                  <li>Communication history with our team</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide and improve our software engineering services</li>
                  <li>Communicate with you regarding your project inquiries</li>
                  <li>Send technical updates and marketing communications (with your consent)</li>
                  <li>Maintain the security of our platform</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Protection</h2>
                <p>
                  We implement industry-standard security measures to protect your data. However, please note that no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@devdhar.in" className="text-blue font-bold">info@devdhar.in</a>.
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
