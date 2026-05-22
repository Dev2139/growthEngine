import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical software project take?",
    a: "The timeline depends on the project's complexity. A standard web application typically takes 6-12 weeks, while larger enterprise software can take 3-6 months. We prioritize efficient delivery without compromising quality."
  },
  {
    q: "Do you provide ongoing support after the project is launched?",
    a: "Absolutely. We offer various maintenance and support packages, including 24/7 monitoring, security updates, and feature enhancements to ensure your software remains high-performing."
  },
  {
    q: "Can you help with mobile app development for both iOS and Android?",
    a: "Yes, we specialize in cross-platform development (using React Native and Flutter) as well as native apps, ensuring your product reach the maximum audience with a single codebase or native performance."
  },
  {
    q: "How do you handle data security and privacy?",
    a: "Security is built into our core process. We implement industry-standard encryption, secure API endpoints, and follow best practices for data protection (like GDPR/HIPAA compliance where necessary)."
  },
  {
    q: "What is your pricing model for custom IT solutions?",
    a: "We offer both project-based fixed pricing and dedicated team models. Our pricing is competitive and depends on the scope, technology stack, and timeline of your specific requirements."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#F8F8F6] relative overflow-hidden border-t border-black/[0.03]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-4 block">
              Support Center
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display mb-6">
              Frequently Asked <span className="font-serif-italic font-light text-gold text-5xl">Questions</span>
            </h2>
            <p className="text-xs text-foreground/50 max-w-xl mx-auto leading-relaxed uppercase tracking-wider">
              Answers to common queries regarding our timeline, model, and security protocols.
            </p>
          </motion.div>
        </div>

        <div className="divide-y divide-black/[0.06] border-t border-b border-black/[0.06]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-8 text-left group transition-colors duration-300"
                >
                  <span className="text-lg md:text-xl font-bold tracking-tight text-foreground font-display pr-6 transition-colors group-hover:text-gold">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-foreground/60 transition-colors group-hover:border-gold group-hover:text-gold"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-8 pr-12 text-base md:text-lg text-foreground/60 leading-relaxed font-light">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
