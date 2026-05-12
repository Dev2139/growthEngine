import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  const [auditOpen, setAuditOpen] = useState(false);
  const openAudit = () => setAuditOpen(true);
  const closeAudit = () => setAuditOpen(false);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar onOpenAudit={openAudit} />
      <Hero onOpenAudit={openAudit} />
      <Trust />
      <Services />
      <WhyChooseUs />
      <TechStack />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FAQ />
      <CTASection onOpenAudit={openAudit} />
      <ContactSection />
      <Footer />
      <AuditModal open={auditOpen} onClose={closeAudit} />
      <FloatingButtons />
    </div>
  );
};

export default Index;
