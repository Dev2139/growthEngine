import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  const [auditOpen, setAuditOpen] = useState(false);

  const services = [
    {
      title: "Google Business Profile Optimization",
      tagline: "Dominate The Map Pack",
      description:
        "Your Google Business Profile is the first impression customers get. We optimize every element — photos, categories, attributes, posts, and Q&A — to maximize visibility and conversions.",
      benefits: [
        "Complete profile audit and optimization",
        "Professional photo strategy and capture",
        "Ongoing posts and messaging",
        "Review response management",
        "Attribute and category optimization",
      ],
      result: "Average 2.5X increase in map pack visibility within 60 days",
    },
    {
      title: "Local SEO & Search Domination",
      tagline: "Get Found Where It Matters",
      description:
        "Local SEO is the most underrated channel for local businesses. We build rankings around high-intent local keywords, pulling customers who are actively searching for your services.",
      benefits: [
        "Comprehensive keyword research and strategy",
        "On-page optimization for local rankings",
        "Citation building and consistency",
        "Local link building",
        "Technical SEO for local domains",
      ],
      result: "Typically rank for 50+ local keywords within 120 days",
    },
    {
      title: "Lead Generation & Automation",
      tagline: "Turn Leads Into Customers",
      description:
        "SEO traffic is only valuable if it converts. We design conversion-optimized funnels, set up automated nurture sequences, and build lead qualification systems.",
      benefits: [
        "Conversion-optimized landing pages",
        "Lead capture and qualification systems",
        "Email and SMS automation",
        "Lead distribution to sales team",
        "Performance analytics and optimization",
      ],
      result: "3.5X average cost-per-lead reduction vs. paid ads",
    },
    {
      title: "Reputation Management",
      tagline: "Protect & Amplify Your Brand",
      description:
        "Your reputation is your most valuable asset. We monitor, manage, and amplify your online reviews across Google, Yelp, and industry platforms.",
      benefits: [
        "24/7 review monitoring",
        "Automated review request campaigns",
        "Strategic review response",
        "Review generation from happy customers",
        "Negative review mitigation",
      ],
      result: "Average 1.2 star increase within 90 days",
    },
    {
      title: "Website Design & Optimization",
      tagline: "Convert Visitors Into Customers",
      description:
        "Your website is where trust is built and conversions happen. We design beautiful, fast, mobile-first websites built for lead generation.",
      benefits: [
        "Custom design matching your brand",
        "Mobile-first responsive design",
        "Speed optimization and performance",
        "CRO testing and optimization",
        "Local schema markup",
      ],
      result: "Average 2.1X increase in conversion rate",
    },
    {
      title: "Done-With-You Growth Coaching",
      tagline: "Build Sustainable Systems",
      description:
        "Ready to own your growth? We work with you to build in-house systems and strategies. You'll have the knowledge and tools to scale independently.",
      benefits: [
        "Strategy training and mentorship",
        "System documentation and playbooks",
        "Monthly strategy sessions",
        "Tool setup and integration",
        "Team training",
      ],
      result: "Full autonomy over growth after 6-12 months",
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
            Our Services
          </motion.p>
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 text-balance"
          >
            The Complete{" "}
            <span className="text-muted-foreground">Growth System</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg text-muted-foreground max-w-2xl mb-8 text-pretty leading-relaxed"
          >
            We don't offer isolated services. We build complete growth engines that turn local search visibility into predictable revenue. That's why our clients see results that stick.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg border border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-border transition-all duration-300 flex flex-col"
              >
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest border border-primary/50 rounded-full text-primary/80 w-fit">
                  {service.tagline}
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary mb-3">
                    Includes:
                  </p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <p className="text-sm font-semibold text-foreground">
                    {service.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-6 border-t border-border/50 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold tracking-tighter mb-12">
              Our Process
            </h2>

            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Audit",
                  desc: "We conduct a comprehensive audit of your current online presence, competitor analysis, and market opportunity.",
                },
                {
                  num: "02",
                  title: "Strategy",
                  desc: "Based on findings, we design a custom 12-month roadmap with specific milestones, KPIs, and success metrics.",
                },
                {
                  num: "03",
                  title: "Execution",
                  desc: "We implement the strategy across all channels — GBP, SEO, website, automation, and reputation management.",
                },
                {
                  num: "04",
                  title: "Optimization",
                  desc: "We test, measure, and iterate constantly. Monthly reviews, weekly optimizations, relentless pursuit of results.",
                },
                {
                  num: "05",
                  title: "Scale",
                  desc: "Once we've proven what works, we scale successful channels and build systems that generate predictable revenue.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 pb-8 border-b border-border/50 last:border-0"
                >
                  <div className="text-4xl font-bold text-primary/50 flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold tracking-tighter mb-6">
              Ready to Transform Your Growth?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's start with a free audit. We'll analyze your current presence and design a custom strategy.
            </p>
            <Button
              size="lg"
              onClick={() => setAuditOpen(true)}
              className="h-14 px-8 text-base rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              Get Your Free Audit
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
};

export default Services;
