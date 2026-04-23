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
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeIn} className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.3em] text-blue font-bold mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-display mb-6">
              Solutions Designed for <span className="text-blue">Future Growth</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical mastery with creative vision to deliver software that drives real business impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative bg-white rounded-[40px] overflow-hidden border border-blue/5 shadow-xl shadow-blue/5 hover:shadow-2xl hover:shadow-blue/10 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue/80 to-transparent opacity-60" />
                  <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-[360deg]">
                    <service.icon className="w-7 h-7 text-blue" />
                  </div>
                </div>

                <div className="p-10">
                  <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl -z-10 group-hover:bg-gold/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
