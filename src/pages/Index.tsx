import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import CompanyLogos from "@/components/sections/CompanyLogos";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
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
      <CompanyLogos />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <WhyChooseUs />
      <Testimonials />
      <CTASection onOpenAudit={openAudit} />
      <Footer />
      <AuditModal open={auditOpen} onClose={closeAudit} />
    </div>
  );
};

export default Index;
