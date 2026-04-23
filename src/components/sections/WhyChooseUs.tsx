import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Zap, Cpu, CircleDollarSign, Users, Expand, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "We prioritize efficiency without sacrificing quality, ensuring your project hits the market on time.",
    color: "bg-blue/10 text-blue"
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "Built with the latest high-performance frameworks to ensure your software is future-proof.",
    color: "bg-gold/10 text-gold"
  },
  {
    icon: CircleDollarSign,
    title: "Affordable Pricing",
    desc: "Premium quality software solutions delivered at competitive rates that fit your business budget.",
    color: "bg-blue/10 text-blue"
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "A dedicated group of senior developers and designers focused on your product's success.",
    color: "bg-gold/10 text-gold"
  },
  {
    icon: Expand,
    title: "Scalable Solutions",
    desc: "Every system we design is architected to handle growth and complex enterprise requirements.",
    color: "bg-blue/10 text-blue"
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "We provide continuous monitoring and 24/7 technical support to keep your systems running smoothly.",
    color: "bg-gold/10 text-gold"
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT — Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&fit=crop"
                alt="Our Expert Team"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue/40 to-transparent" />
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-2xl border border-blue/5 hidden md:block"
            >
              <div className="text-center">
                <div className="text-6xl font-black text-gold mb-1 font-display">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Quality Guarantee</div>
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
              <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Why DevDhara</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display mb-6">
                Your Success is <span className="text-blue">Our Mission</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just build software; we build partnerships. Our process is designed to ensure maximum transparency, efficiency, and elite technical execution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-3xl bg-white border border-blue/5 shadow-xl shadow-blue/5 hover:border-gold/30 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${r.color}`}>
                    <r.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{r.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
