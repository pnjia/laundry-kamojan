# Technical Specification

## Purpose
Dokumen ini menjadi acuan implementasi teknis untuk AI Agent dan developer agar seluruh kode memiliki arsitektur yang konsisten, mudah dipelihara, dan siap dikembangkan.

## Technology Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- Framer Motion (minimal)
- Vercel

## Project Structure
```
app/
components/
content/
data/
lib/
hooks/
styles/
public/
types/
constants/
docs/
```

## Rendering Strategy
- Static Rendering untuk halaman statis.
- Server Components sebagai default.
- Client Components hanya jika diperlukan interaktivitas.

## Data Organization
- content/: copywriting dan artikel.
- data/: layanan, harga, FAQ, galeri, konfigurasi bisnis.

## Coding Standards
- Gunakan TypeScript strict mode.
- Hindari duplikasi komponen.
- Gunakan composition daripada inheritance.
- Semua komponen memiliki props yang terdokumentasi.

## Performance
- Optimalkan gambar dengan next/image.
- Lazy loading untuk aset non-kritis.
- Gunakan font optimization bawaan Next.js.

## Accessibility
- Semantic HTML.
- Keyboard navigation.
- Focus state.
- Kontras warna sesuai WCAG.

## Deployment
- Platform: Vercel.
- Gunakan environment variables untuk konfigurasi.
- Pastikan build bebas warning dan error sebelum deployment.
