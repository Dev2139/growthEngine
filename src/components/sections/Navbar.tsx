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
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-full max-w-5xl rounded-full border transition-all duration-500 flex items-center justify-between ${
            scrolled 
              ? "bg-[#F8F8F6]/80 backdrop-blur-xl border-black/[0.04] shadow-[0_12px_40px_rgba(0,0,0,0.03)] py-2 px-6" 
              : "bg-transparent border-transparent py-4 px-6"
          }`}
        >
          <Link to="/" className="flex items-center group">
            <img
              src="https://res.cloudinary.com/dsddldquo/image/upload/v1776953079/ak6c9bppjc7pwkgggmuv.png"
              alt="DevDhara Software Solutions"
              className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-semibold uppercase tracking-wider transition-colors hover:text-black/90 ${
                  location.pathname === link.path ? "text-black" : "text-black/50"
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
                className={`flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wider transition-colors hover:text-black/90 ${
                  location.pathname.startsWith("/services") ? "text-black" : "text-black/50"
                }`}
              >
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] pt-4"
                  >
                    <div className="bg-[#F8F8F6]/95 border border-black/[0.04] shadow-[0_30px_60px_rgba(0,0,0,0.06)] rounded-3xl overflow-hidden p-8 grid grid-cols-4 gap-6 backdrop-blur-xl">
                      {serviceCategories.map((cat) => (
                        <div key={cat.title}>
                          <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-black/40 mb-4 pb-2 border-b border-black/[0.03]">
                            {cat.title}
                          </h3>
                          <ul className="space-y-2.5">
                            {cat.services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  to={`/services/${s.slug}`}
                                  className="group flex items-center gap-2 text-[12px] text-black/60 hover:text-black transition-colors"
                                >
                                  <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold group-hover:scale-125 transition-all" />
                                  <span className="font-semibold">{s.name}</span>
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
                className={`text-[13px] font-semibold uppercase tracking-wider transition-colors hover:text-black/90 ${
                  location.pathname === link.path ? "text-black" : "text-black/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={onOpenAudit}
              className="hidden md:flex bg-black text-white hover:bg-black/90 rounded-full px-5 h-9 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-md active:scale-95 border border-black/10"
            >
              Get Free Quote
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-black/5 text-black hover:bg-black/10 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-4 right-4 z-45 lg:hidden bg-[#F8F8F6]/95 backdrop-blur-xl border border-black/[0.04] shadow-2xl rounded-3xl overflow-hidden p-6 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              {/* Home */}
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-bold uppercase tracking-wider text-black/70 hover:text-black"
              >
                Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-bold uppercase tracking-wider text-black/70 hover:text-black"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-[15px] font-bold uppercase tracking-wider text-black/70 hover:text-black"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 flex flex-col gap-3 pl-4 border-l border-black/10 mt-2">
                        {serviceCategories.map((cat) => (
                          <div key={cat.title} className="flex flex-col gap-1.5">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-black/40">{cat.title}</p>
                            <div className="flex flex-col gap-2 pl-3 border-l border-gold/30">
                              {cat.services.map((s) => (
                                <Link
                                  key={s.slug}
                                  to={`/services/${s.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="text-[13px] font-semibold text-black/60 hover:text-black"
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
                  className="text-[15px] font-bold uppercase tracking-wider text-black/70 hover:text-black"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                onClick={() => { onOpenAudit(); setMobileOpen(false); }}
                className="w-full bg-black text-white rounded-2xl h-11 font-bold text-xs tracking-wider uppercase mt-3 border border-black/10"
              >
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
