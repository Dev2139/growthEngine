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
      title: "SEO & Ranking",
      description:
        "We master Google's algorithm to get your business ranking for high-intent keywords. Organic traffic that converts into paying customers.",
    },
    {
      icon: Users,
      title: "Lead Generation",
      description:
        "Strategic campaigns designed to capture qualified leads at every stage of the buyer journey. Systems that scale with your business.",
    },
    {
      icon: Zap,
      title: "Conversion Optimization",
      description:
        "We don't just drive traffic—we convert it. Every element of your digital presence is optimized for maximum ROI and customer acquisition.",
    },
    {
      icon: Award,
      title: "Data-Driven Results",
      description:
        "Every decision backed by analytics and performance metrics. We measure what matters and optimize for your bottom line.",
    },
  ];

  const team = [
    {
      name: "Dev Patel",
      role: "Founder & CEO",
      expertise: "SEO Strategy | Digital Growth",
      image: "DP",
    },
    {
      name: "Hardik Patel",
      role: "Founder & Head of Operations",
      expertise: "Lead Generation | Performance Marketing",
      image: "HP",
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
            Grow Your Digital{" "}
            <span className="text-muted-foreground">Presence</span>
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg text-muted-foreground max-w-2xl mb-8 text-pretty leading-relaxed"
          >
            Founded by Dev Patel and Hardik Patel, GrowthAxis specializes in helping businesses rank higher on Google and convert more customers through strategic digital marketing and high-performing web solutions. We've helped 50+ businesses grow their online visibility and revenue.
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
              The Story Behind GrowthAxis
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In 2020, Dev Patel and Hardik Patel saw a massive opportunity: most businesses were losing customers on Google simply because they didn't have a proper ranking and lead generation strategy.
              </p>
              <p>
                They noticed that traditional agencies overpromise results but underdeliver. Clients waste thousands on ineffective campaigns, and their phones stop ringing. The system was broken.
              </p>
              <p>
                Dev and Hardik assembled a team of digital strategists and web developers who understood the complete picture—from SEO and SEM to conversion optimization and scalable web infrastructure. Together, they created GrowthAxis to change how businesses approach their digital growth.
              </p>
              <p>
                Today, GrowthAxis has helped 50+ businesses dominate Google rankings, scale their lead generation, and build high-performing digital products. Our methodology combines proven marketing strategies with cutting-edge technology to deliver measurable results that directly impact the bottom line.
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
