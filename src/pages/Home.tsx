import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Star, MapPin, Clock, Truck, ShieldCheck, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section className="bg-brand-canvas-soft py-16 md:py-24 lg:py-32 px-4 md:px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 lg:col-span-6 flex flex-col items-start">
            <span className="inline-block text-brand-body font-sans text-[13px] tracking-widest uppercase mb-6">
              Buka Setiap Hari · 07:00 – 21:00
            </span>
            <h1 className="text-brand-ink font-sans font-black text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight mb-6">
              Laundry Bersih,<br className="hidden lg:block" /> Rapi, dan Tepat Waktu.
            </h1>
            <p className="text-brand-body font-sans text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed max-w-xl mb-8">
              Solusi laundry terpercaya untuk mahasiswa dan warga sekitar Cicantayan, Sukabumi. Nikmati pakaian bersih tanpa repot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto">Chat via WhatsApp</Button>
              </a>
              <a href="#pricing" className="w-full sm:w-auto">
                <Button variant="tertiary" className="w-full sm:w-auto">Lihat Daftar Harga</Button>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 lg:col-span-6 relative w-full mt-6 md:mt-0">
            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-sm relative">
              <img src="/main.jpg" alt="Kamojan Laundry" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 md:-bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg flex items-center gap-2 border border-brand-canvas-soft">
                <Star className="text-brand-warning fill-brand-warning" size={18} />
                <span className="font-sans text-[14px] text-brand-ink font-bold whitespace-nowrap">4.9/5 dari 500+ Pelanggan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators */}
      <section className="bg-brand-canvas py-5 md:py-6 px-4 md:px-6 border-b border-brand-canvas-soft">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center md:justify-between items-center gap-y-3 gap-x-8 text-brand-body">
          <span className="font-sans text-[14px]">Cicantayan, Sukabumi</span>
          <span className="hidden md:block w-px h-4 bg-gray-300" aria-hidden="true" />
          <span className="font-sans text-[14px]">Pengerjaan 1–2 Hari</span>
          <span className="hidden md:block w-px h-4 bg-gray-300" aria-hidden="true" />
          <span className="font-sans text-[14px]">Layanan Antar Jemput</span>
          <span className="hidden md:block w-px h-4 bg-gray-300" aria-hidden="true" />
          <span className="font-sans text-[14px]">Garansi Bersih & Wangi</span>
        </div>
      </section>

      {/* 3. Services */}
      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6" id="services">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-brand-ink font-sans font-black text-[28px] md:text-[36px] tracking-tight mb-3">Layanan Kami</h2>
            <p className="text-brand-body font-sans text-[16px] md:text-[18px] max-w-lg">Berbagai layanan untuk kebutuhan pakaian Anda dengan hasil terbaik.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured service — spans full width on mobile, larger card */}
            <Card variant="featureGreen" className="flex flex-col md:col-span-2 md:flex-row md:items-stretch md:gap-0">
              <div className="flex flex-col flex-1 md:pr-8">
                <div className="mb-4 text-brand-primary bg-brand-canvas inline-flex p-3 rounded-xl w-fit">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-brand-ink font-sans font-black text-[24px] md:text-[28px] mb-2">Laundry Kiloan</h3>
                <p className="text-brand-body font-sans text-[16px] mb-6 flex-grow">Solusi hemat untuk cucian sehari-hari. Sudah termasuk cuci, setrika, dan parfum.</p>
                <div className="flex justify-between items-center pt-4 border-t border-brand-primary-neutral">
                  <div>
                    <p className="text-brand-mute font-sans text-[12px]">Mulai dari</p>
                    <p className="text-brand-ink font-sans font-semibold text-[18px]">Rp 6.000 / kg</p>
                  </div>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                    <Button variant="tertiary" className="py-2 px-4">Pesan</Button>
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="featureSage" className="flex flex-col h-full">
              <div className="mb-4 text-brand-primary bg-brand-canvas inline-flex p-3 rounded-xl w-fit">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-brand-ink font-sans font-black text-[24px] mb-2">Laundry Satuan</h3>
              <p className="text-brand-body font-sans text-[16px] mb-6 flex-grow">Perawatan khusus untuk pakaian berbahan premium, jas, gaun, dan jaket.</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                <div>
                  <p className="text-brand-mute font-sans text-[12px]">Mulai dari</p>
                  <p className="text-brand-ink font-sans font-semibold text-[16px]">Rp 15.000 / potong</p>
                </div>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                  <Button variant="tertiary" className="py-2 px-4">Pesan</Button>
                </a>
              </div>
            </Card>

            <Card variant="featureSage" className="flex flex-col h-full">
              <div className="mb-4 text-brand-primary bg-brand-canvas inline-flex p-3 rounded-xl w-fit">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-brand-ink font-sans font-black text-[24px] mb-2">Cuci Sepatu & Tas</h3>
              <p className="text-brand-body font-sans text-[16px] mb-6 flex-grow">Pembersihan mendalam untuk sepatu sneakers, kulit, dan tas kesayangan Anda.</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                <div>
                  <p className="text-brand-mute font-sans text-[12px]">Mulai dari</p>
                  <p className="text-brand-ink font-sans font-semibold text-[16px]">Rp 25.000 / pasang</p>
                </div>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                  <Button variant="tertiary" className="py-2 px-4">Pesan</Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="bg-brand-canvas-soft py-20 md:py-28 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-brand-ink font-sans font-black text-[28px] md:text-[36px] tracking-tight mb-10">Kenapa Memilih Kamojan Laundry?</h2>

          <div className="flex flex-col gap-8 mb-12">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 size={20} className="text-brand-primary" />
              </div>
              <div>
                <h4 className="text-brand-ink font-sans font-semibold text-[17px] leading-snug">Air Bersih & Detergen Berkualitas</h4>
                <p className="text-brand-body font-sans text-[15px] mt-1.5 leading-relaxed">Menjaga serat pakaian tetap awet dan warna tidak pudar.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 size={20} className="text-brand-primary" />
              </div>
              <div>
                <h4 className="text-brand-ink font-sans font-semibold text-[17px] leading-snug">Satu Mesin Satu Pelanggan</h4>
                <p className="text-brand-body font-sans text-[15px] mt-1.5 leading-relaxed">Pakaian Anda tidak akan dicampur dengan milik orang lain.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 size={20} className="text-brand-primary" />
              </div>
              <div>
                <h4 className="text-brand-ink font-sans font-semibold text-[17px] leading-snug">Garansi Cuci Ulang</h4>
                <p className="text-brand-body font-sans text-[15px] mt-1.5 leading-relaxed">Gratis cuci ulang jika hasil tidak memuaskan atau masih kotor.</p>
              </div>
            </div>
          </div>

          {/* Stats as inline horizontal strip */}
          <div className="flex flex-wrap gap-x-12 gap-y-4 pt-8 border-t border-gray-300">
            <div>
              <span className="text-brand-ink font-sans font-black text-[24px]">5+</span>
              <span className="text-brand-body font-sans text-[14px] ml-2">Tahun Pengalaman</span>
            </div>
            <div>
              <span className="text-brand-ink font-sans font-black text-[24px]">2k+</span>
              <span className="text-brand-body font-sans text-[14px] ml-2">Pelanggan Setia</span>
            </div>
            <div>
              <span className="text-brand-ink font-sans font-black text-[24px]">4.9</span>
              <span className="text-brand-body font-sans text-[14px] ml-2">Rating Pelanggan</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6" id="pricing">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-brand-ink font-sans font-black text-[28px] md:text-[36px] tracking-tight mb-3">Daftar Harga Transparan</h2>
            <p className="text-brand-body font-sans text-[16px] md:text-[18px] max-w-lg">Tanpa biaya tersembunyi. Kualitas premium dengan harga bersahabat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="converter" className="flex flex-col">
              <h3 className="text-brand-ink font-sans font-black text-[22px] mb-2">Cuci Kering</h3>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-brand-ink font-sans font-black text-[28px]">Rp 5.000</span>
                <span className="text-brand-body font-sans text-[15px] mb-0.5">/ kg</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                <li className="flex gap-2 text-brand-body font-sans text-[14px]">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" /> Cuci bersih
                </li>
                <li className="flex gap-2 text-brand-body font-sans text-[14px]">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" /> Pengeringan mesin
                </li>
                <li className="flex gap-2 text-brand-body font-sans text-[14px]">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" /> Lipat rapi
                </li>
              </ul>
            </Card>

            {/* Featured pricing — same level, accent top border, label inside */}
            <Card variant="featureDark" className="flex flex-col border-t-4 border-t-brand-primary">
              <Badge variant="positive" className="w-fit mb-4">Paling Laris</Badge>
              <h3 className="text-brand-primary font-sans font-black text-[22px] mb-2">Cuci Komplit</h3>
              <div className="flex items-end gap-2 mb-6 text-white">
                <span className="font-sans font-black text-[28px]">Rp 6.000</span>
                <span className="text-gray-300 font-sans text-[15px] mb-0.5">/ kg</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                <li className="flex gap-2 text-gray-300 font-sans text-[14px]">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" /> Cuci bersih
                </li>
                <li className="flex gap-2 text-gray-300 font-sans text-[14px]">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" /> Pengeringan mesin
                </li>
                <li className="flex gap-2 text-gray-300 font-sans text-[14px]">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" /> Setrika rapi
                </li>
                <li className="flex gap-2 text-gray-300 font-sans text-[14px]">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" /> Parfum premium
                </li>
              </ul>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                <Button variant="primary" className="w-full">Pilih Paket</Button>
              </a>
            </Card>

            <Card variant="converter" className="flex flex-col">
              <h3 className="text-brand-ink font-sans font-black text-[22px] mb-2">Setrika Saja</h3>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-brand-ink font-sans font-black text-[28px]">Rp 4.000</span>
                <span className="text-brand-body font-sans text-[15px] mb-0.5">/ kg</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                <li className="flex gap-2 text-brand-body font-sans text-[14px]">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" /> Setrika licin
                </li>
                <li className="flex gap-2 text-brand-body font-sans text-[14px]">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" /> Lipat rapi
                </li>
                <li className="flex gap-2 text-brand-body font-sans text-[14px]">
                  <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" /> Parfum premium
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section className="bg-brand-canvas-soft py-12 md:py-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-brand-ink font-sans font-black text-[24px] md:text-[28px] tracking-tight mb-10">Cara Memesan</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div>
              <span className="text-brand-primary font-sans font-black text-[14px] tracking-wide mb-3 block">01</span>
              <h4 className="text-brand-ink font-sans font-semibold text-[18px] mb-2">Hubungi Kami</h4>
              <p className="text-brand-body font-sans text-[15px] leading-relaxed">Chat admin via WhatsApp atau datang langsung ke outlet kami.</p>
            </div>
            <div>
              <span className="text-brand-primary font-sans font-black text-[14px] tracking-wide mb-3 block">02</span>
              <h4 className="text-brand-ink font-sans font-semibold text-[18px] mb-2">Penimbangan</h4>
              <p className="text-brand-body font-sans text-[15px] leading-relaxed">Cucian ditimbang dan dicatat untuk estimasi harga & waktu.</p>
            </div>
            <div>
              <span className="text-brand-primary font-sans font-black text-[14px] tracking-wide mb-3 block">03</span>
              <h4 className="text-brand-ink font-sans font-semibold text-[18px] mb-2">Siap Diambil</h4>
              <p className="text-brand-body font-sans text-[15px] leading-relaxed">Pakaian bersih, rapi, dan wangi siap diambil atau diantar kembali.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-brand-canvas py-20 md:py-28 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-brand-ink font-sans font-black text-[28px] md:text-[36px] tracking-tight mb-3">Apa Kata Mereka</h2>
          <p className="text-brand-body font-sans text-[16px] md:text-[18px] mb-10">Ribuan pelanggan telah mempercayakan pakaiannya kepada kami.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured testimonial */}
            <Card variant="featureSage" className="md:col-span-2 flex flex-col gap-5">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => <Star key={s} className="fill-brand-primary text-brand-primary" size={18} />)}
              </div>
              <p className="text-brand-ink font-sans text-[20px] md:text-[24px] leading-relaxed font-medium flex-grow">
                "Sangat membantu buat saya yang ngekos. Hasil cuciannya wangi banget dan setrikaannya rapih. Gak pernah telat!"
              </p>
              <div className="pt-4 border-t border-gray-300">
                <p className="text-brand-ink font-sans font-semibold text-[15px]">Ayu</p>
                <p className="text-brand-mute font-sans text-[13px]">Mahasiswi</p>
              </div>
            </Card>

            {/* Smaller testimonials stacked */}
            <div className="flex flex-col gap-6">
              <Card variant="converter" className="flex flex-col gap-4 flex-1">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="fill-brand-primary text-brand-primary" size={14} />)}
                </div>
                <p className="text-brand-ink font-sans text-[15px] leading-relaxed flex-grow">
                  "Berlangganan di sini udah 2 tahun. Pernah coba cuci sepatu dan hasilnya bersih banget seperti baru lagi."
                </p>
                <div>
                  <p className="text-brand-ink font-sans font-semibold text-[14px]">Bima</p>
                  <p className="text-brand-mute font-sans text-[12px]">Karyawan</p>
                </div>
              </Card>

              <Card variant="converter" className="flex flex-col gap-4 flex-1">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="fill-brand-primary text-brand-primary" size={14} />)}
                </div>
                <p className="text-brand-ink font-sans text-[15px] leading-relaxed flex-grow">
                  "Adminnya ramah dan harganya transparan. Pelayanan antar jemputnya bikin hidup lebih mudah."
                </p>
                <div>
                  <p className="text-brand-ink font-sans font-semibold text-[14px]">Citra</p>
                  <p className="text-brand-mute font-sans text-[12px]">Ibu Rumah Tangga</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Gallery */}
      <section className="bg-brand-canvas-soft py-12 md:py-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-brand-ink font-sans font-black text-[24px] md:text-[28px] tracking-tight mb-8">Galeri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[450px] lg:h-[560px]">
            {/* Image 1 (Large Square Left) */}
            <div className="col-span-2 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 rounded-2xl overflow-hidden shadow-sm aspect-video md:aspect-auto">
              <img src="/1.jpeg" alt="Galeri Kamojan Laundry 1" className="w-full h-full object-cover" />
            </div>
            {/* Image 2 (Small Square Top Middle) */}
            <div className="col-span-1 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 rounded-2xl overflow-hidden shadow-sm aspect-square md:aspect-auto">
              <img src="/2.jpeg" alt="Galeri Kamojan Laundry 2" className="w-full h-full object-cover" />
            </div>
            {/* Image 3 (Small Square Bottom Middle) */}
            <div className="col-span-1 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 rounded-2xl overflow-hidden shadow-sm aspect-square md:aspect-auto">
              <img src="/3.jpeg" alt="Galeri Kamojan Laundry 3" className="w-full h-full object-cover" />
            </div>
            {/* Image 4 (Tall Portrait Right) */}
            <div className="col-span-2 md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3 rounded-2xl overflow-hidden shadow-sm aspect-[21/9] md:aspect-auto">
              <img src="/4.jpeg" alt="Galeri Kamojan Laundry 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6" id="faq">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-brand-ink font-sans font-black text-[28px] md:text-[36px] tracking-tight mb-10">Pertanyaan Umum</h2>
          <div className="flex flex-col">
            {[
              { q: "Berapa lama waktu pengerjaan untuk laundry kiloan?", a: "Standar pengerjaan adalah 2 hari (48 jam). Kami juga menyediakan layanan kilat 1 hari (24 jam) dan ekspres (6 jam) dengan biaya tambahan." },
              { q: "Apakah pakaian saya akan dicampur dengan pelanggan lain?", a: "Tidak. Kami menerapkan sistem 1 mesin untuk 1 pelanggan demi menjaga kebersihan dan menghindari pakaian tertukar atau luntur." },
              { q: "Apakah menyediakan layanan antar jemput?", a: "Ya, kami melayani antar jemput gratis untuk area Cicantayan (radius 2 km) dengan minimal order 5 kg." }
            ].map((faq, i) => (
              <div
                key={i}
                className="border-b border-gray-200 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between items-center py-5">
                  <h4 className="text-brand-ink font-sans font-semibold text-[16px] pr-4">{faq.q}</h4>
                  <ChevronDown className={cn("text-brand-ink transition-transform flex-shrink-0", openFaq === i ? "rotate-180" : "")} size={20} />
                </div>
                {openFaq === i && (
                  <p className="text-brand-body font-sans text-[15px] leading-relaxed pb-5">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Location */}
      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="text-brand-ink font-sans font-black text-[28px] md:text-[40px] tracking-tight mb-8">Kunjungi Outlet Kami</h2>
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-brand-ink font-sans font-semibold text-[16px]">Alamat Outlet</h4>
                  <p className="text-brand-body font-sans text-[15px] mt-1">Jl. Raya Cicantayan No. 123, Sukabumi, Jawa Barat</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="text-brand-ink font-sans font-semibold text-[16px]">Jam Operasional</h4>
                  <p className="text-brand-body font-sans text-[15px] mt-1">Senin – Minggu: 07:00 – 21:00 WIB</p>
                </div>
              </div>
            </div>
            <a href="https://www.google.com/maps/place/Kamojan+Laundry/data=!4m2!3m1!1s0x0:0x1892133502b80322?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noreferrer">
              <Button variant="tertiary">Buka Google Maps</Button>
            </a>
          </div>
          <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
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

      {/* 11. Final CTA */}
      <section className="bg-brand-ink py-20 md:py-32 px-4 md:px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-brand-primary font-sans font-black text-[28px] md:text-[44px] tracking-tight mb-5">Siap Menikmati Pakaian Bersih?</h2>
          <p className="text-brand-canvas-soft font-sans text-[16px] md:text-[18px] mb-8 leading-relaxed">
            Hubungi kami sekarang untuk layanan antar jemput atau info lebih lanjut.
          </p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
            <Button variant="primary">Chat via WhatsApp</Button>
          </a>
        </div>
      </section>
    </div>
  );
}

// Utility for class merging in this file since we are rendering here
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
