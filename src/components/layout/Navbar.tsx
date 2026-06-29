import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full px-4 md:px-6 border-b transition-all duration-300",
      scrolled 
        ? "py-2 bg-brand-canvas/95 backdrop-blur-md border-brand-canvas-soft shadow-sm" 
        : "py-4 bg-brand-canvas border-transparent"
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-primary-pale p-2 rounded-xl text-brand-positive-deep group-hover:bg-brand-primary-neutral transition-colors duration-300">
            <Droplets size={24} strokeWidth={2.5} />
          </div>
          <span className="text-brand-ink font-sans font-black text-[22px] tracking-tight">
            Kamojan<span className="text-brand-positive-deep">Laundry</span>
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-brand-ink font-sans text-[14px] font-semibold transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-canvas border-b border-brand-canvas-soft flex flex-col px-4 py-4 gap-4 shadow-lg"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
