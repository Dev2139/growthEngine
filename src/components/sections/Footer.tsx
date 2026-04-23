import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 border-t border-blue/5">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-blue rounded-[40px] p-8 md:p-16 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white font-display mb-4">
                Stay Ahead of the <span className="text-gold">Curve</span>
              </h3>
              <p className="text-white/70 text-lg">
                Subscribe to our newsletter for the latest tech insights and project updates.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-2xl px-6 h-14 focus:outline-none focus:ring-2 focus:ring-gold transition-all"
              />
              <Button className="bg-gold text-blue hover:bg-gold/90 rounded-2xl h-14 px-8 font-bold flex gap-2 group">
                Subscribe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-8 group">
              <img
                src="https://res.cloudinary.com/dsddldquo/image/upload/v1776953079/ak6c9bppjc7pwkgggmuv.png"
                alt="DevDhara Software Solutions"
                className="h-16 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8">
              DevDhara Software Solutions is a premium software engineering and IT services studio in Ahmedabad, Gujarat. We build digital infrastructure for the modern enterprise.
            </p>

          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-muted-foreground hover:text-blue transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-blue transition-colors">Pricing Plans</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-8">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/full-stack-web" className="text-muted-foreground hover:text-blue transition-colors">Web Development</Link></li>
              <li><Link to="/services/enterprise-software" className="text-muted-foreground hover:text-blue transition-colors">Custom Software</Link></li>
              <li><Link to="/services/react-native" className="text-muted-foreground hover:text-blue transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services/product-design" className="text-muted-foreground hover:text-blue transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-8">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-blue shrink-0" />
                <a href="mailto:info@devdhar.in" className="text-muted-foreground hover:text-blue transition-colors">info@devdhar.in</a>
              </li>
              <li className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-blue shrink-0" />
                <a href="tel:+916354236105" className="text-muted-foreground hover:text-blue transition-colors">+91 63542 36105</a>
              </li>
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-blue shrink-0" />
                <span className="text-muted-foreground">Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-blue/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevDhara Software Solutions. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-blue">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-blue">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
