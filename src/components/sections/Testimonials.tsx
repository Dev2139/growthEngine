import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { FaStar, FaQuoteRight, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Romang Patel",
    role: "Owner, Romang Patel and Assosiates",
    quote: "The strategic insights and technical execution provided by Devdhara Software Solutions have been pivotal in scaling our consultancy. They delivered a solution that perfectly aligns with our vision for digital excellence.",
    rating: 5,
  },
  {
    name: "Alpeshbhai Patel",
    role: "Owner, Omax Industries",
    quote: "In the industrial sector, reliability and efficiency are key. Devdhara Software Solutions's custom software has optimized our production tracking and streamlined our entire workflow. A truly professional team.",
    rating: 5,
  },
  {
    name: "Dharmendrabhai Patel",
    role: "Principal, Jadiyana Prathmik Shala",
    quote: "Implementing digital solutions in education can be challenging, but Devdhara Software Solutions made it seamless. Their platform has greatly enhanced our administrative efficiency and communication with parents.",
    rating: 5,
  },
  {
    name: "Jayeshbhai Patel",
    role: "Owner, MV Fluids",
    quote: "Devdhara Software Solutions understood our niche requirements perfectly. The real-time monitoring system they developed for our fluid management systems is top-notch and has given us a significant competitive edge.",
    rating: 5,
  },
  {
    name: "Narendrabhai Jayswal",
    role: "Commitee member, Jayswal Samaj",
    quote: "The community platform developed by Devdhara Software Solutions has brought our members closer than ever. It's user-friendly, secure, and has simplified our event management and outreach tremendously.",
    rating: 5,
  },
  {
    name: "Bhadresh Patel",
    role: "Alumni, Jawahar Navodaya Vidyalaya",
    quote: "Working with Devdhara Software Solutions was a transformative experience. Their ability to turn complex concepts into intuitive digital tools is unmatched. They don't just build software; they build the future of your business.",
    rating: 5,
  },
];

// Duplicate for infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: "-50%",
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
    startAnimation();
  }, [controls]);

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display">
          Trusted by <span className="text-blue">Industry Leaders</span>
        </h3>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          animate={controls}
          className="flex gap-8 px-4"
          style={{ width: "max-content" }}
        >
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-white p-10 rounded-[40px] border border-blue/5 shadow-xl shadow-blue/5 flex flex-col relative group hover:border-gold/30 transition-all duration-300"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaQuoteRight className="w-12 h-12 text-blue" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-gold" />
                ))}
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed italic mb-10 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 pt-8 border-t border-blue/5 mt-auto">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-blue/5 flex items-center justify-center border-2 border-white shadow-lg overflow-hidden">
                    <FaUserCircle className="w-full h-full text-blue/40" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue rounded-full flex items-center justify-center border-2 border-white">
                    <FaStar className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">{t.name}</div>
                  <div className="text-sm font-semibold text-blue uppercase tracking-widest leading-tight">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
