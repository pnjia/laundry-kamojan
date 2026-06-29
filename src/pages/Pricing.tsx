import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-brand-body font-sans text-[13px] tracking-widest uppercase mb-4">Daftar Harga</span>
            <h1 className="text-brand-ink font-sans font-black text-[32px] md:text-[40px] tracking-tight mb-6">
              Transparan, tanpa biaya tersembunyi.
            </h1>
            <p className="text-brand-body font-sans text-[16px] md:text-[18px] leading-relaxed">
              Pilih layanan yang sesuai dengan kebutuhan Anda. Kualitas premium dengan harga bersahabat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 px-4 md:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card variant="converter" className="p-8">
              <h3 className="text-brand-ink font-sans font-black text-[24px] mb-8 border-b border-gray-200 pb-4">Laundry Kiloan</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" />
                    <span className="text-brand-ink font-sans text-[16px] group-hover:text-brand-primary transition-colors">Cuci Komplit (Cuci + Setrika)</span>
                  </div>
                  <span className="text-brand-ink font-sans font-semibold">Rp 6.000 <span className="text-brand-mute font-normal text-[14px]">/ kg</span></span>
                </div>
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" />
                    <span className="text-brand-ink font-sans text-[16px] group-hover:text-brand-primary transition-colors">Cuci Kering</span>
                  </div>
                  <span className="text-brand-ink font-sans font-semibold">Rp 5.000 <span className="text-brand-mute font-normal text-[14px]">/ kg</span></span>
                </div>
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" />
                    <span className="text-brand-ink font-sans text-[16px] group-hover:text-brand-primary transition-colors">Setrika Saja</span>
                  </div>
                  <span className="text-brand-ink font-sans font-semibold">Rp 4.000 <span className="text-brand-mute font-normal text-[14px]">/ kg</span></span>
                </div>
              </div>
            </Card>

            <Card variant="converter" className="p-8">
              <h3 className="text-brand-ink font-sans font-black text-[24px] mb-8 border-b border-gray-200 pb-4">Laundry Satuan</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" />
                    <span className="text-brand-ink font-sans text-[16px] group-hover:text-brand-primary transition-colors">Kemeja / Kaos / Celana</span>
                  </div>
                  <span className="text-brand-ink font-sans font-semibold">Rp 15.000</span>
                </div>
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" />
                    <span className="text-brand-ink font-sans text-[16px] group-hover:text-brand-primary transition-colors">Jas / Blazer</span>
                  </div>
                  <span className="text-brand-ink font-sans font-semibold">Rp 25.000</span>
                </div>
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" />
                    <span className="text-brand-ink font-sans text-[16px] group-hover:text-brand-primary transition-colors">Bed Cover</span>
                  </div>
                  <span className="text-brand-ink font-sans font-semibold">Rp 20.000</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center bg-brand-canvas-soft rounded-xl p-6 mb-10 max-w-2xl mx-auto">
            <p className="text-brand-body font-sans text-[14px] leading-relaxed">
              * Minimal order untuk laundry kiloan adalah 3 kg. Harga dapat berubah sewaktu-waktu. Gratis antar jemput untuk area Cicantayan dengan radius maksimal 2 km.
            </p>
          </div>

          <div className="text-center">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
              <Button variant="primary">Pesan Sekarang</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
