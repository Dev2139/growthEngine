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
      color: "blue"
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
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      <section className="relative pt-40 pb-20 px-6 bg-blue/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="inline-flex items-center gap-2 bg-blue/10 border border-blue/20 px-4 py-2 rounded-full mb-6">
              <Info className="w-4 h-4 text-blue" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue">Program Details</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 font-display">
              Our Partnership <span className="text-blue">Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our structured partnership tiers designed to drive mutual growth and deliver unparalleled value to clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-20 items-center`}
            >
              <div className="flex-1">
                <div className={`w-20 h-20 rounded-[28px] ${prog.color === 'blue' ? 'bg-blue/5 text-blue' : 'bg-gold/10 text-gold'} flex items-center justify-center mb-8`}>
                  <prog.icon className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 font-display">{prog.title}</h2>
                <div className="text-xl font-bold text-blue mb-6">{prog.subtitle}</div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  {prog.details}
                </p>
                <div className="bg-blue/5 rounded-3xl p-8 border border-blue/10 mb-10">
                  <div className="text-xs font-bold uppercase tracking-widest text-blue mb-2">Benefit Focus</div>
                  <div className="text-2xl font-black text-foreground">{prog.commission}</div>
                </div>
                <Button 
                  onClick={() => setAuditOpen(true)}
                  className="bg-blue text-white hover:bg-blue/90 rounded-full px-10 h-14 font-bold text-lg shadow-xl shadow-blue/20"
                >
                  Join This Program <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40 border-b border-blue/5 pb-4">Requirements</h3>
                  <ul className="space-y-4">
                    {prog.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        <span className="text-sm font-semibold text-foreground/80">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-8">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40 border-b border-blue/5 pb-4">Key Features</h3>
                  <ul className="space-y-4">
                    {prog.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue shrink-0" />
                        <span className="text-sm font-semibold text-foreground/80">{feature}</span>
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
