import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const CaseStudies = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="portfolio" className="py-32 bg-[#F8F8F6] relative border-t border-black/[0.02]">
      {/* Ambient background light */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-black/40 mb-4 block">
                Our Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-black tracking-tight leading-[1.1] font-display">
                Selected <br />
                <span className="font-serif-italic italic text-gold font-light tracking-wide text-5xl md:text-6xl lg:text-[58px] block mt-1">
                  masterpieces.
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-black/50 font-display">
              <span>Elite Engineering</span>
              <span className="text-gold/60">•</span>
              <span>Custom Software</span>
              <span className="text-gold/60">•</span>
              <span>Premium Systems</span>
            </div>

            {/* Premium Dotted Divider */}
            <div className="flex gap-2 py-2">
              {[...Array(16)].map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-black/[0.1]" />
              ))}
            </div>

            <p className="text-base text-black/60 max-w-md leading-relaxed font-medium">
              Discover how we've helped businesses transform their digital presence and achieve compounding growth through elite engineering, bespoke systems, and state-of-the-art architectures.
            </p>

            <div className="pt-4">
              <Link to="/projects">
                <Button className="bg-transparent border border-black/10 hover:border-black/30 hover:bg-black/5 text-black rounded-full px-8 h-12 font-semibold text-xs tracking-wider uppercase shadow-sm active:scale-95 transition-all">
                  View all projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Luxury Grid of Real Projects */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {featuredProjects.map((p, idx) => (
                <Link
                  key={idx}
                  to={`/projects/${p.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden border border-black/[0.04] shadow-[0_12px_30px_rgba(0,0,0,0.03)] bg-white/20 mb-4">
                    {/* Background image with high quality blur */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover blur-[3px] scale-105 transition-all duration-[600ms] ease-out group-hover:scale-100 group-hover:blur-0"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-transparent" />

                    {/* Centered Vector Brand Icon Badge with Monogram or Logo Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-zinc-950/95 border border-white/10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 p-3">
                        {p.client === "Romang Patel And Associates" ? (
                          <img
                            src="https://res.cloudinary.com/dsddldquo/image/upload/v1755931760/gcepe8ymvf9oti4b66q4.png"
                            alt="Romang Patel And Associates Logo"
                            className="max-h-full max-w-full object-contain filter brightness-0 invert"
                          />
                        ) : p.client === "Omax Industries" ? (
                          <img
                            src="https://res.cloudinary.com/dsddldquo/image/upload/v1777916054/nzyzdizrpbbrkhldn1br.png"
                            alt="Omax Industries Logo"
                            className="max-h-full max-w-full object-contain filter brightness-0 invert"
                          />
                        ) : (
                          <span className="text-white font-display text-2xl font-black tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                            {p.client.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Label details */}
                  <div className="flex items-center justify-between px-2">
                    <span className="text-lg font-bold text-black group-hover:text-gold-dark transition-colors duration-300 truncate max-w-[65%]">
                      {p.client}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-black/40 text-right max-w-[35%] truncate">
                      {p.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
