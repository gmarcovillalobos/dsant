import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/dsant-logo.png";

const navLinks = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipos",   href: "#equipos" },
  { label: "Nosotros",  href: "#nosotros" },
  { label: "Contacto",  href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/97 backdrop-blur-md shadow-industrial border-b border-border" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex-shrink-0">
          <img
            src={logo}
            alt="DSANT Montacargas"
            className={`h-9 md:h-11 w-auto transition-all ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-display font-bold uppercase tracking-wider transition-colors ${scrolled ? "text-muted-foreground hover:text-primary" : "text-white/70 hover:text-white"}`}
            >
              {l.label}
            </a>
          ))}
          <Button asChild className="gradient-cta text-white border-0 font-display font-black tracking-wide hover:opacity-90 transition-opacity">
            <a href="#contacto">
              <Phone className="w-4 h-4 mr-2" />
              Cotizar ahora
            </a>
          </Button>
        </div>

        <button
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-display font-bold uppercase tracking-wider text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button asChild className="w-full gradient-cta text-white border-0 font-display font-black">
              <a href="#contacto" onClick={() => setOpen(false)}>Cotizar ahora</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
