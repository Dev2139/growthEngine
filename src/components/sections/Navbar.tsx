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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/projects" },
    { name: "Partners", path: "/partners" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-scrolled py-3 shadow-md" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="https://res.cloudinary.com/dsddldquo/image/upload/v1776953079/ak6c9bppjc7pwkgggmuv.png"
              alt="DevDhara Software Solutions"
              className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-blue ${
                  location.pathname === link.path ? "text-blue" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Mega Menu */}
            <div
              className="relative h-10 flex items-center"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors hover:text-blue ${
                  location.pathname.startsWith("/services") ? "text-blue" : "text-foreground/80"
                }`}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[850px] pt-4"
                  >
                    <div className="bg-white border border-blue/5 shadow-2xl rounded-2xl overflow-hidden p-8 grid grid-cols-4 gap-8 glass">
                      {serviceCategories.map((cat) => (
                        <div key={cat.title}>
                          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue/40 mb-5 pb-2 border-b border-blue/5">
                            {cat.title}
                          </h3>
                          <ul className="space-y-3">
                            {cat.services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  to={`/services/${s.slug}`}
                                  className="group flex items-center gap-2 text-[13px] text-foreground/70 hover:text-blue transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold group-hover:scale-125 transition-all" />
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

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-blue ${
                  location.pathname === link.path ? "text-blue" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={onOpenAudit}
              className="hidden md:flex bg-blue text-white hover:bg-blue/90 rounded-full px-6 h-11 font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue/20"
            >
              Get Free Quote
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-blue/5 text-blue hover:bg-blue/10 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-blue/5 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {/* Home */}
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold text-foreground/80 hover:text-blue"
                >
                  Home
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-semibold text-foreground/80 hover:text-blue"
                >
                  About
                </Link>

                {/* Services Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between text-lg font-semibold text-foreground/80 hover:text-blue"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 flex flex-col gap-4 pl-4 border-l-2 border-blue/10">
                          {serviceCategories.map((cat) => (
                            <div key={cat.title} className="flex flex-col gap-2">
                              <p className="text-sm font-bold text-blue">{cat.title}</p>
                              <div className="flex flex-col gap-2.5 pl-3 border-l border-gold/20">
                                {cat.services.map((s) => (
                                  <Link
                                    key={s.slug}
                                    to={`/services/${s.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[13px] font-medium text-foreground/60 hover:text-blue"
                                  >
                                    {s.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Remaining Links */}
                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-semibold text-foreground/80 hover:text-blue"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  onClick={() => { onOpenAudit(); setMobileOpen(false); }}
                  className="w-full bg-blue text-white rounded-xl h-12 font-bold mt-4"
                >
                  Get Free Quote
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
