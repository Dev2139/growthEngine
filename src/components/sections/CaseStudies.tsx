import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ArrowUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const cases = [
  {
    slug: "metro-dental-group",
    client: "Metro Dental Group",
    metric: "312%",
    label: "Increase in inbound calls",
    before: { calls: "23/mo", ranking: "Page 3" },
    after: { calls: "95/mo", ranking: "#1 Map Pack" },
  },
  {
    slug: "summit-plumbing",
    client: "Summit Plumbing Co.",
    metric: "5.2X",
    label: "Lead volume growth",
    before: { calls: "12/mo", ranking: "Not ranked" },
    after: { calls: "62/mo", ranking: "Top 3 Local" },
  },
  {
    slug: "luxe-home-realty",
    client: "Luxe Home Realty",
    metric: "847%",
    label: "Google profile views",
    before: { calls: "8/mo", ranking: "Page 4" },
    after: { calls: "74/mo", ranking: "#2 Map Pack" },
  },
];

const CaseStudies = () => {
  return (
    <section id="results" className="py-32 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-muted-foreground mb-4 text-center">
            Results
          </motion.p>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-semibold tracking-tighter text-center mb-20 text-balance text-foreground">
            Real Numbers. Real Growth.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cases.map((c, i) => (
            <motion.div key={i} variants={fadeIn}>
              <Link
                to={`/projects/${c.slug}`}
                className="block card-depth rounded-2xl bg-card p-8 hover:card-depth-hover transition-shadow duration-300 group"
              >
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">{c.client}</div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-semibold tracking-tighter text-foreground tabular-nums">{c.metric}</span>
                  <ArrowUp className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="text-sm text-muted-foreground mb-8">{c.label}</div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border/50 mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-2">Before</div>
                    <div className="text-sm text-muted-foreground">{c.before.calls} calls</div>
                    <div className="text-sm text-muted-foreground">{c.before.ranking}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-2">After</div>
                    <div className="text-sm text-foreground font-medium">{c.after.calls} calls</div>
                    <div className="text-sm text-foreground font-medium">{c.after.ranking}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  View Full Case Study <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-12"
        >
          <Link to="/projects">
            <Button variant="outline" className="rounded-full border-border hover:bg-secondary text-foreground px-6 gap-2">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
