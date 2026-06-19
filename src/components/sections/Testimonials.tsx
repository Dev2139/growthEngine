import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Romang Patel",
    role: "Owner, Romang Patel & Associates",
    quote: "The strategic insights and technical execution provided by DevDhara Technologies have been pivotal in scaling our consultancy. They delivered a solution that perfectly aligns with our vision for digital excellence.",
    rating: 5,
  },
  {
    name: "Alpeshbhai Patel",
    role: "Owner, Omax Industries",
    quote: "In the industrial sector, reliability and efficiency are key. DevDhara Technologies's custom software has optimized our production tracking and streamlined our entire workflow. A truly professional team.",
    rating: 5,
  },
  {
    name: "Dharmendrabhai Patel",
    role: "Principal, Jadiyana Prathmik Shala",
    quote: "Implementing digital solutions in education can be challenging, but DevDhara Technologies made it seamless. Their platform has greatly enhanced our administrative efficiency and communication with parents.",
    rating: 5,
  },
  {
    name: "Jayeshbhai Patel",
    role: "Owner, MV Fluids",
    quote: "DevDhara Technologies understood our niche requirements perfectly. The real-time monitoring system they developed for our fluid management systems is top-notch and has given us a significant competitive edge.",
    rating: 5,
  },
  {
    name: "Narendrabhai Jayswal",
    role: "Committee Member, Jayswal Samaj",
    quote: "The community platform developed by DevDhara Technologies has brought our members closer than ever. It's user-friendly, secure, and has simplified our event management and outreach tremendously.",
    rating: 5,
  },
  {
    name: "Bhadresh Patel",
    role: "Alumni, Jawahar Navodaya Vidyalaya",
    quote: "Working with DevDhara Technologies was a transformative experience. Their ability to turn complex concepts into intuitive digital tools is unmatched. They don't just build software; they build the future of your business.",
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
  const row1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const row2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];

  const trackVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const renderCard = (t: typeof testimonials[0], i: number) => {
    const initials = t.name
      .split(" ")
      .map((n) => n[0])
      .join("");
    const isDarkGradient = [1, 2, 3, 4].includes(i % 6);
    return (
      <div
        key={i}
        className="card-premium-modern p-8 md:p-10 rounded-[32px] flex flex-col justify-between relative group overflow-hidden w-[310px] md:w-[410px] shrink-0"
      >
        {/* Accent glow on hover */}
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div>
          <div className="flex gap-1 mb-6">
            {[...Array(t.rating)].map((_, idx) => (
              <FaStar key={idx} className="w-3 h-3 text-gold" />
            ))}
          </div>

          <p className="font-serif-italic text-lg md:text-xl text-foreground/90 font-light leading-relaxed mb-8 relative z-10">
            "{t.quote}"
          </p>
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-black/[0.04] mt-auto">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-tr ${getAvatarGradient(
              t.name
            )} flex items-center justify-center font-display text-[10px] font-semibold tracking-wider border border-white/40 shadow-sm ${
              isDarkGradient ? "text-white" : "text-zinc-800"
            }`}
          >
            {initials}
          </div>
          <div>
            <div className="text-sm font-bold text-foreground tracking-tight">{t.name}</div>
            <div className="text-[9px] font-bold text-gold uppercase tracking-[0.15em] mt-0.5">
              {t.role}
            </div>
          </div>
        </div>
      </div>
    );
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

      <div className="max-w-[100vw] overflow-x-hidden relative z-10 space-y-8 pause-on-hover">
        {/* Row 1: Scrolling Left */}
        <motion.div
          variants={trackVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
        >
          <div className="flex gap-8 py-4 animate-scroll-left min-w-max px-4">
            {row1.map((t, i) => renderCard(t, i))}
          </div>
        </motion.div>

        {/* Row 2: Scrolling Right */}
        <motion.div
          variants={trackVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
        >
          <div className="flex gap-8 py-4 animate-scroll-right min-w-max px-4">
            {row2.map((t, i) => renderCard(t, i + 3))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
