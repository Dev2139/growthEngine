import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Metro Dental Group",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Within 60 days our phone was ringing off the hook. They didn't just optimize our profile — they built a system that consistently delivers new patients every single month.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "CEO, Summit Plumbing Co.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "We went from invisible on Google to the #1 result in our area. The ROI has been exceptional — easily the best investment we've made in the last ten years.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Founder, Luxe Home Realty",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Professional, data-driven, and accountable. They delivered exactly what they promised — more leads, better rankings, and consistent revenue growth month over month.",
    rating: 5,
  },
  {
    name: "Jayesh Patel",
    role: "Owner, MV Fluid Systems",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "We went from chasing leads to leads chasing us. The whole system is automated, scalable, and continues to work exactly as promised, months later.",
    rating: 5,
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C8941F">
        <path d="M7 0l1.8 4.9H14l-4.1 3 1.6 4.9L7 10.1 2.5 12.8l1.6-4.9L0 4.9h5.2z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="section-border py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <motion.p
            variants={fadeIn}
            className="text-xs uppercase tracking-[0.2em] text-gold mb-3 font-medium"
          >
            Testimonials
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-lg"
          >
            Trusted by businesses across the country.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-card card-gold rounded-xl p-7 flex flex-col"
            >
              <Stars />
              <p className="text-sm text-foreground leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
