import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Layanan", path: "/services" },
    { name: "Harga", path: "/pricing" },
    { name: "Tentang", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-canvas px-4 md:px-6 py-3 border-b border-brand-canvas-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="text-brand-ink font-sans font-black text-[24px] tracking-tight">
          Kamojan<span className="text-brand-primary">Laundry</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-brand-ink font-sans text-[14px] font-semibold hover:text-brand-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
            <Button variant="primary">Hubungi Kami</Button>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-brand-ink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-canvas border-b border-brand-canvas-soft flex flex-col px-4 py-4 gap-4 shadow-lg">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-brand-ink font-sans text-[16px] font-semibold hover:text-brand-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
            <Button variant="primary" className="w-full">Hubungi Kami</Button>
          </a>
        </div>
      )}
    </nav>
  );
}
