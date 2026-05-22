import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F6] pt-24 pb-12 px-6 border-t border-black/[0.04] relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section - Styled as an ultra-premium slim card */}
        <div className="relative rounded-[32px] bg-zinc-950 text-white p-8 md:p-12 mb-24 overflow-hidden border border-white/5 shadow-xl">
          {/* Subtle Glows */}
          <div className="absolute right-[-10%] top-[-20%] w-[250px] h-[250px] bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute left-[-10%] bottom-[-20%] w-[250px] h-[250px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white font-display mb-2 tracking-tight">
                Stay ahead of the <span className="font-serif-italic font-light text-gold text-3xl">curve</span>
              </h3>
              <p className="text-white/60 text-sm md:text-base font-light">
                Receive curated digital infrastructure insights and modern technology reports.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your professional email"
                className="flex-1 bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 rounded-xl px-5 h-12 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/[0.06] transition-all"
              />
              <button className="bg-white text-zinc-950 hover:bg-zinc-100 transition-colors rounded-xl h-12 px-6 font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 group shrink-0">
                Subscribe
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src="https://res.cloudinary.com/dsddldquo/image/upload/v1776953079/ak6c9bppjc7pwkgggmuv.png"
                alt="DevDhara Software Solutions"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-102"
              />
            </Link>
            <p className="text-sm text-foreground/50 leading-relaxed font-light pr-4">
              DevDhara Software Solutions is an elite software engineering and IT services studio building high-performance digital infrastructure for the modern enterprise.
            </p>
          </div>

          {/* Links Column: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-foreground/50 hover:text-gold transition-colors font-light">About Us</Link></li>
              <li><Link to="/projects" className="text-foreground/50 hover:text-gold transition-colors font-light">Portfolio</Link></li>
              <li><Link to="/pricing" className="text-foreground/50 hover:text-gold transition-colors font-light">Pricing Plans</Link></li>
              <li><Link to="/contact" className="text-foreground/50 hover:text-gold transition-colors font-light">Contact</Link></li>
            </ul>
          </div>

          {/* Links Column: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/full-stack-web" className="text-foreground/50 hover:text-gold transition-colors font-light">Web Development</Link></li>
              <li><Link to="/services/enterprise-software" className="text-foreground/50 hover:text-gold transition-colors font-light">Custom Software</Link></li>
              <li><Link to="/services/react-native" className="text-foreground/50 hover:text-gold transition-colors font-light">Mobile Apps</Link></li>
              <li><Link to="/services/product-design" className="text-foreground/50 hover:text-gold transition-colors font-light">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm font-light text-foreground/60">
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:info@devdhar.in" className="hover:text-gold transition-colors">info@devdhar.in</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+916354236105" className="hover:text-gold transition-colors">+91 63542 36105</a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-black/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-foreground/40 font-light">
            © {new Date().getFullYear()} DevDhara Software Solutions. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs font-light">
            <Link to="/privacy" className="text-foreground/40 hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-foreground/40 hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
