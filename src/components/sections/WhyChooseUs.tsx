import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Code2, Cpu, ShieldCheck, Zap } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Modern Tech Stack",
    desc: "I build with the latest high-performance frameworks like React, Next.js, and Node.js to ensure your software is fast and future-proof.",
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    desc: "I don't just build for today. Every system I design is architected to handle growth and complex enterprise requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    desc: "From encrypted data storage to secure API endpoints, I prioritize the safety of your business and user data at every layer.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    desc: "Zero-bloat code and optimized infrastructure mean your applications load instantly and run smoothly on any device.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="services" className="section-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] lg:h-auto lg:min-h-[600px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&fit=crop"
              alt="Code and Engineering"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay to blend into right side */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, hsl(var(--background)) 100%)",
              }}
            />
            {/* Stats card floating on image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-8 left-8 right-12 bg-card/95 backdrop-blur-md rounded-xl p-5"
              style={{ border: "1px solid rgba(200,148,31,0.2)" }}
            >
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">Engineering Excellence</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: "100%", l: "Code Quality" },
                  { v: "99.9%", l: "Uptime" },
                  { v: "24/7", l: "Monitoring" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-xl font-bold text-gold tabular-nums">{s.v}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="px-8 lg:px-14 py-20 flex flex-col justify-center"
          >
            <motion.p
              variants={fadeIn}
              className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-medium"
            >
              Why Partner With Me
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4"
            >
              High-Performance IT.
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-sm text-muted-foreground leading-relaxed mb-10"
            >
              I am a specialist software engineer focused on building robust digital products. 
              You aren't hiring a marketing agency; you're partnering with a technical founder 
              who builds the infrastructure that powers modern business.
            </motion.p>

            <div className="space-y-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-4 p-5 rounded-xl bg-card card-gold"
                >
                  <div className="w-9 h-9 shrink-0 rounded-md bg-secondary flex items-center justify-center mt-0.5">
                    <r.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
