import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Zap, Cpu, CircleDollarSign, Users, Expand, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "We prioritize efficiency without sacrificing quality, ensuring your project hits the market on time."
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "Built with the latest high-performance frameworks to ensure your software is future-proof."
  },
  {
    icon: CircleDollarSign,
    title: "Affordable Pricing",
    desc: "Premium quality software solutions delivered at competitive rates that fit your business budget."
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "A dedicated group of senior developers and designers focused on your product's success."
  },
  {
    icon: Expand,
    title: "Scalable Solutions",
    desc: "Every system we design is architected to handle growth and complex enterprise requirements."
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "We provide continuous monitoring and 24/7 technical support to keep your systems running smoothly."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 px-6 bg-[#F8F8F6] overflow-hidden relative border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT — Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden border border-black/[0.04] shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&fit=crop"
                alt="Our Expert Team"
                className="w-full h-auto aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F8F8F6]/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 glass-premium p-10 rounded-[36px] border border-black/[0.04] shadow-2xl hidden md:block"
            >
              <div className="text-center">
                <div className="text-5xl font-black text-foreground mb-1 font-display tracking-tight">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/45">Quality Guarantee</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeIn} className="mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">Why DevDhara</span>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display mb-6 leading-[1.15]">
                Your success is <span className="font-serif-italic font-light text-gold text-5xl">our mission</span>
              </h3>
              <p className="text-base text-foreground/50 leading-relaxed font-light">
                We don't just build software; we build partnerships. Our process is designed to ensure maximum transparency, efficiency, and elite technical execution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-8 rounded-3xl card-premium-modern relative group overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/5 text-gold flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-gold group-hover:text-zinc-950">
                    <r.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2 font-display tracking-tight">{r.title}</h4>
                  <p className="text-xs text-foreground/50 leading-relaxed font-light">
                    {r.desc}
                  </p>
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
