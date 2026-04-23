import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white text-blue rounded-full shadow-2xl flex items-center justify-center border border-blue/5 hover:bg-blue hover:text-white transition-all group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/916354236105"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all group"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-foreground text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl border border-blue/5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </motion.a>

      <motion.a
        href="tel:+916354236105"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue text-white rounded-full shadow-[0_10px_40px_-10px_rgba(30,58,138,0.6)] flex items-center justify-center transition-all group lg:hidden"
      >
        <PhoneCall className="w-6 h-6" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
