import { Card } from "@/components/ui/Card";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-brand-ink font-sans font-black text-[40px] md:text-[64px] tracking-tight mb-6">Tentang Kami</h1>
          <p className="text-brand-body font-sans text-[16px] md:text-[20px]">
            Kamojan Laundry hadir untuk memberikan solusi kebersihan pakaian Anda dengan standar profesional dan harga terjangkau.
          </p>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 px-4 md:px-6">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-brand-ink font-sans font-black text-[32px] tracking-tight mb-4">Visi & Misi</h2>
            <p className="text-brand-body font-sans text-[16px] mb-4">
              Menjadi mitra laundry nomor satu di Sukabumi yang mengedepankan kualitas, kecepatan, dan kepuasan pelanggan.
            </p>
            <p className="text-brand-body font-sans text-[16px]">
              Kami berkomitmen untuk menggunakan bahan pembersih yang ramah lingkungan dan aman bagi semua jenis kain.
            </p>
          </div>
          <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
            <img src="public/main.jpg" alt="About Kamojan Laundry" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
