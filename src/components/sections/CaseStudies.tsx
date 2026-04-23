import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80&fit=crop",
    link: "/projects/ecommerce-platform"
  },
  {
    title: "HealthTech App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&fit=crop",
    link: "/projects/healthtech-app"
  },
  {
    title: "Fintech Dashboard",
    category: "Software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop",
    link: "/projects/fintech-dashboard"
  },
  {
    title: "SEO Optimization",
    category: "Digital Growth",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    link: "/projects/seo-optimization"
  }
];

const CaseStudies = () => {
  return (
    <section id="portfolio" className="py-28 px-6 bg-blue/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div variants={fadeIn} className="max-w-2xl">
              <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Our Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display">
                Featured <span className="text-blue">Work</span>
              </h3>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Link to="/projects">
                <Button className="bg-blue text-white hover:bg-blue/90 rounded-full px-8 h-12 font-bold flex gap-2">
                  View All Projects <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative h-[450px] rounded-[32px] overflow-hidden shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue/90 via-blue/20 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-gold mb-2">
                    {project.category}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h4>
                  <Link
                    to={project.link}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-blue transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
