import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook, Droplets } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-ink py-12 px-4 md:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <span className="text-brand-canvas-soft font-sans font-black text-[22px] tracking-tight">
              Kamojan<span className="text-brand-primary">Laundry</span>
            </span>
          </Link>
          <p className="text-brand-canvas-soft font-sans text-[14px]">
            Layanan laundry bersih, rapi, dan tepat waktu untuk mahasiswa dan warga sekitar Cicantayan, Sukabumi.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-brand-canvas-soft hover:text-brand-primary">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-brand-canvas-soft hover:text-brand-primary">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-brand-canvas-soft font-sans text-[16px] font-bold">Layanan Kami</h4>
          <Link to="/services" className="text-brand-mute hover:text-brand-primary font-sans text-[14px]">Laundry Kiloan</Link>
          <Link to="/services" className="text-brand-mute hover:text-brand-primary font-sans text-[14px]">Laundry Satuan</Link>
          <Link to="/services" className="text-brand-mute hover:text-brand-primary font-sans text-[14px]">Cuci Sepatu</Link>
          <Link to="/services" className="text-brand-mute hover:text-brand-primary font-sans text-[14px]">Cuci Karpet</Link>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h4 className="text-brand-canvas-soft font-sans text-[16px] font-bold">Perusahaan</h4>
          <Link to="/about" className="text-brand-mute hover:text-brand-primary font-sans text-[14px]">Tentang Kami</Link>
          <Link to="/pricing" className="text-brand-mute hover:text-brand-primary font-sans text-[14px]">Daftar Harga</Link>
          <Link to="/blog" className="text-brand-mute hover:text-brand-primary font-sans text-[14px]">Blog</Link>
          <Link to="/faq" className="text-brand-mute hover:text-brand-primary font-sans text-[14px]">FAQ</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-brand-canvas-soft font-sans text-[16px] font-bold">Hubungi Kami</h4>
          <div className="flex items-start gap-3 text-brand-mute font-sans text-[14px]">
            <MapPin size={16} className="mt-1 flex-shrink-0" />
            <span>Jl. Raya Cicantayan No. 123, Sukabumi, Jawa Barat</span>
          </div>
          <div className="flex items-center gap-3 text-brand-mute font-sans text-[14px]">
            <Phone size={16} className="flex-shrink-0" />
            <span>+62 812 3456 7890</span>
          </div>
          <div className="flex items-center gap-3 text-brand-mute font-sans text-[14px]">
            <Clock size={16} className="flex-shrink-0" />
            <span>Buka Setiap Hari: 07:00 - 21:00</span>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl border-t border-brand-mute mt-12 pt-6 text-center">
        <p className="text-brand-mute font-sans text-[12px]">
          &copy; {new Date().getFullYear()} Kamojan Laundry. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
}
