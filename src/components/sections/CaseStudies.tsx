import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { projects } from "@/data/projects";

// Duplicate for infinite scroll
const duplicatedProjects = [...projects, ...projects];

const CaseStudies = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: "-50%",
        transition: {
          duration: 35, // Slightly slower than testimonials as projects have more detail
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
    startAnimation();
  }, [controls]);

  return (
    <section id="portfolio" className="py-32 bg-[#F8F8F6] overflow-hidden relative border-t border-black/[0.02]">
      {/* Dynamic background light streaks */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-[#92680A] font-extrabold mb-4">Our Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight text-black font-display">
              Selected <span className="font-serif-italic font-normal text-[#92680A] lowercase italic">masterpieces</span>
            </h3>
          </div>
          <div>
            <Link to="/projects">
              <Button className="bg-black text-white hover:bg-black/90 rounded-full px-7 h-12 font-semibold text-xs tracking-wider uppercase flex gap-2.5 shadow-md active:scale-95 transition-all border border-black/10">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Soft edge blur overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#F8F8F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#F8F8F6] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={controls}
          className="flex gap-8 px-4"
          style={{ width: "max-content" }}
        >
          {duplicatedProjects.map((project, i) => (
            <motion.div
              key={i}
              className="w-[320px] md:w-[440px] flex-shrink-0 group relative h-[520px] rounded-[40px] overflow-hidden border border-black/[0.03] shadow-[0_15px_40px_rgba(0,0,0,0.03)] bg-white/20 transition-all duration-500"
            >
              {/* Zooming Cover Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
              
              {/* Subtle top shading gradient */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

              {/* Floating Client Monogram Badge */}
              <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#F8F8F6]/85 border border-white/40 backdrop-blur-md shadow-md flex items-center justify-center font-bold text-xs tracking-widest text-black/80 pointer-events-none">
                {project.client.slice(0, 2).toUpperCase()}
              </div>

              {/* Floating Glass description capsule at the bottom */}
              <div className="absolute bottom-6 inset-x-6 p-6 rounded-[28px] bg-white/70 backdrop-blur-xl border border-white/30 shadow-[0_15px_35px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                <div>
                  <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#92680A] mb-1.5">
                    {project.category}
                  </div>
                  <h4 className="text-base font-bold text-black leading-snug font-display mb-4">
                    {project.title.split(" - ")[0]}
                  </h4>
                </div>
                
                <div className="flex items-center justify-between border-t border-black/[0.04] pt-4">
                  <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Explore System</span>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="w-9 h-9 rounded-full bg-black text-[#F8F8F6] flex items-center justify-center transition-all duration-300 group-hover:bg-[#92680A] group-hover:text-black shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
