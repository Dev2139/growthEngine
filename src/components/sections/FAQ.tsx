import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
    <section className="py-28 px-6 bg-blue/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display">
            Frequently Asked <span className="text-blue">Questions</span>
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-blue/5 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left transition-colors hover:bg-blue/5"
              >
                <span className="text-lg font-bold text-foreground pr-8">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-blue text-white rotate-180' : 'bg-blue/5 text-blue'}`}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
