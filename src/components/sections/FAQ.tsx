import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

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
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue/5 border border-blue/10 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-blue" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue">Support Center</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight text-foreground font-display mb-6">
              Frequently Asked <span className="text-blue">Questions</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Find answers to common questions about our process, pricing, and specialized software engineering services.
            </p>
          </motion.div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group rounded-[32px] transition-all duration-300 border ${
                openIndex === i 
                  ? 'bg-blue/5 border-blue/20 shadow-xl shadow-blue/5' 
                  : 'bg-white border-blue/5 hover:border-blue/20 hover:shadow-lg'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <span className={`text-xl font-bold transition-colors ${openIndex === i ? 'text-blue' : 'text-foreground'}`}>
                  {faq.q}
                </span>
                <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  openIndex === i 
                    ? 'bg-blue text-white rotate-180' 
                    : 'bg-blue/5 text-blue group-hover:bg-blue group-hover:text-white'
                }`}>
                  {openIndex === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 text-lg text-muted-foreground leading-relaxed border-t border-blue/5 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
