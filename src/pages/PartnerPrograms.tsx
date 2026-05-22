import { motion } from "framer-motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";
import { 
  Gift, 
  Handshake, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PartnerPrograms = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  const programs = [
    {
      id: "affiliate",
      icon: Gift,
      title: "Affiliate Program",
      subtitle: "For Individual Connectors",
      details: "Earn passive income by leveraging your professional network. We handle the entire sales and delivery process, you simply make the introduction.",
      commission: "10% of Project Value",
      requirements: ["Professional LinkedIn profile", "Knowledge of client needs", "Active industry engagement"],
      features: [
        "Dedicated affiliate dashboard",
        "Marketing collateral & banners",
        "Real-time referral tracking",
        "Monthly payouts via wire transfer"
      ],
      color: "gold"
    },
    {
      id: "strategic",
      icon: Handshake,
      title: "Strategic Partnership",
      subtitle: "For Agencies & Studios",
      details: "Expand your service offerings without overhead. We provide the technical backbone for your design or marketing projects under your brand or ours.",
      commission: "Wholesale Tiered Pricing",
      requirements: ["Established agency presence", "Minimum 1 project/quarter", "Quality-first mindset"],
      features: [
        "White-label project reports",
        "Direct Slack channel access",
        "Preferred engineering scheduling",
        "Shared technical consulting"
      ],
      color: "gold"
    },
    {
      id: "tech",
      icon: Cpu,
      title: "Technology Partnership",
      subtitle: "For SaaS & Platforms",
      details: "Integrate your technical solution into our elite development workflow and gain exposure to our high-growth client base.",
      commission: "Mutual Growth Synergy",
      requirements: ["Public API documentation", "Dedicated support contact", "Co-marketing commitment"],
      features: [
        "Featured partner directory listing",
        "Technical integration support",
        "Joint case studies & webinars",
        "Internal team training sessions"
      ],
      color: "gold"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-foreground selection:bg-gold/20 selection:text-gold-dark overflow-x-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.04] px-4 py-2 rounded-full mb-6 text-black/60 shadow-sm backdrop-blur-sm">
              <Info className="w-3.5 h-3.5 text-gold-dark" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Program Details</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 font-display text-black">
              Our Partnership <span className="font-serif-italic italic text-gold font-light">programs</span>.
            </h1>
            <p className="text-base md:text-lg text-black/60 max-w-2xl mx-auto leading-relaxed font-medium">
              Explore our structured partnership tiers designed to drive mutual growth and deliver unparalleled value to clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 px-6 border-t border-black/[0.03] bg-black/[0.01]">
        <div className="max-w-7xl mx-auto space-y-32">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
            >
              <div className="flex-1">
                <div className={`w-14 h-14 rounded-2xl bg-gold/15 text-gold-dark flex items-center justify-center mb-6`}>
                  <prog.icon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-black mb-2 font-display leading-tight">{prog.title}</h2>
                <div className="text-lg font-serif-italic italic text-gold-dark mb-6">{prog.subtitle}</div>
                <p className="text-xs text-black/60 leading-relaxed mb-8 font-medium">
                  {prog.details}
                </p>
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-black/[0.04] mb-8 shadow-sm">
                  <div className="text-[9px] font-extrabold uppercase tracking-widest text-black/40 mb-1">Benefit Focus</div>
                  <div className="text-xl font-black text-black font-display">{prog.commission}</div>
                </div>
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className="bg-black text-white hover:bg-black/90 rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md border border-black/10 shadow-lg flex items-center gap-2"
                >
                  Join This Program <ArrowRight className="w-4 h-4 text-gold" />
                </Button>
              </div>

              <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/40 backdrop-blur-sm p-8 rounded-[32px] border border-black/[0.04]">
                <div className="space-y-6">
                  <h3 className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/40 border-b border-black/[0.03] pb-3">Requirements</h3>
                  <ul className="space-y-3.5">
                    {prog.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        <span className="text-xs font-bold text-black/75 leading-none">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-black/40 border-b border-black/[0.03] pb-3">Key Features</h3>
                  <ul className="space-y-3.5">
                    {prog.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0" />
                        <span className="text-xs font-bold text-black/75 leading-none">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
      <FloatingButtons />
    </div>
  );
};

export default PartnerPrograms;
