import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Inici", href: "#inici" },
  { label: "Projecte", href: "#projecte" },
  { label: "Equip", href: "#equip" },
  { label: "Carina", href: "#carina" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contacte", href: "#contacte" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container flex items-center justify-between h-16">
        <button onClick={() => scrollTo("#inici")} className="font-display font-bold text-xl text-primary">
          Mà Girònica
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
            >
              {l.label}
            </button>
          ))}
          <Button size="sm" className="ml-3" onClick={() => scrollTo("#contacte")}>
            Col·labora
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background pb-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left px-6 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
          <div className="px-6 pt-2">
            <Button size="sm" className="w-full" onClick={() => scrollTo("#contacte")}>
              Col·labora
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
