import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import CompanyLogos from "@/components/sections/CompanyLogos";
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

import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  const [auditOpen, setAuditOpen] = useState(false);
  const openAudit = () => setAuditOpen(true);
  const closeAudit = () => setAuditOpen(false);

  useSEO({
    title: "DevDhara Technologies | Premium Software Engineering & IT Services",
    description: "DevDhara Technologies is a premium software engineering agency in Ahmedabad, Gujarat. We build elite custom web development, mobile apps, SaaS, and IT solutions.",
    keywords: "Home, DevDhara Ahmedabad, Premium Software, IT Agency India"
  });

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-foreground selection:bg-gold/20 selection:text-gold-dark overflow-x-hidden">
      <Navbar onOpenAudit={openAudit} />
      <Hero onOpenAudit={openAudit} />
      <Trust />
      <CompanyLogos />
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
