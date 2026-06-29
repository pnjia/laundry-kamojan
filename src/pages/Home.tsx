import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Star, MapPin, Clock, Truck, ShieldCheck, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="bg-brand-canvas-soft py-12 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start gap-6">
            <Badge variant="positive">Buka Setiap Hari 07:00 - 21:00</Badge>
            <h1 className="text-brand-ink font-sans font-black text-[40px] md:text-[64px] leading-tight md:leading-[1.1] tracking-tight">
              Laundry Bersih, Rapi, dan Tepat Waktu.
            </h1>
            <p className="text-brand-body font-sans text-[16px] md:text-[20px] max-w-md">
              Solusi laundry terpercaya untuk mahasiswa dan warga sekitar Cicantayan, Sukabumi. Nikmati pakaian bersih tanpa repot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" className="w-full">Chat via WhatsApp</Button>
              </a>
              <a href="#pricing" className="w-full sm:w-auto">
                <Button variant="tertiary" className="w-full">Lihat Daftar Harga</Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <Card variant="content" className="aspect-[4/3] w-full flex items-center justify-center bg-gray-100 overflow-hidden p-0 relative">
              <img src="/main.jpg" alt="Laundry Services" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4">
                <Card variant="content" className="p-3 shadow-lg flex items-center gap-2">
                  <Star className="text-brand-warning fill-brand-warning" size={20} />
                  <span className="font-sans font-semibold text-brand-ink">4.9/5 dari 500+ Pelanggan</span>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators */}
      <section className="bg-brand-canvas py-8 px-4 md:px-6 border-b border-brand-canvas-soft">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center md:justify-between items-center gap-8 text-brand-ink">
          <div className="flex items-center gap-3">
            <MapPin size={24} className="text-brand-primary" />
            <span className="font-sans font-semibold text-[16px]">Cicantayan, Sukabumi</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={24} className="text-brand-primary" />
            <span className="font-sans font-semibold text-[16px]">Pengerjaan 1-2 Hari</span>
          </div>
          <div className="flex items-center gap-3">
            <Truck size={24} className="text-brand-primary" />
            <span className="font-sans font-semibold text-[16px]">Layanan Antar Jemput</span>
          </div>
          <div className="flex items-center gap-3">
            <Star size={24} className="text-brand-primary fill-brand-primary" />
            <span className="font-sans font-semibold text-[16px]">Garansi Bersih & Wangi</span>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6" id="services">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-brand-ink font-sans font-black text-[32px] md:text-[40px] tracking-tight mb-4">Layanan Kami</h2>
            <p className="text-brand-body font-sans text-[16px] md:text-[20px] max-w-2xl mx-auto">Kami menyediakan berbagai layanan untuk kebutuhan pakaian Anda dengan hasil terbaik.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="featureSage" className="flex flex-col h-full">
              <div className="mb-4 text-brand-primary bg-brand-canvas inline-flex p-3 rounded-xl w-fit">
                <Sparkles size={28} />
              </div>
              <h3 className="text-brand-ink font-sans font-black text-[24px] mb-2">Laundry Kiloan</h3>
              <p className="text-brand-body font-sans text-[16px] mb-6 flex-grow">Solusi hemat untuk cucian sehari-hari. Sudah termasuk cuci, setrika, dan parfum.</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                <div>
                  <p className="text-brand-mute font-sans text-[12px]">Mulai dari</p>
                  <p className="text-brand-ink font-sans font-semibold text-[16px]">Rp 6.000 / kg</p>
                </div>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
                  <Button variant="tertiary" className="py-2 px-4">Pesan</Button>
                </a>
              </div>
            </Card>

            <Card variant="featureGreen" className="flex flex-col h-full">
              <div className="mb-4 text-brand-primary bg-brand-canvas inline-flex p-3 rounded-xl w-fit">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-brand-ink font-sans font-black text-[24px] mb-2">Laundry Satuan</h3>
              <p className="text-brand-body font-sans text-[16px] mb-6 flex-grow">Perawatan khusus untuk pakaian berbahan premium, jas, gaun, dan jaket.</p>
              <div className="flex justify-between items-center pt-4 border-t border-brand-primary-neutral">
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
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-brand-ink font-sans font-black text-[32px] md:text-[40px] tracking-tight mb-6">Kenapa Memilih Kamojan Laundry?</h2>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-brand-primary rounded-full p-1">
                    <CheckCircle2 size={20} className="text-brand-ink" />
                  </div>
                </div>
                <div>
                  <h4 className="text-brand-ink font-sans font-semibold text-[18px]">Air Bersih & Detergen Berkualitas</h4>
                  <p className="text-brand-body font-sans text-[14px] mt-1">Menjaga serat pakaian tetap awet dan warna tidak pudar.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-brand-primary rounded-full p-1">
                    <CheckCircle2 size={20} className="text-brand-ink" />
                  </div>
                </div>
                <div>
                  <h4 className="text-brand-ink font-sans font-semibold text-[18px]">Satu Mesin Satu Pelanggan</h4>
                  <p className="text-brand-body font-sans text-[14px] mt-1">Pakaian Anda tidak akan dicampur dengan milik orang lain.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-brand-primary rounded-full p-1">
                    <CheckCircle2 size={20} className="text-brand-ink" />
                  </div>
                </div>
                <div>
                  <h4 className="text-brand-ink font-sans font-semibold text-[18px]">Garansi Cuci Ulang</h4>
                  <p className="text-brand-body font-sans text-[14px] mt-1">Gratis cuci ulang jika hasil tidak memuaskan atau masih kotor.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card variant="content" className="aspect-square flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-brand-primary font-sans font-black text-[32px] md:text-[48px]">5+</h3>
              <p className="text-brand-ink font-sans font-semibold text-[14px]">Tahun Pengalaman</p>
            </Card>
            <Card variant="content" className="aspect-square flex flex-col justify-center items-center text-center p-4 mt-8">
              <h3 className="text-brand-primary font-sans font-black text-[32px] md:text-[48px]">2k+</h3>
              <p className="text-brand-ink font-sans font-semibold text-[14px]">Pelanggan Setia</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6" id="pricing">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-brand-ink font-sans font-black text-[32px] md:text-[40px] tracking-tight mb-4">Daftar Harga Transparan</h2>
            <p className="text-brand-body font-sans text-[16px] md:text-[20px] max-w-2xl mx-auto">Tanpa biaya tersembunyi. Kualitas premium dengan harga bersahabat.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="converter" className="flex flex-col">
              <h3 className="text-brand-ink font-sans font-black text-[24px] mb-2">Cuci Kering</h3>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-brand-ink font-sans font-black text-[32px]">Rp 5.000</span>
                <span className="text-brand-body font-sans text-[16px] mb-1">/ kg</span>
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

            <Card variant="featureDark" className="flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Badge variant="positive" className="bg-brand-primary text-brand-ink">Paling Laris</Badge>
              </div>
              <h3 className="text-brand-primary font-sans font-black text-[24px] mb-2">Cuci Komplit</h3>
              <div className="flex items-end gap-2 mb-6 text-white">
                <span className="font-sans font-black text-[32px]">Rp 6.000</span>
                <span className="text-gray-300 font-sans text-[16px] mb-1">/ kg</span>
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
              <h3 className="text-brand-ink font-sans font-black text-[24px] mb-2">Setrika Saja</h3>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-brand-ink font-sans font-black text-[32px]">Rp 4.000</span>
                <span className="text-brand-body font-sans text-[16px] mb-1">/ kg</span>
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
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-brand-ink font-sans font-black text-[32px] md:text-[40px] tracking-tight mb-4">Cara Memesan</h2>
            <p className="text-brand-body font-sans text-[16px] md:text-[20px] max-w-2xl mx-auto">Tiga langkah mudah untuk pakaian bersih.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[2px] bg-brand-primary-neutral border-dashed border-t-2" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center font-sans font-black text-[32px] text-brand-ink mb-6 shadow-lg">1</div>
              <h4 className="text-brand-ink font-sans font-black text-[20px] mb-2">Hubungi Kami</h4>
              <p className="text-brand-body font-sans text-[14px]">Chat admin via WhatsApp atau datang langsung ke outlet kami.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center font-sans font-black text-[32px] text-brand-ink mb-6 shadow-lg">2</div>
              <h4 className="text-brand-ink font-sans font-black text-[20px] mb-2">Penimbangan</h4>
              <p className="text-brand-body font-sans text-[14px]">Cucian ditimbang dan dicatat untuk estimasi harga & waktu.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center font-sans font-black text-[32px] text-brand-ink mb-6 shadow-lg">3</div>
              <h4 className="text-brand-ink font-sans font-black text-[20px] mb-2">Siap Diambil</h4>
              <p className="text-brand-body font-sans text-[14px]">Pakaian bersih, rapi, dan wangi siap diambil atau diantar kembali.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-brand-ink font-sans font-black text-[32px] md:text-[40px] tracking-tight mb-4">Apa Kata Mereka</h2>
            <p className="text-brand-body font-sans text-[16px] md:text-[20px]">Ribuan pelanggan telah mempercayakan pakaiannya kepada kami.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "Sangat membantu buat saya yang ngekos. Hasil cuciannya wangi banget dan setrikaannya rapih. Gak pernah telat!", name: "Ayu", role: "Mahasiswi" },
              { text: "Berlangganan di sini udah 2 tahun. Pernah coba cuci sepatu dan hasilnya bersih banget seperti baru lagi.", name: "Bima", role: "Karyawan" },
              { text: "Adminnya ramah dan harganya transparan. Pelayanan antar jemputnya bikin hidup lebih mudah.", name: "Citra", role: "Ibu Rumah Tangga" }
            ].map((t, i) => (
              <Card key={i} variant="converter" className="flex flex-col gap-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="fill-brand-primary text-brand-primary" size={16} />)}
                </div>
                <p className="text-brand-ink font-sans text-[16px] flex-grow">"{t.text}"</p>
                <div className="mt-4">
                  <p className="text-brand-ink font-sans font-semibold text-[14px]">{t.name}</p>
                  <p className="text-brand-mute font-sans text-[12px]">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Gallery */}
      <section className="bg-brand-canvas-soft py-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-brand-ink font-sans font-black text-[32px] mb-8 text-center">Galeri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/1.jpeg",
              "/2.jpeg",
              "/3.jpeg",
              "/4.jpeg"
            ].map((imgSrc, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={imgSrc} alt={`Galeri Kamojan Laundry ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-brand-canvas py-16 md:py-24 px-4 md:px-6" id="faq">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-brand-ink font-sans font-black text-[32px] md:text-[40px] tracking-tight mb-8 text-center">Pertanyaan Umum</h2>
          <div className="flex flex-col gap-4">
            {[
              { q: "Berapa lama waktu pengerjaan untuk laundry kiloan?", a: "Standar pengerjaan adalah 2 hari (48 jam). Kami juga menyediakan layanan kilat 1 hari (24 jam) dan ekspres (6 jam) dengan biaya tambahan." },
              { q: "Apakah pakaian saya akan dicampur dengan pelanggan lain?", a: "Tidak. Kami menerapkan sistem 1 mesin untuk 1 pelanggan demi menjaga kebersihan dan menghindari pakaian tertukar atau luntur." },
              { q: "Apakah menyediakan layanan antar jemput?", a: "Ya, kami melayani antar jemput gratis untuk area Cicantayan (radius 2 km) dengan minimal order 5 kg." }
            ].map((faq, i) => (
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
        </div>
      </section>

      {/* 10. Location */}
      <section className="bg-brand-canvas py-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-brand-ink font-sans font-black text-[32px] md:text-[40px] tracking-tight mb-6">Kunjungi Kami</h2>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-primary mt-1" />
                <div>
                  <h4 className="text-brand-ink font-sans font-semibold text-[16px]">Alamat Outlet</h4>
                  <p className="text-brand-body font-sans text-[14px]">Jl. Raya Cicantayan No. 123, Sukabumi, Jawa Barat</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-brand-primary mt-1" />
                <div>
                  <h4 className="text-brand-ink font-sans font-semibold text-[16px]">Jam Operasional</h4>
                  <p className="text-brand-body font-sans text-[14px]">Senin - Minggu: 07:00 - 21:00 WIB</p>
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
      <section className="bg-brand-ink py-24 px-4 md:px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-brand-primary font-sans font-black text-[32px] md:text-[48px] tracking-tight mb-6">Siap Menikmati Pakaian Bersih?</h2>
          <p className="text-brand-canvas-soft font-sans text-[16px] md:text-[20px] mb-8">
            Hubungi kami sekarang untuk layanan antar jemput atau info lebih lanjut.
          </p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
            <Button variant="primary" className="scale-110 hover:scale-115 transition-transform">Chat via WhatsApp</Button>
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
