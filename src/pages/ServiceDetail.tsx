import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { services } from "@/data/services";
import { ArrowLeft, ArrowRight, CheckCircle2, Code2, Cpu, Rocket, ShieldCheck, HelpCircle, ChevronDown, Laptop, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AuditModal from "@/components/sections/AuditModal";
import { useState } from "react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const [auditOpen, setAuditOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar onOpenAudit={() => setAuditOpen(true)} />
        <section className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Service Under Construction</h1>
          <p className="text-muted-foreground mb-8">I'm currently building out the detailed content for {slug?.replace(/-/g, ' ')}.</p>
          <Link to="/services" className="text-gold hover:underline">View all services</Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar onOpenAudit={() => setAuditOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeIn}>
              <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold mb-8 hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" /> All Services
              </Link>
            </motion.div>

            <motion.h1 
              variants={fadeIn} 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight mb-8 text-foreground"
            >
              {service.title}
            </motion.h1>

            <motion.div variants={fadeIn} className="space-y-6 max-w-xl">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                At DevDhara, I offer <span className="text-gold">{service.title.toLowerCase()}</span> that empower businesses globally to build interactive, fast, and scalable solutions.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-10">
              <Button
                size="lg"
                onClick={() => setAuditOpen(true)}
                className="h-14 px-8 text-sm rounded-md btn-gold gap-2"
              >
                Let's Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden card-gold bg-secondary/50 p-4 shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
              />
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 bg-card border border-gold/30 p-4 rounded-xl shadow-xl hidden md:block"
              >
                <Cpu className="w-6 h-6 text-gold" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -right-6 bg-card border border-gold/30 px-5 py-3 rounded-xl shadow-xl hidden md:block"
              >
                <div className="text-xs font-bold text-gold uppercase tracking-widest">Verified Expert</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits / Features Bar */}
      <section className="section-border py-12 px-6 bg-secondary/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24">
          {service.benefits.slice(0, 3).map((benefit, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              <span className="text-sm font-semibold uppercase tracking-widest text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack & Deliverables */}
      <section className="py-24 px-6 section-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Laptop className="w-6 h-6 text-gold" />
              <h2 className="text-2xl font-semibold tracking-tight">Core Tech Stack</h2>
            </div>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              I utilize the most modern and reliable technologies to ensure your product is fast, secure, and ready for future growth.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {service.techStack?.map((tech) => (
                <div key={tech} className="p-4 rounded-xl bg-secondary/30 border border-border/50 flex items-center justify-center text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Package className="w-6 h-6 text-gold" />
              <h2 className="text-2xl font-semibold tracking-tight">Key Deliverables</h2>
            </div>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Every project comes with a comprehensive set of deliverables to ensure you have full ownership and understanding of your system.
            </p>
            <div className="space-y-4">
              {service.deliverables?.map((item) => (
                <div key={item} className="flex items-start gap-4 p-5 rounded-xl bg-card card-gold">
                  <CheckCircle2 className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process / Workflow */}
      <section className="py-24 px-6 bg-secondary/20 section-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">My Development Process</h2>
            <p className="text-muted-foreground">A rigorous, multi-stage workflow designed for quality and transparency.</p>
          </div>
          
          <div className="space-y-12">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-xl font-bold text-gold group-hover:bg-gold/10 transition-colors">
                    {i + 1}
                  </div>
                  <div className="w-px flex-1 bg-gold/10 group-last:hidden mt-4" />
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 section-border">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-16">
            <HelpCircle className="w-6 h-6 text-gold" />
            <h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {service.faqs?.map((faq, i) => (
              <div 
                key={i} 
                className={`rounded-xl border transition-all duration-300 ${openFaq === i ? 'border-gold/50 bg-secondary/20' : 'border-border/50 bg-card'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-foreground">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion */}
      <section className="section-border py-24 px-6 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-semibold tracking-tighter mb-6">Ready to scale your technical infrastructure?</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Every great product starts with a conversation. Let's discuss your requirements and how I can help you build 
            the future of your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => setAuditOpen(true)} className="h-12 px-8 btn-gold">
              Get A Technical Audit
            </Button>
            <Link to="/projects">
              <Button variant="outline" className="h-12 px-8 border-gold/30 text-gold hover:bg-gold/5">
                View Past Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <AuditModal open={auditOpen} onClose={() => setAuditOpen(false)} />
    </div>
  );
};

export default ServiceDetail;
