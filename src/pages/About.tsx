import { Card } from "@/components/ui/Card";
import { ShieldCheck, Clock, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-body font-sans text-[13px] tracking-widest uppercase mb-6">Tentang Kami</span>
            <h1 className="text-brand-ink font-sans font-black text-[32px] md:text-[48px] tracking-tight mb-6">
              Mitra laundry terpercaya di Sukabumi.
            </h1>
            <p className="text-brand-body font-sans text-[16px] md:text-[20px] max-w-2xl leading-relaxed">
              Kamojan Laundry hadir untuk memberikan solusi kebersihan pakaian Anda dengan standar profesional dan harga terjangkau.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-brand-ink font-sans font-black text-[28px] md:text-[36px] tracking-tight mb-6">Visi & Misi</h2>
            <div className="flex flex-col gap-5">
              <p className="text-brand-body font-sans text-[16px] md:text-[18px] leading-relaxed">
                Menjadi mitra laundry nomor satu di Sukabumi yang mengedepankan kualitas, kecepatan, dan kepuasan pelanggan.
              </p>
              <p className="text-brand-body font-sans text-[16px] md:text-[18px] leading-relaxed">
                Kami berkomitmen untuk menggunakan bahan pembersih yang ramah lingkungan dan aman bagi semua jenis kain.
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
            <img src="/main.jpg" alt="About Kamojan Laundry" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6 border-t border-brand-canvas">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-brand-ink font-sans font-black text-[28px] md:text-[36px] tracking-tight mb-12">Komitmen Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="content" className="flex flex-col gap-4">
              <div className="text-brand-primary">
                <Sparkles size={32} />
              </div>
              <h3 className="text-brand-ink font-sans font-bold text-[20px]">Kebersihan</h3>
              <p className="text-brand-body font-sans text-[15px] leading-relaxed">
                Menjamin setiap helai pakaian kembali dalam keadaan bersih maksimal dan wangi tahan lama.
              </p>
            </Card>
            <Card variant="content" className="flex flex-col gap-4">
              <div className="text-brand-primary">
                <Clock size={32} />
              </div>
              <h3 className="text-brand-ink font-sans font-bold text-[20px]">Kecepatan</h3>
              <p className="text-brand-body font-sans text-[15px] leading-relaxed">
                Pengerjaan tepat waktu sesuai jadwal yang dijanjikan tanpa mengurangi kualitas.
              </p>
            </Card>
            <Card variant="content" className="flex flex-col gap-4">
              <div className="text-brand-primary">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-brand-ink font-sans font-bold text-[20px]">Kepercayaan</h3>
              <p className="text-brand-body font-sans text-[15px] leading-relaxed">
                Amanah dalam merawat pakaian Anda dan memberikan transparansi harga sejak awal.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
