import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "Owner, Metro Dental Group", quote: "Within 60 days, our phone was ringing off the hook. GrowthEngine didn't just optimize our profile — they built a system that prints appointments." },
  { name: "James Chen", role: "CEO, Summit Plumbing Co.", quote: "We went from invisible on Google to the #1 result in our area. The ROI has been unreal. Best investment we've made in 10 years." },
  { name: "Maria Rodriguez", role: "Founder, Luxe Home Realty", quote: "Professional, data-driven, and relentless. They delivered exactly what they promised — more leads, better rankings, real growth." },
  { name: "Jayesh Patel", role: "Owner, MV Fluid", quote: "GrowthEngine transformed how we acquire clients. We went from chasing leads to leads chasing us. The system is automated, scalable, and it works exactly as promised. Best investment we've made." },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.p variants={fadeIn} className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Testimonials
          </motion.p>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-semibold tracking-tighter mb-16 text-balance text-foreground">
            What Our Clients Say.
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="card-depth rounded-2xl bg-card p-10 md:p-14 text-center">
            <Quote className="w-8 h-8 text-border mx-auto mb-8" />
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 text-pretty">
              "{testimonials[active].quote}"
            </p>
            <div className="text-sm font-medium text-foreground">{testimonials[active].name}</div>
            <div className="text-xs text-muted-foreground mt-1">{testimonials[active].role}</div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === active ? "bg-foreground" : "bg-border"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
