import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Blog() {
  const posts = [
    { title: "5 Tips Mencuci Baju Agar Warna Tidak Cepat Pudar", category: "Tips Laundry", date: "12 Okt 2023", image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=600" },
    { title: "Cara Menghilangkan Noda Membandel pada Kemeja Putih", category: "Perawatan Pakaian", date: "05 Okt 2023", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600" },
    { title: "Mengapa Anda Harus Mencuci Sepatu Secara Rutin?", category: "Edukasi", date: "28 Sep 2023", image: "https://images.unsplash.com/photo-1581560205562-b9e7d958619a?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-brand-canvas-soft py-16 md:py-24 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-block text-brand-body font-sans text-[13px] tracking-widest uppercase mb-6">Artikel & Edukasi</span>
            <h1 className="text-brand-ink font-sans font-black text-[32px] md:text-[48px] tracking-tight mb-6">
              Jurnal Perawatan Pakaian
            </h1>
            <p className="text-brand-body font-sans text-[16px] md:text-[20px] max-w-2xl leading-relaxed">
              Tips, trik, dan informasi seputar perawatan pakaian Anda langsung dari ahlinya.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Post (spans 2 cols) */}
          <Card variant="content" className="md:col-span-2 overflow-hidden flex flex-col p-0 h-full border border-gray-200 group">
            <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
              <img src={posts[0].image} alt={posts[0].title} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90" />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-5">
                <Badge variant="default">{posts[0].category}</Badge>
                <span className="text-brand-mute font-sans text-[13px]">{posts[0].date}</span>
              </div>
              <h3 className="text-brand-ink font-sans font-black text-[24px] md:text-[32px] mb-5 group-hover:text-brand-primary transition-colors">
                {posts[0].title}
              </h3>
              <p className="text-brand-body font-sans text-[16px] mb-6 line-clamp-2">
                Pelajari cara merawat pakaian berwarna agar tetap cerah dan tidak kusam meski sering dicuci. Kami membagikan 5 tips rahasia yang biasa digunakan profesional.
              </p>
              <span className="text-brand-ink font-sans font-semibold text-[15px] mt-auto">Baca selengkapnya &rarr;</span>
            </div>
          </Card>

          {/* Secondary Posts */}
          <div className="flex flex-col gap-8">
            {posts.slice(1).map((post, i) => (
              <Card key={i} variant="content" className="overflow-hidden flex flex-col p-0 h-full border border-gray-200 group">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="default">{post.category}</Badge>
                  </div>
                  <h3 className="text-brand-ink font-sans font-bold text-[18px] mb-4 group-hover:text-brand-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-brand-mute font-sans text-[12px]">{post.date}</span>
                    <span className="text-brand-ink font-sans font-semibold text-[13px]">Baca &rarr;</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
