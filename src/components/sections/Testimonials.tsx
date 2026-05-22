import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Romang Patel",
    role: "Owner, Romang Patel & Associates",
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
    role: "Committee Member, Jayswal Samaj",
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

const getAvatarGradient = (name: string) => {
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const gradients = [
    "from-amber-100 to-gold",
    "from-blue-200 to-blue-900",
    "from-amber-200 to-amber-700",
    "from-slate-200 to-slate-800",
    "from-indigo-200 to-indigo-900",
    "from-yellow-100 to-gold",
  ];
  return gradients[hash % gradients.length];
};

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-32 bg-[#F8F8F6] relative overflow-hidden grid-pattern-premium border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display max-w-2xl mx-auto leading-[1.15]">
            Trusted by <span className="font-serif-italic font-light text-gold text-5xl">visionary</span> leaders
          </h2>
          <p className="text-sm text-foreground/50 tracking-wide mt-4 uppercase">
            Real feedback from our partners across diverse industries
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            const isDarkGradient = [1, 2, 3, 4].includes(i % 6);
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="card-premium-modern p-10 md:p-12 rounded-[32px] flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div>
                  <div className="flex gap-1 mb-8">
                    {[...Array(t.rating)].map((_, idx) => (
                      <FaStar key={idx} className="w-3.5 h-3.5 text-gold" />
                    ))}
                  </div>

                  <p className="font-serif-italic text-2xl text-foreground/90 font-light leading-relaxed mb-12 relative z-10">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-8 border-t border-black/[0.04] mt-auto">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-tr ${getAvatarGradient(
                      t.name
                    )} flex items-center justify-center font-display text-xs font-semibold tracking-wider border border-white/40 shadow-sm ${
                      isDarkGradient ? "text-white" : "text-zinc-800"
                    }`}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground tracking-tight">{t.name}</div>
                    <div className="text-[11px] font-bold text-gold uppercase tracking-[0.15em] mt-0.5">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
