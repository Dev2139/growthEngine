import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { serviceCategories } from "@/data/services";

interface NavbarProps {
  onOpenAudit: () => void;
}

const Navbar = ({ onOpenAudit }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || megaMenuOpen ? "nav-scrolled" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dsddldquo/image/upload/v1773903739/hqiknrupk4zpafsflgyn.png"
              alt="DevDhara"
              className="h-20 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            <Link to="/" className={`text-sm transition-colors ${location.pathname === "/" ? "text-gold font-medium" : "text-muted-foreground hover:text-foreground"}`}>Home</Link>
            
            {/* Mega Menu Trigger */}
            <div 
              className="relative h-16 flex items-center"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm transition-colors ${location.pathname.startsWith("/services") ? "text-gold font-medium" : "text-muted-foreground hover:text-foreground"}`}
              >
                Services <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-16 left-1/2 -translate-x-1/2 w-[900px] bg-card border border-gold/20 shadow-2xl rounded-2xl overflow-hidden p-8"
                  >
                    <div className="grid grid-cols-4 gap-8">
                      {serviceCategories.map((cat) => (
                        <div key={cat.title}>
                          <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6 pb-2 border-b border-border/50">
                            {cat.title}
                          </h3>
                          <ul className="space-y-4">
                            {cat.services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  to={`/services/${s.slug}`}
                                  className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-secondary group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                                    <s.icon className="w-4 h-4 text-muted-foreground group-hover:text-gold" />
                                  </div>
                                  <span className="font-medium">{s.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/results" className={`text-sm transition-colors ${location.pathname === "/results" ? "text-gold font-medium" : "text-muted-foreground hover:text-foreground"}`}>Results</Link>
            <Link to="/about" className={`text-sm transition-colors ${location.pathname === "/about" ? "text-gold font-medium" : "text-muted-foreground hover:text-foreground"}`}>About</Link>
            <Link to="/projects" className={`text-sm transition-colors ${location.pathname === "/projects" ? "text-gold font-medium" : "text-muted-foreground hover:text-foreground"}`}>Projects</Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={onOpenAudit}
              size="sm"
              className="hidden md:flex btn-gold rounded-md text-sm px-5 h-9 border-0"
            >
              Get Free Audit
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center"
            >
              {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-16 z-40 bg-background border-b border-border md:hidden overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              <Link to="/" className="text-base text-muted-foreground">Home</Link>
              <div className="py-2 border-y border-border/50">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold mb-4">Services</p>
                <div className="grid grid-cols-1 gap-4">
                  {serviceCategories.map(cat => (
                    <div key={cat.title}>
                      <p className="text-xs font-semibold text-foreground mb-3">{cat.title}</p>
                      <div className="grid grid-cols-1 gap-2 pl-2 border-l border-border/50">
                        {cat.services.map(s => (
                          <Link key={s.slug} to={`/services/${s.slug}`} className="text-sm text-muted-foreground">{s.name}</Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/results" className="text-base text-muted-foreground">Results</Link>
              <Link to="/about" className="text-base text-muted-foreground">About</Link>
              <Link to="/projects" className="text-base text-muted-foreground">Projects</Link>
              <Button onClick={() => { onOpenAudit(); setMobileOpen(false); }} className="btn-gold rounded-md text-sm px-5 h-9 border-0 w-full mt-2">
                Get Free Audit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
