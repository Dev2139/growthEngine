import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="section-border py-14 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center mb-4">
              <img
                src="https://res.cloudinary.com/dsddldquo/image/upload/v1773903739/hqiknrupk4zpafsflgyn.png"
                alt="DevDhara"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Software, web, and app development studio. We build digital solutions for
              businesses that demand results.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Navigation
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Projects", href: "/projects", internal: true },
                { label: "Services", href: "/#services" },
                { label: "Results", href: "/#results" },
                { label: "About", href: "/#about" },
              ].map((item) =>
                item.internal ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@devdhara.in"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                hello@devdhara.in
              </a>
              <a
                href="tel:+911234567890"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                +91 12345 67890
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderTop: "1px solid hsl(var(--border))" }}
        >
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevDhara. All rights reserved.
          </div>
          <div className="flex gap-5">
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
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
