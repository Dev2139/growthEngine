import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ArrowRight, Cpu, Globe, Database, Smartphone, Code2, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const cases = [
  {
    slug: "fintech-portal-modernization",
    client: "Global Fintech Solutions",
    industry: "Fintech",
    metric: "40%",
    label: "Faster Processing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop",
    before: { tech: "Legacy PHP", perf: "Slow UI" },
    after: { tech: "Next.js + Node", perf: "99.9% Uptime" },
  },
  {
    slug: "healthcare-saas-platform",
    client: "MediSync Systems",
    industry: "Healthcare SaaS",
    metric: "60%",
    label: "Efficiency Increase",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
    before: { tech: "Manual Entry", perf: "Error Prone" },
    after: { tech: "React + AWS", perf: "Automated Workflows" },
  },
  {
    slug: "ecommerce-mobile-app",
    client: "Luxe Retail App",
    industry: "Retail / Mobile",
    metric: "85%",
    label: "App Store Rating",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop",
    before: { tech: "WebView App", perf: "High Latency" },
    after: { tech: "React Native", perf: "Native Fluidity" },
  },
];

const CaseStudies = () => {
  return (
    <section id="results" className="section-border py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <motion.p
              variants={fadeIn}
              className="text-xs uppercase tracking-[0.2em] text-gold mb-3 font-medium"
            >
              Case Studies
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground"
            >
              Engineering Success.
            </motion.h2>
          </div>
          <motion.div variants={fadeIn}>
            <Link to="/projects">
              <Button
                variant="ghost"
                className="text-sm text-muted-foreground hover:text-foreground gap-1.5 px-0 hover:bg-transparent"
              >
                View all deployments <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Case study cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {cases.map((c, i) => (
            <motion.div key={i} variants={fadeIn}>
              <Link
                to={`/projects/${c.slug}`}
                className="block rounded-xl overflow-hidden bg-card card-gold group hover:translate-y-[-3px] transition-transform duration-200"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={c.image}
                    alt={c.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  {/* Industry badge */}
                  <div className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-gold/15 text-gold backdrop-blur-sm border border-gold/20">
                    {c.industry}
                  </div>
                  {/* Big metric overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-3xl font-bold text-foreground tabular-nums">{c.metric}</div>
                      <div className="text-xs text-muted-foreground">{c.label}</div>
                    </div>
                    <Cpu className="w-6 h-6 text-gold" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="text-sm font-semibold text-foreground mb-4">{c.client}</div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Before */}
                    <div className="bg-secondary rounded-lg p-3">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Legacy</div>
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground mb-1">
                        <Database className="w-3 h-3" /> {c.before.tech}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <Globe className="w-3 h-3" /> {c.before.perf}
                      </div>
                    </div>
                    {/* After */}
                    <div className="bg-gold/5 rounded-lg p-3 border border-gold/10">
                      <div className="text-xs text-gold uppercase tracking-wider mb-2">Deployed</div>
                      <div className="flex items-center gap-1.5 text-[10px] text-foreground font-medium mb-1">
                        <Code2 className="w-3 h-3 text-gold" /> {c.after.tech}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-gold font-medium">
                        <Zap className="w-3 h-3" /> {c.after.perf}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-gold transition-colors">
                    View technical breakdown <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
