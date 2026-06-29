import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-body font-sans text-[13px] tracking-widest uppercase mb-6">Hubungi Kami</span>
            <h1 className="text-brand-ink font-sans font-black text-[32px] md:text-[48px] tracking-tight mb-6">
              Kami siap membantu Anda.
            </h1>
            <p className="text-brand-body font-sans text-[16px] md:text-[20px] max-w-2xl leading-relaxed">
              Punya pertanyaan seputar layanan kami atau ingin memesan layanan antar jemput? Jangan ragu untuk menghubungi kami.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="flex flex-col gap-10">
            <div className="flex items-start gap-5">
              <div className="bg-brand-canvas-soft p-4 rounded-full text-brand-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-brand-ink font-sans font-bold text-[18px]">Alamat Outlet</h4>
                <p className="text-brand-body font-sans text-[16px] mt-2 leading-relaxed">Jl. Raya Cicantayan No. 123<br/>Sukabumi, Jawa Barat 43155</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="bg-brand-canvas-soft p-4 rounded-full text-brand-primary">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-brand-ink font-sans font-bold text-[18px]">Telepon / WhatsApp</h4>
                <p className="text-brand-body font-sans text-[16px] mt-2">+62 812 3456 7890</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="bg-brand-canvas-soft p-4 rounded-full text-brand-primary">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-brand-ink font-sans font-bold text-[18px]">Jam Operasional</h4>
                <p className="text-brand-body font-sans text-[16px] mt-2 leading-relaxed">Senin - Minggu<br/>07:00 - 21:00 WIB</p>
              </div>
            </div>

            <div className="pt-8 mt-2 border-t border-gray-200">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                <Button variant="primary">Chat via WhatsApp</Button>
              </a>
            </div>
          </div>
          
          <div className="aspect-square md:aspect-auto md:h-[600px] bg-gray-200 rounded-xl overflow-hidden relative shadow-sm border border-gray-200">
            <iframe
              title="Lokasi Kamojan Laundry"
              src="https://maps.google.com/maps?q=Kamojan%20Laundry&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
