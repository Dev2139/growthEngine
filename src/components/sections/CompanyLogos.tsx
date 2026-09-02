import { motion } from "framer-motion";

const companies = [
  { name: "Omax Industries", initials: "OI", logo: "https://res.cloudinary.com/dsddldquo/image/upload/v1777916054/nzyzdizrpbbrkhldn1br.png" },
  { name: "Romang Patel & Assoc.", initials: "RP", logo: "https://res.cloudinary.com/dsddldquo/image/upload/v1755931760/gcepe8ymvf9oti4b66q4.png" },
  { name: "ChemX Pumps", initials: "CP" },
  { name: "MV Fluids", initials: "MV" },
  { name: "SavioERP", initials: "SE" },
  { name: "A World Marketing", initials: "AW" },
  { name: "Jaiswal Samaj", initials: "JS" },
  { name: "JNV Association", initials: "JN" },
];

const CompanyLogos = () => {
  return (
    <section className="py-16 bg-[#F8F8F6] border-t border-black/[0.03] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-black/40 mb-10"
        >
          Companies we've helped grow
        </motion.p>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          {/* Edge fade gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F8F6] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F8F6] to-transparent z-10 pointer-events-none" />

          {/* Infinite scrolling track */}
          <motion.div
            animate={{
              x: [0, -800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-8 whitespace-nowrap px-4 py-2"
            style={{ width: "max-content" }}
          >
            {[...companies, ...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="group flex-shrink-0 w-52 h-20 flex items-center justify-center p-4 rounded-3xl card-premium-modern transition-all duration-300 hover:border-gold/20"
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-12 max-w-[85%] object-contain filter grayscale saturate-[0.8] opacity-70 group-hover:grayscale-0 group-hover:saturate-[1.2] group-hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-xl font-extrabold text-black/80 font-display tracking-widest group-hover:text-gold-dark transition-colors mb-0.5">
                      {company.initials}
                    </div>
                    <div className="text-[10px] font-bold text-black/40 uppercase tracking-wider group-hover:text-black/60 transition-colors">
                      {company.name}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
