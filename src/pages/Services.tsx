import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Services() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-brand-ink font-sans font-black text-[40px] md:text-[64px] tracking-tight mb-6">Layanan Laundry</h1>
          <p className="text-brand-body font-sans text-[16px] md:text-[20px]">
            Solusi lengkap untuk berbagai jenis pakaian dan perlengkapan Anda.
          </p>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="featureSage" className="flex flex-col">
            <h3 className="text-brand-ink font-sans font-black text-[24px] mb-2">Laundry Kiloan</h3>
            <p className="text-brand-body font-sans text-[16px] mb-6 flex-grow">
              Cocok untuk pakaian harian Anda. Minimal 3 kg per order.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <span className="text-brand-ink font-sans font-semibold">Rp 6.000 / kg</span>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                <Button variant="tertiary">Pesan</Button>
              </a>
            </div>
          </Card>
          
          <Card variant="featureSage" className="flex flex-col">
            <h3 className="text-brand-ink font-sans font-black text-[24px] mb-2">Laundry Satuan Premium</h3>
            <p className="text-brand-body font-sans text-[16px] mb-6 flex-grow">
              Perlakuan khusus untuk kebaya, jas, dan gaun kesayangan Anda.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <span className="text-brand-ink font-sans font-semibold">Mulai Rp 15.000</span>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                <Button variant="tertiary">Pesan</Button>
              </a>
            </div>
          </Card>

          <Card variant="featureSage" className="flex flex-col">
            <h3 className="text-brand-ink font-sans font-black text-[24px] mb-2">Cuci Sepatu & Tas</h3>
            <p className="text-brand-body font-sans text-[16px] mb-6 flex-grow">
              Membersihkan hingga ke sela terdalam tanpa merusak bahan.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <span className="text-brand-ink font-sans font-semibold">Mulai Rp 25.000</span>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                <Button variant="tertiary">Pesan</Button>
              </a>
            </div>
          </Card>

          <Card variant="featureSage" className="flex flex-col">
            <h3 className="text-brand-ink font-sans font-black text-[24px] mb-2">Cuci Karpet & Bed Cover</h3>
            <p className="text-brand-body font-sans text-[16px] mb-6 flex-grow">
              Hilangkan tungau dan debu membandel dari perlengkapan tidur.
            </p>
            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
              <span className="text-brand-ink font-sans font-semibold">Mulai Rp 20.000</span>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                <Button variant="tertiary">Pesan</Button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
