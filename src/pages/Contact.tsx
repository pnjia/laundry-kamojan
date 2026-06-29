import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-brand-ink font-sans font-black text-[40px] md:text-[64px] tracking-tight mb-6">Hubungi Kami</h1>
          <p className="text-brand-body font-sans text-[16px] md:text-[20px]">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami.
          </p>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 px-4 md:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <Card variant="converter" className="flex items-start gap-4">
              <MapPin className="text-brand-primary mt-1" />
              <div>
                <h4 className="text-brand-ink font-sans font-semibold text-[18px]">Alamat Outlet</h4>
                <p className="text-brand-body font-sans text-[16px] mt-1">Jl. Raya Cicantayan No. 123, Sukabumi, Jawa Barat</p>
              </div>
            </Card>
            <Card variant="converter" className="flex items-start gap-4">
              <Phone className="text-brand-primary mt-1" />
              <div>
                <h4 className="text-brand-ink font-sans font-semibold text-[18px]">Telepon / WhatsApp</h4>
                <p className="text-brand-body font-sans text-[16px] mt-1">+62 812 3456 7890</p>
              </div>
            </Card>
            <Card variant="converter" className="flex items-start gap-4">
              <Clock className="text-brand-primary mt-1" />
              <div>
                <h4 className="text-brand-ink font-sans font-semibold text-[18px]">Jam Operasional</h4>
                <p className="text-brand-body font-sans text-[16px] mt-1">Senin - Minggu: 07:00 - 21:00 WIB</p>
              </div>
            </Card>
          </div>
          <div className="aspect-square md:aspect-auto md:h-full bg-gray-200 rounded-xl overflow-hidden relative min-h-[300px]">
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
