import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Search, MapPin, Zap, Star, Globe, Smartphone } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "GBP Optimization",
    desc: "Claim the Map Pack with precision-tuned profiles that put you ahead of every local competitor.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80&fit=crop",
  },
  {
    icon: MapPin,
    title: "Local SEO Ranking",
    desc: "Rank for the keywords that drive real phone calls and foot traffic — not just impressions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop",
  },
  {
    icon: Zap,
    title: "Lead Generation",
    desc: "Automated funnels that convert anonymous visitors into booked appointments, every day.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop",
  },
  {
    icon: Star,
    title: "Review Management",
    desc: "Build and maintain a 5-star reputation across every platform, completely on autopilot.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&fit=crop",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance sites engineered for conversion, speed, and long-term sustainable growth.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&fit=crop",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Custom mobile and web apps that scale your operations and delight your customers.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-border py-24 px-6">
      <div className="max-w-7xl mx-auto">
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
              What We Do
            </motion.p>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-lg"
            >
              Everything you need to dominate local search.
            </motion.h2>
          </div>
          <motion.p
            variants={fadeIn}
            className="text-sm text-muted-foreground max-w-xs leading-relaxed"
          >
            A complete digital growth stack — from ranking to lead capture to customer retention.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="group rounded-xl overflow-hidden card-gold bg-card hover:translate-y-[-3px] transition-transform duration-200"
            >
              {/* Image */}
              <div className="h-44 overflow-hidden relative">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-9 h-9 rounded-md bg-card/80 backdrop-blur-sm flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-gold" />
                </div>
              </div>
              {/* Text */}
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
