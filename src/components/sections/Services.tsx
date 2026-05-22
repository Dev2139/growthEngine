import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  Layout, 
  Search, 
  TrendingUp, 
  Terminal, 
  ShoppingCart, 
  Settings,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    desc: "Custom-built, high-performance websites engineered for speed and conversion.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    slug: "full-stack-web"
  },
  {
    title: "Software Development",
    desc: "Enterprise-grade custom software solutions tailored to your unique business needs.",
    icon: Terminal,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
    slug: "enterprise-software"
  },
  {
    title: "Mobile App Development",
    desc: "Scalable and intuitive mobile applications for Android and iOS platforms.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    slug: "react-native"
  },
  {
    title: "UI/UX Design",
    desc: "User-centric designs that prioritize engagement and seamless digital experiences.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&fit=crop",
    slug: "product-design"
  },
  {
    title: "SEO Services",
    desc: "Data-driven SEO strategies to increase visibility and organic traffic.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&q=80&fit=crop",
    slug: "seo-services"
  },
  {
    title: "Google Ranking",
    desc: "Expert ranking strategies to get your business to the top of search results.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    slug: "google-ranking"
  },
  {
    title: "Custom IT Solutions",
    desc: "Integrated IT strategies that solve complex technical challenges.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&fit=crop",
    slug: "cloud-infra"
  },
  {
    title: "E-commerce Solutions",
    desc: "Robust online stores built to maximize sales and provide a smooth checkout.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&fit=crop",
    slug: "ecommerce"
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable 24/7 technical support and maintenance for your digital products.",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&fit=crop",
    slug: "it-consulting"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-[#F8F8F6] relative overflow-hidden">
      {/* Subtle glowing elements in the background */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeIn} className="text-center mb-24">
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-[#92680A] font-extrabold mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight text-black font-display mb-6">
              Solutions built for <span className="font-serif-italic font-normal text-[#92680A] lowercase italic">future scale</span>
            </h3>
            <p className="text-base text-black/50 max-w-2xl mx-auto leading-relaxed font-medium">
              We combine technical mastery with creative vision to deliver software that drives real business impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative bg-white/40 hover:bg-white/90 rounded-[32px] border border-black/[0.03] hover:border-black/[0.08] p-8 md:p-10 flex flex-col justify-between transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)] min-h-[320px]"
              >
                <div>
                  {/* Minimal Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-black/[0.02] border border-black/[0.04] text-black/80 flex items-center justify-center transition-all duration-500 group-hover:bg-black group-hover:text-[#F8F8F6] group-hover:scale-105">
                    <service.icon className="w-5 h-5" />
                  </div>

                  <h4 className="text-xl font-bold text-black font-display mb-3 mt-8 group-hover:text-[#92680A] transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-black/50 text-sm leading-relaxed mb-8 font-medium">
                    {service.desc}
                  </p>
                </div>

                <div>
                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group/link"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Micro hover shadow spot */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
