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
      title: "SEO & Google Rankings",
      tagline: "Organic Search Domination",
      description:
        "Strategic SEO services to rank your business higher on Google. We optimize your website, build high-quality backlinks, and implement technical SEO for sustainable growth.",
      benefits: [
        "Keyword research and competitive analysis",
        "On-page and technical SEO optimization",
        "Content strategy and creation",
        "Link building and authority growth",
        "Monthly ranking and traffic reports",
      ],
      result: "Average ranking improvement from Page 3 to Page 1 in 60-90 days",
    },
    {
      title: "Lead Generation & Conversion",
      tagline: "Turn Visitors Into Customers",
      description:
        "High-converting systems designed to attract qualified prospects and turn visibility into revenue. We optimize every touchpoint for conversion.",
      benefits: [
        "Landing page design and optimization",
        "Lead capture forms and workflows",
        "A/B testing for higher conversions",
        "Lead nurture workflows",
        "CRM integration and lead nurturing",
      ],
      result: "Average 3-5x improvement in lead conversion rates",
    },
    {
      title: "Paid Search & Google Ads",
      tagline: "SEM & PPC Campaign Management",
      description:
        "Strategic Google Ads and paid search campaigns that drive qualified traffic and maximize ROI. Data-driven bidding and optimization.",
      benefits: [
        "Google Ads setup and management",
        "Keyword research and bid strategy",
        "Ad copy testing and optimization",
        "Landing page optimization",
        "Detailed ROI tracking and reporting",
      ],
      result: "Average ROAS of 3:1 to 8:1 on ad spend",
    },
    {
      title: "Website Design & Development",
      tagline: "High-Performance Business Websites",
      description:
        "Custom-built websites optimized for both user experience and search engines. Fast-loading, mobile-friendly, and designed to convert.",
      benefits: [
        "Responsive web design",
        "Mobile optimization",
        "Performance optimization",
        "Conversion optimization",
        "SEO-friendly architecture",
      ],
      result: "40%+ improvement in mobile conversion rates",
    },
    {
      title: "Blog Content & Strategy",
      tagline: "Content That Ranks & Converts",
      description:
        "Strategic blog content that attracts organic traffic, establishes authority, and nurtures leads through the sales funnel.",
      benefits: [
        "Content calendar and strategy",
        "SEO-optimized blog writing",
        "Competitor content analysis",
        "Topic cluster development",
        "Traffic and engagement tracking",
      ],
      result: "Organic traffic growth of 50-200% in 6 months",
    },
    {
      title: "Local SEO & Google Business",
      tagline: "Dominate Local Search Results",
      description:
        "Local SEO optimization to help service-based businesses rank locally. Perfect for multi-location businesses and service areas.",
      benefits: [
        "Google Business Profile optimization",
        "Local citation building",
        "Review generation and management",
        "Local schema markup",
        "Location-based keyword optimization",
      ],
      result: "Average 150% increase in local search visibility",
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
            Grow Your Business{" "}
            <span className="text-muted-foreground">Online</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg text-muted-foreground max-w-2xl mb-8 text-pretty leading-relaxed"
          >
            We strategically help businesses grow and rank on Google and other platforms. Data-driven optimization combined with sustained growth systems.
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
                  title: "Architecture & Design",
                  desc: "We design scalable architecture, database schema, and API contracts. Clean code, type safety, and best practices from day one.",
                },
                {
                  num: "03",
                  title: "Development & Sprints",
                  desc: "Two-week agile sprints with continuous integration and deployment. Daily standups, transparent progress, and rapid iteration.",
                },
                {
                  num: "04",
                  title: "Testing & QA",
                  desc: "Comprehensive unit, integration, and end-to-end testing. Load testing, security audits, and performance optimization.",
                },
                {
                  num: "05",
                  title: "Launch & Support",
                  desc: "Production deployment, monitoring setup, and ongoing support. We're there when you go live and beyond.",
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
              Ready to Build Something Great?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project requirements and design a solution that scales with your business.
            </p>
            <Button
              size="lg"
              onClick={() => setAuditOpen(true)}
              className="h-14 px-8 text-base rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              Start a Conversation
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
