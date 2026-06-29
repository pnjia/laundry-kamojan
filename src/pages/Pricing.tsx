import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function Pricing() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-brand-ink font-sans font-black text-[40px] md:text-[64px] tracking-tight mb-6">Daftar Harga</h1>
          <p className="text-brand-body font-sans text-[16px] md:text-[20px]">
            Transparan, tanpa biaya tersembunyi.
          </p>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 px-4 md:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="converter">
            <h3 className="text-brand-ink font-sans font-black text-[24px] mb-4">Kiloan</h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-brand-ink font-sans text-[16px]">Cuci Komplit (Cuci + Setrika)</span>
                <span className="text-brand-ink font-sans font-semibold">Rp 6.000 / kg</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-brand-ink font-sans text-[16px]">Cuci Kering</span>
                <span className="text-brand-ink font-sans font-semibold">Rp 5.000 / kg</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-brand-ink font-sans text-[16px]">Setrika Saja</span>
                <span className="text-brand-ink font-sans font-semibold">Rp 4.000 / kg</span>
              </div>
            </div>
          </Card>

          <Card variant="converter">
            <h3 className="text-brand-ink font-sans font-black text-[24px] mb-4">Satuan</h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-brand-ink font-sans text-[16px]">Kemeja / Kaos / Celana Panjang</span>
                <span className="text-brand-ink font-sans font-semibold">Rp 15.000</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-brand-ink font-sans text-[16px]">Jas / Blazer</span>
                <span className="text-brand-ink font-sans font-semibold">Rp 25.000</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-brand-ink font-sans text-[16px]">Bed Cover</span>
                <span className="text-brand-ink font-sans font-semibold">Rp 20.000</span>
              </div>
            </div>
          </Card>
        </div>
        <div className="text-center mt-12">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
            <Button variant="primary">Pesan Sekarang</Button>
          </a>
        </div>
      </section>
    </div>
  );
}
