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
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-brand-ink font-sans font-black text-[40px] md:text-[64px] tracking-tight mb-6">Blog Kamojan Laundry</h1>
          <p className="text-brand-body font-sans text-[16px] md:text-[20px]">
            Tips, trik, dan informasi seputar perawatan pakaian Anda.
          </p>
        </div>
      </section>

      <section className="bg-brand-canvas py-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} variant="converter" className="overflow-hidden flex flex-col p-0 h-full">
              <div className="aspect-video bg-gray-200">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="default">{post.category}</Badge>
                  <span className="text-brand-mute font-sans text-[12px]">{post.date}</span>
                </div>
                <h3 className="text-brand-ink font-sans font-black text-[20px] mb-4 hover:text-brand-primary cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-body font-sans text-[14px] mt-auto">Baca selengkapnya &rarr;</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
