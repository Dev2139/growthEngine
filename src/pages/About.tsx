import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import { useState } from "react";
import { Award, Users, Zap, Target } from "lucide-react";

const About = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "We don't optimize for vanity metrics. Every strategy, every tactic, every decision is measured by its impact on your bottom line.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our success. We embed ourselves in your business, understand your market, and build systems that stick.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "Google changes every day. We stay obsessed with what's working, what's not, and how to get ahead of the curve.",
    },
    {
      icon: Award,
      title: "Accountability",
      description:
        "We guarantee results or you don't pay. We stake our reputation on every campaign because we're that confident.",
    },
  ];

  const team = [
    {
      name: "Dev Patel",
      role: "Founder & CEO",
      expertise: "Local SEO | Market Strategy",
      image: "DP",
    },
    {
      name: "Jordan Davis",
      role: "Head of Operations",
      expertise: "Campaign Management | Optimization",
      image: "JD",
    },
    {
      name: "Morgan Taylor",
      role: "Lead Developer",
      expertise: "Web Platform | Automation",
      image: "MT",
    },
    {
      name: "Casey Martinez",
      role: "Head of Growth",
      expertise: "Lead Generation | Sales Systems",
      image: "CM",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 border-b border-border/50">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto"
        >
          <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            About Us
          </motion.p>
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-balance"
          >
            We Turn Google Searches Into{" "}
            <span className="text-muted-foreground">Paying Customers</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg text-muted-foreground max-w-2xl mb-8 text-pretty leading-relaxed"
          >
            Founded in 2019 in India, GrowthEngine has helped 100+ businesses across the subcontinent dominate their local markets and scale faster than they thought possible.
          </motion.p>
        </motion.div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-6 border-b border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold tracking-tighter mb-6">
              How It Started
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In 2019, our founder Dev Patel was frustrated. Indian businesses were investing in beautiful websites and paid ads, yet still struggling to convert leads. Clients would come in with little visibility where it mattered most. Sound familiar?
              </p>
              <p>
                The problem wasn't their website or their business. It was that they were invisible where customers actually look — Google, Google Maps, and their local communities.
              </p>
              <p>
                Dev decided to fix this. Instead of building websites for the sake of it, we started building growth engines that turn local search into predictable, sustainable revenue for Indian businesses.
              </p>
              <p>
                Fast forward to today: 100+ Indian businesses scaled, $2.4M in monthly recurring revenue generated for our clients, and a system that works for any business that serves a local market across India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-semibold tracking-tighter text-balance">
              How We Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-accent/5"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-semibold tracking-tighter mb-4">
              The Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We're a small, obsessed group of operators and strategists. We don't have meetings for meetings' sake. We ship results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-transparent hover:border-border transition-colors"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-primary">
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground">
                  {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 px-6 border-b border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold tracking-tighter mb-12">
              Why Work With Us?
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  1. We're Invested In Your Success
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our pricing model is tied to your results. We don't make money unless you make money. This forces us to be strategic and accountable in ways most agencies aren't.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  2. We Specialize In Local Markets
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're not generalists. We focus exclusively on helping local businesses dominate Google search and maps. This specialization means we know the game inside and out.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  3. We Automate Everything
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Manual work doesn't scale. We've built proprietary tools and systems to automate lead distribution, reputation management, and campaign optimization. You get enterprise-level systems at a fraction of the cost.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  4. Transparency Is Non-Negotiable
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You'll have full visibility into every metric that matters. Real-time dashboards, weekly reports, monthly strategy calls. No black boxes, no surprises.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold tracking-tighter mb-6">
              Let's Build Your Growth Engine
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a call with our team. We'll audit your current presence and design a custom roadmap to dominate your market.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
};

export default About;
