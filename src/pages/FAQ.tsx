import { Card } from "@/components/ui/Card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Berapa lama waktu pengerjaan untuk laundry kiloan?", a: "Standar pengerjaan adalah 2 hari (48 jam). Kami juga menyediakan layanan kilat 1 hari (24 jam) dan ekspres (6 jam) dengan biaya tambahan." },
    { q: "Apakah pakaian saya akan dicampur dengan pelanggan lain?", a: "Tidak. Kami menerapkan sistem 1 mesin untuk 1 pelanggan demi menjaga kebersihan dan menghindari pakaian tertukar atau luntur." },
    { q: "Apakah menyediakan layanan antar jemput?", a: "Ya, kami melayani antar jemput gratis untuk area Cicantayan (radius 2 km) dengan minimal order 5 kg." },
    { q: "Bagaimana sistem pembayarannya?", a: "Pembayaran dapat dilakukan secara tunai, transfer bank, atau e-wallet (OVO, GoPay, Dana) saat pakaian diambil atau diantar." },
    { q: "Apakah ada garansi jika pakaian rusak atau hilang?", a: "Kami sangat berhati-hati, namun jika terjadi kelalaian dari pihak kami, kami memberikan garansi penggantian sesuai dengan syarat dan ketentuan yang berlaku." }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-brand-ink font-sans font-black text-[40px] md:text-[64px] tracking-tight mb-6">Pertanyaan Umum</h1>
          <p className="text-brand-body font-sans text-[16px] md:text-[20px]">
            Temukan jawaban untuk pertanyaan yang sering diajukan.
          </p>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 px-4 md:px-6">
        <div className="mx-auto max-w-3xl flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <Card key={i} variant="converter" className="cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="flex justify-between items-center">
                <h4 className="text-brand-ink font-sans font-semibold text-[16px]">{faq.q}</h4>
                <ChevronDown className={cn("text-brand-ink transition-transform", openFaq === i ? "rotate-180" : "")} />
              </div>
              {openFaq === i && (
                <p className="text-brand-body font-sans text-[14px] mt-4 pt-4 border-t border-gray-200">{faq.a}</p>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
