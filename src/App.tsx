import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index.tsx";
import Projects from "./pages/Projects.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import Results from "./pages/Results.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Pricing from "./pages/Pricing.tsx";
import Contact from "./pages/Contact.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Partners from "./pages/Partners.tsx";
import PartnerPrograms from "./pages/PartnerPrograms.tsx";
import NotFound from "./pages/NotFound.tsx";
import JaiswalParivaarPrivacyPolicy from "./pages/JaiswalParivaarPrivacyPolicy.tsx";
import JaiswalParivaarDeleteAccount from "./pages/JaiswalParivaarDeleteAccount.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/programs" element={<PartnerPrograms />} />
          <Route path="/apps/jaiswal-parivaar/privacy-policy" element={<JaiswalParivaarPrivacyPolicy />} />
          <Route path="/apps/jaiswal-parivaar/delete-account" element={<JaiswalParivaarDeleteAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
