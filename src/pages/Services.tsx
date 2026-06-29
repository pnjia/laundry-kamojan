import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Services() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-body font-sans text-[13px] tracking-widest uppercase mb-6">4 Layanan Tersedia</span>
            <h1 className="text-brand-ink font-sans font-black text-[32px] md:text-[48px] tracking-tight mb-6">
              Solusi lengkap untuk berbagai jenis pakaian Anda.
            </h1>
            <p className="text-brand-body font-sans text-[16px] md:text-[20px] max-w-2xl leading-relaxed">
              Dari pakaian sehari-hari hingga gaun premium, kami merawat semuanya dengan standar kebersihan tertinggi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Featured Service spans 3 cols */}
          <Card variant="featureGreen" className="md:col-span-3 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 p-8 md:p-12">
            <div className="flex-1">
              <h3 className="text-brand-ink font-sans font-black text-[28px] md:text-[36px] mb-4">Laundry Kiloan</h3>
              <p className="text-brand-body font-sans text-[16px] md:text-[18px] mb-8 leading-relaxed max-w-xl">
                Solusi hemat dan praktis untuk pakaian harian Anda. Minimal 3 kg per order. Sudah termasuk pencucian bersih, setrika licin, dan parfum premium yang tahan lama.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-brand-primary-neutral w-full max-w-md">
                <div>
                  <p className="text-brand-mute font-sans text-[12px] mb-1">Mulai dari</p>
                  <span className="text-brand-ink font-sans font-black text-[24px]">Rp 6.000 / kg</span>
                </div>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="ml-auto">
                  <Button variant="primary">Pesan Sekarang</Button>
                </a>
              </div>
            </div>
          </Card>
          
          <Card variant="featureSage" className="flex flex-col">
            <h3 className="text-brand-ink font-sans font-black text-[22px] mb-3">Laundry Satuan Premium</h3>
            <p className="text-brand-body font-sans text-[15px] mb-8 flex-grow leading-relaxed">
              Perlakuan khusus untuk kebaya, jas, dan gaun kesayangan Anda.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-5 mt-auto">
              <div>
                <p className="text-brand-mute font-sans text-[12px] mb-0.5">Mulai</p>
                <span className="text-brand-ink font-sans font-semibold">Rp 15.000</span>
              </div>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                <Button variant="tertiary" className="px-4 py-2 text-[14px]">Pesan</Button>
              </a>
            </div>
          </Card>

          <Card variant="featureSage" className="flex flex-col">
            <h3 className="text-brand-ink font-sans font-black text-[22px] mb-3">Cuci Sepatu & Tas</h3>
            <p className="text-brand-body font-sans text-[15px] mb-8 flex-grow leading-relaxed">
              Membersihkan hingga ke sela terdalam tanpa merusak bahan.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-5 mt-auto">
              <div>
                <p className="text-brand-mute font-sans text-[12px] mb-0.5">Mulai</p>
                <span className="text-brand-ink font-sans font-semibold">Rp 25.000</span>
              </div>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                <Button variant="tertiary" className="px-4 py-2 text-[14px]">Pesan</Button>
              </a>
            </div>
          </Card>

          <Card variant="featureSage" className="flex flex-col">
            <h3 className="text-brand-ink font-sans font-black text-[22px] mb-3">Cuci Karpet & Bed Cover</h3>
            <p className="text-brand-body font-sans text-[15px] mb-8 flex-grow leading-relaxed">
              Hilangkan tungau dan debu membandel dari perlengkapan tidur.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-5 mt-auto">
              <div>
                <p className="text-brand-mute font-sans text-[12px] mb-0.5">Mulai</p>
                <span className="text-brand-ink font-sans font-semibold">Rp 20.000</span>
              </div>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                <Button variant="tertiary" className="px-4 py-2 text-[14px]">Pesan</Button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
