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
      title: "Custom Web Application Development",
      tagline: "React, Node, Python & More",
      description:
        "Enterprise-grade web applications built with modern frameworks. From concept to production, we handle architecture, development, testing, and deployment.",
      benefits: [
        "Full-stack custom development",
        "React, Vue, Angular, or your choice",
        "Node.js, Python, Go backend services",
        "Database design and optimization",
        "API development and documentation",
      ],
      result: "Shipped in 4-12 weeks with 99.9% uptime",
    },
    {
      title: "Mobile App Development",
      tagline: "iOS, Android & Cross-Platform",
      description:
        "Native and cross-platform mobile applications. We build beautiful, performant apps that users love using React Native, Flutter, Swift, or Kotlin.",
      benefits: [
        "Native iOS and Android development",
        "Cross-platform development (React Native / Flutter)",
        "App store optimization and deployment",
        "Push notifications and analytics",
        "Offline-first architecture",
      ],
      result: "2M+ downloads with 4.5+ star ratings",
    },
    {
      title: "Cloud Architecture & DevOps",
      tagline: "AWS, Azure, GCP Infrastructure",
      description:
        "Scalable cloud infrastructure that grows with your business. We design, deploy, and manage CloudFormation, Terraform, or Kubernetes clusters.",
      benefits: [
        "Cloud infrastructure design (AWS / Azure / GCP)",
        "Container orchestration (Kubernetes, Docker)",
        "CI/CD pipeline setup (GitHub Actions, GitLab CI)",
        "Monitoring and alerting",
        "Security and compliance",
      ],
      result: "Auto-scaling systems handling 100K+ concurrent users",
    },
    {
      title: "Performance Optimization",
      tagline: "Speed, Reliability & Scalability",
      description:
        "Slow apps lose users. We optimize frontend performance, database queries, and infrastructure to ensure your app runs at lightning speed.",
      benefits: [
        "Load time optimization (<2s target)",
        "Database indexing and query optimization",
        "CDN and caching strategy",
        "Bundle size reduction",
        "Real user monitoring (RUM)",
      ],
      result: "Average 60% performance improvement",
    },
    {
      title: "API Design & Integration",
      tagline: "RESTful & GraphQL APIs",
      description:
        "Well-designed APIs that power your ecosystem. We build scalable REST and GraphQL APIs with comprehensive documentation and SDKs.",
      benefits: [
        "REST and GraphQL API design",
        "Authentication and authorization (OAuth2, JWT)",
        "API versioning and deprecation",
        "SDK generation for mobile/web",
        "Rate limiting and security",
      ],
      result: "99.99% API availability with <100ms response",
    },
    {
      title: "Team Augmentation & Consulting",
      tagline: "Extended Development Team",
      description:
        "Need extra hands or technical guidance? We augment your team with senior engineers for specific projects or ongoing consulting.",
      benefits: [
        "Senior engineer augmentation",
        "Technical architecture consulting",
        "Code review and best practices",
        "Training and knowledge transfer",
        "Flexible engagement models",
      ],
      result: "Ship faster without the hiring hassle",
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
            Complete Development{" "}
            <span className="text-muted-foreground">Services</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg text-muted-foreground max-w-2xl mb-8 text-pretty leading-relaxed"
          >
            From web and mobile apps to cloud infrastructure and performance optimization, we cover the full spectrum of enterprise application development.
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
