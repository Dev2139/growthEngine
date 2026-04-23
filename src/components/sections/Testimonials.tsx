import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, FinTech Global",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "DevDhara Software Solutions transformed our legacy infrastructure into a modern, lightning-fast platform. Their technical expertise is unmatched, and they delivered exactly what was promised.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "CTO, HealthSync",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Working with them was a game-changer for our app development. The architecture is clean, scalable, and our user engagement has increased by 60% since the new launch.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Product Lead, RetailOne",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Professional, efficient, and innovative. They didn't just build our e-commerce site; they optimized the entire user journey for maximum conversion. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jayesh Patel",
    role: "Founder, TechScale",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The real-time dashboard they built for us has revolutionized how we make business decisions. It's fast, reliable, and looks incredible. A top-tier engineering partner.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeIn} className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display mb-6">
              Trusted by <span className="text-blue">Industry Leaders</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-white p-10 rounded-[40px] border border-blue/5 shadow-xl shadow-blue/5 flex flex-col relative group hover:border-gold/30 transition-all duration-300"
              >
                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-blue" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                <p className="text-lg text-foreground/80 leading-relaxed italic mb-10 relative z-10">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-blue/5 mt-auto">
                  <div className="relative">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue rounded-full flex items-center justify-center border-2 border-white">
                      <Star className="w-3 h-3 text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">{t.name}</div>
                    <div className="text-sm font-semibold text-blue uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
