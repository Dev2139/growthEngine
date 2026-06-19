import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, CheckCircle, Award, Clock } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon: any;
  delay?: number;
}

const Counter = ({ value, suffix = "", label, icon: Icon, delay = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-8 bg-white rounded-[40px] border border-blue/5 shadow-2xl shadow-blue/5 hover:border-gold/30 transition-all duration-300 group"
    >
      <div className="w-16 h-16 rounded-2xl bg-blue/5 flex items-center justify-center text-blue mb-6 group-hover:scale-110 group-hover:bg-blue group-hover:text-white transition-all duration-300">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-4xl md:text-5xl font-black text-foreground mb-2 font-display">
        {count}{suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-blue transition-colors">
        {label}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter 
            value={25} 
            suffix="+" 
            label="Projects Delivered" 
            icon={CheckCircle} 
            delay={0.1}
          />
          <Counter 
            value={100} 
            suffix="%" 
            label="Client Satisfaction" 
            icon={Users} 
            delay={0.2}
          />
          <Counter 
            value={2} 
            suffix="+" 
            label="Years of Innovation" 
            icon={Award} 
            delay={0.3}
          />
          <Counter 
            value={24} 
            suffix="/7" 
            label="Expert Support" 
            icon={Clock} 
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
