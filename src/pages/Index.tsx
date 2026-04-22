import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Guarantee from "@/components/sections/Guarantee";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";

const Index = () => {
  const [auditOpen, setAuditOpen] = useState(false);
  const openAudit = () => setAuditOpen(true);
  const closeAudit = () => setAuditOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onOpenAudit={openAudit} />
      <Hero onOpenAudit={openAudit} />
      <Trust />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <Testimonials />
      <Guarantee />
      <CTASection onOpenAudit={openAudit} />
      <Footer />
      <AuditModal open={auditOpen} onClose={closeAudit} />
    </div>
  );
};

export default Index;
