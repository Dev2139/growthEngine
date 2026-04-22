import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
}

const bullets = [
  "Custom Software & Enterprise Solutions",
  "Scalable Web & Mobile App Development",
  "UI/UX Design & Product Strategy",
];

const Hero = ({ onOpenAudit }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Full-bleed background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&fit=crop"
          alt="Modern office"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(6,11,22,0.97) 0%, rgba(6,11,22,0.90) 45%, rgba(6,11,22,0.6) 75%, rgba(6,11,22,0.4) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-6 font-medium">
            Full-Stack IT · Software · Design
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
            Build Smarter.
            <br />
            <span className="text-gold-gradient font-display italic">Scale Faster.</span>
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
            I help businesses build robust digital infrastructure, from high-performance 
            web apps to custom enterprise software — all engineered for excellence.
          </p>

          <ul className="space-y-2.5 mb-10">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={onOpenAudit}
              className="h-12 px-7 text-sm rounded-md border-0 btn-gold gap-2"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-12 px-7 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 border border-white/10"
            >
              Explore Solutions
            </Button>
          </div>
        </motion.div>

        {/* RIGHT — Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative"
        >
          {/* Main dashboard card */}
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid rgba(200,148,31,0.15)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop"
              alt="System Architecture"
              className="w-full h-72 object-cover"
            />
            {/* Stats overlay card */}
            <div className="bg-card p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-foreground">Project Velocity</span>
                <span className="text-xs text-gold font-semibold bg-gold/10 px-2 py-0.5 rounded">High Performance</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: "100%", l: "Uptime" },
                  { v: "Cloud", l: "Native" },
                  { v: "24/7", l: "Support" },
                ].map((s) => (
                  <div key={s.l} className="text-center p-3 rounded-lg bg-secondary">
                    <div className="text-lg font-semibold text-gold tabular-nums">{s.v}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-5 -left-6 bg-card rounded-xl px-5 py-3 shadow-xl flex items-center gap-3"
            style={{ border: "1px solid rgba(200,148,31,0.2)" }}
          >
            <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-gold" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">System deployed</div>
              <div className="text-xs text-muted-foreground">Just now · AWS Production</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(6,11,22,0.85)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "150+", label: "Systems Deployed" },
            { value: "99.9%", label: "System Uptime" },
            { value: "SaaS", label: "Architecture" },
            { value: "DevOps", label: "Enabled" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-1 h-8 rounded-full bg-gold/50 shrink-0" />
              <div>
                <div className="text-base font-semibold text-foreground tabular-nums">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
