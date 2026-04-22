import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Compass, Code2, TrendingUp, Users } from "lucide-react";

const steps = [
  {
    icon: Compass,
    step: "01",
    title: "Jyotish Margadarshan",
    subtitle: "Astrology Guidance",
    desc: "We begin with deep strategic guidance — understanding your direction, your market and the path forward, just like navigating by the stars.",
    color: "gold",
    glowColor: "rgba(212, 163, 42, 0.4)",
    borderColor: "#D4A32A",
    bgGlow: "rgba(212, 163, 42, 0.08)",
  },
  {
    icon: Code2,
    step: "02",
    title: "Software / Website / App",
    subtitle: "Custom Solution Creation",
    desc: "We craft precision-engineered software, websites, and apps — custom solutions built to your exact business needs.",
    color: "blue",
    glowColor: "rgba(26, 101, 192, 0.4)",
    borderColor: "#1565C0",
    bgGlow: "rgba(26, 101, 192, 0.08)",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Dhandha ma Vriddhi",
    subtitle: "Business Growth",
    desc: "Systematic growth strategies that drive measurable results — more leads, better rankings, and compounding revenue growth.",
    color: "gold",
    glowColor: "rgba(212, 163, 42, 0.4)",
    borderColor: "#D4A32A",
    bgGlow: "rgba(212, 163, 42, 0.08)",
  },
  {
    icon: Users,
    step: "04",
    title: "Customer ni Pragati",
    subtitle: "Customer Success",
    desc: "Your customers' progress IS our progress. We build long-term relationships where every client success becomes our proudest achievement.",
    color: "blue",
    glowColor: "rgba(26, 101, 192, 0.4)",
    borderColor: "#1565C0",
    bgGlow: "rgba(26, 101, 192, 0.08)",
  },
];

const ConnectorArrow = ({ active }: { active: boolean }) => (
  <div className="hidden lg:flex items-center justify-center px-2 flex-shrink-0">
    <motion.div
      animate={active ? { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] } : { opacity: 0.3 }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className="flex items-center gap-1"
    >
      {/* Animated dot trail */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 1, 0.2], x: [0, 4, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold-500 to-royal-700"
        />
      ))}
      {/* Arrow head */}
      <motion.div
        animate={{ x: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="ml-1"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 6h9M7 2l4 4-4 4" stroke="url(#arrowGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="arrowGrad" x1="0" y1="0" x2="12" y2="0">
              <stop stopColor="#D4A32A"/>
              <stop offset="1" stopColor="#1565C0"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  </div>
);

const StepCard = ({ s, index, isActive, onClick }: { s: typeof steps[0]; index: number; isActive: boolean; onClick: () => void }) => {
  const Icon = s.icon;
  const isGold = s.color === "gold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="relative flex-1 cursor-pointer group"
    >
      {/* Main card */}
      <motion.div
        animate={{
          boxShadow: isActive
            ? `0 0 0 1px ${s.borderColor}55, 0 20px 50px -15px rgba(0,0,0,0.8), 0 0 60px -20px ${s.glowColor}`
            : `0 0 0 1px rgba(255,255,255,0.06), 0 10px 30px -10px rgba(0,0,0,0.5)`
        }}
        transition={{ duration: 0.4 }}
        style={{ background: isActive ? s.bgGlow : "transparent" }}
        className="relative rounded-2xl border border-white/5 p-8 h-full overflow-hidden transition-colors duration-300 bg-card"
      >
        {/* Background glow blob */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
            style={{ background: s.glowColor }}
          />
        )}

        {/* Step number */}
        <motion.div
          animate={isActive ? { opacity: [0.4, 0.8, 0.4] } : { opacity: 0.15 }}
          transition={{ duration: 2.5, repeat: isActive ? Infinity : 0 }}
          className="absolute top-4 right-6 font-cinzel text-6xl font-bold pointer-events-none select-none leading-none"
          style={{ color: s.borderColor }}
        >
          {s.step}
        </motion.div>

        {/* Icon circle */}
        <div className="relative mb-6">
          {/* Spinning ring */}
          <motion.div
            animate={isActive ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 8, repeat: isActive ? Infinity : 0, ease: "linear" }}
            className="w-16 h-16 rounded-full absolute inset-0"
            style={{
              background: `conic-gradient(from 0deg, ${s.borderColor}88, transparent, ${s.borderColor}44, transparent, ${s.borderColor}88)`,
            }}
          />
          <div
            className="relative w-16 h-16 rounded-full flex items-center justify-center z-10"
            style={{
              background: `linear-gradient(135deg, ${s.bgGlow.replace("0.08", "0.25")}, ${s.bgGlow.replace("0.08", "0.05")})`,
              border: `1px solid ${s.borderColor}44`,
            }}
          >
            <Icon
              className="w-7 h-7 transition-colors duration-300"
              style={{ color: s.borderColor }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3
            className="text-xl font-semibold mb-1 tracking-tight leading-tight"
            style={{ color: isActive ? s.borderColor : "hsl(var(--foreground))" }}
          >
            {s.title}
          </h3>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">
            {s.subtitle}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {s.desc}
          </p>
        </div>

        {/* Active bottom line */}
        <motion.div
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
          style={{ background: `linear-gradient(90deg, ${s.borderColor}, transparent)` }}
        />
      </motion.div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden" style={{ borderTop: "1px solid rgba(212,163,42,0.12)" }}>
      {/* Background constellation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle radial glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(ellipse, rgba(212,163,42,0.06) 0%, transparent 70%)" }}
        />
        {/* Gold dots / stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.35,
            }}
            className="absolute w-1 h-1 rounded-full"
            style={{
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 11) % 90}%`,
              background: i % 2 === 0 ? "#D4A32A" : "#1565C0",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs uppercase tracking-[0.25em] mb-4 font-medium"
            style={{ color: "#D4A32A" }}
          >
            — Our Process —
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-6 text-balance">
            <span className="text-foreground">How We </span>
            <span className="text-gold-gradient">Transform</span>
            <span className="text-foreground"> Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From strategic vision to customer success — our 4-step proven process turns ideas into growing businesses.
          </p>

          {/* Gold divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #D4A32A)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#D4A32A" }} />
            <svg width="16" height="16" viewBox="0 0 16 16" className="opacity-70">
              <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5Z" fill="#D4A32A"/>
            </svg>
            <div className="w-2 h-2 rounded-full" style={{ background: "#D4A32A" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #D4A32A, transparent)" }} />
          </div>
        </motion.div>

        {/* Steps grid with connectors */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          {steps.map((s, i) => (
            <>
              <StepCard
                key={s.step}
                s={s}
                index={i}
                isActive={activeStep === i}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
              />
              {i < steps.length - 1 && (
                <ConnectorArrow key={`arrow-${i}`} active={isInView} />
              )}
            </>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-3 text-sm font-medium" style={{ color: "#D4A32A" }}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5Z" fill="#D4A32A" opacity="0.7"/>
            </svg>
            <span className="tracking-wider text-xs uppercase">સારી વિચારધારા થી શરૂઆત, Solution થી સફળતા</span>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5Z" fill="#D4A32A" opacity="0.7"/>
            </svg>
          </div>
          <p className="text-xs text-muted-foreground mt-2 italic">
            "Starting with Great Vision, Success through Solution"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
