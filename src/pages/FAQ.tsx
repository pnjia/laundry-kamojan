import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

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
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-body font-sans text-[13px] tracking-widest uppercase mb-6">Pertanyaan Umum</span>
            <h1 className="text-brand-ink font-sans font-black text-[32px] md:text-[48px] tracking-tight mb-6">
              Bantuan & Informasi
            </h1>
            <p className="text-brand-body font-sans text-[16px] md:text-[20px] max-w-2xl leading-relaxed">
              Temukan jawaban untuk pertanyaan yang paling sering ditanyakan oleh pelanggan kami.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-3xl flex flex-col">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border-b border-gray-200 cursor-pointer group" 
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="flex justify-between items-center py-6">
                <h4 className="text-brand-ink font-sans font-semibold text-[16px] md:text-[18px] group-hover:text-brand-primary transition-colors pr-6">
                  {faq.q}
                </h4>
                <ChevronDown className={cn("text-brand-ink transition-transform duration-300 flex-shrink-0", openFaq === i ? "rotate-180" : "")} />
              </div>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-brand-body font-sans text-[15px] md:text-[16px] leading-relaxed pb-6 pr-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
