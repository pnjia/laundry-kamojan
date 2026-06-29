# UI Specification

## Purpose
Dokumen ini mendefinisikan struktur antarmuka pengguna (UI) untuk seluruh halaman website Kamojan Laundry. Fokus dokumen ini adalah layout, hierarchy, responsive behavior, dan interaction pattern, bukan detail visual.

## Design Philosophy
- One Screen, One Goal
- Mobile First
- Content First
- Conversion First

## Grid System
- Desktop: 12 columns
- Tablet: 8 columns
- Mobile: 4 columns
- Max container width: 1200px

## Homepage Structure
1. Navbar
2. Hero
3. Trust Indicators
4. Services
5. Why Choose Us
6. Pricing
7. How It Works
8. Testimonials
9. Gallery
10. FAQ
11. Location
12. Final CTA
13. Footer

## Navigation
Desktop:
- Logo
- Main Navigation
- WhatsApp CTA

Mobile:
- Logo
- Hamburger Menu
- Drawer Navigation

## Responsive Rules
- No horizontal scrolling.
- Semua section ditampilkan secara vertikal pada mobile.
- CTA selalu mudah dijangkau.

## Interaction Patterns
- Sticky navbar.
- Hover state untuk card dan button.
- Accordion untuk FAQ.
- Scroll reveal ringan.
- Focus state yang jelas.

## Accessibility
- Minimum touch target 44px.
- Heading hierarchy konsisten.
- Keyboard navigation didukung.
- Informasi tidak hanya dibedakan melalui warna.

## Empty States
Siapkan empty state untuk:
- Blog tanpa artikel.
- Gallery kosong.
- Halaman 404.
- Pencarian tanpa hasil (future).
