import { motion } from "framer-motion";

const companies = [
  { name: "TechCorp", initials: "TC" },
  { name: "InnovateCo", initials: "IC" },
  { name: "DigitalHub", initials: "DH" },
  { name: "CloudBase", initials: "CB" },
  { name: "NextGen", initials: "NG" },
  { name: "OmniSoft", initials: "OS" },
  { name: "VisionAI", initials: "VA" },
  { name: "DataFlow", initials: "DF" },
];

const CompanyLogos = () => {
  return (
    <section className="py-20 px-6 border-t border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-12"
        >
          Companies we've helped grow
        </motion.p>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos */}
          <motion.div
            className="flex gap-8 py-8"
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* First set of logos */}
            {companies.map((company, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-20 flex items-center justify-center"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg border border-border/50 hover:border-border transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-secondary-foreground mb-1">
                      {company.initials}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {companies.map((company, i) => (
              <div
                key={`duplicate-${i}`}
                className="flex-shrink-0 w-48 h-20 flex items-center justify-center"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg border border-border/50 hover:border-border transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-secondary-foreground mb-1">
                      {company.initials}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
