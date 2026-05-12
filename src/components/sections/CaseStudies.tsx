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
    <section id="portfolio" className="py-28 bg-blue/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Our Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display">
              Featured <span className="text-blue">Work</span>
            </h3>
          </div>
          <div>
            <Link to="/projects">
              <Button className="bg-blue text-white hover:bg-blue/90 rounded-full px-8 h-12 font-bold flex gap-2 shadow-lg shadow-blue/20">
                View All Projects <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-blue/5 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-blue/5 to-transparent z-10" />

        <motion.div
          animate={controls}
          className="flex gap-6 px-4"
          style={{ width: "max-content" }}
        >
          {duplicatedProjects.map((project, i) => (
            <motion.div
              key={i}
              className="w-[300px] md:w-[400px] flex-shrink-0 group relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue/95 via-blue/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                  {project.category}
                </div>
                <h4 className="text-2xl font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h4>
                <Link
                  to={`/projects/${project.slug}`}
                  className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 hover:bg-gold hover:text-blue hover:border-gold transition-all duration-300 shadow-xl"
                >
                  <ExternalLink className="w-6 h-6" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
