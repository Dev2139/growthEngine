import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="https://res.cloudinary.com/dsddldquo/image/upload/v1773903739/hqiknrupk4zpafsflgyn.png" 
                alt="GrowthAxis"
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Enterprise app development studio. We build scalable mobile and web applications for companies that demand excellence.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-4">Links</div>
            <div className="flex flex-col gap-3">
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="/#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Results</a>
              <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-4">Contact</div>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>hello@growthengine.io</span>
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} GrowthAxis. All rights reserved.
          </div>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
