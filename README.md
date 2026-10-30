# Akashi Store: Katalog Akun Mobile Legends

Website statis katalog akun Mobile Legends yang dibuat sebagai mini project **Weekly Meet Catalyst** (Final Assignment).

> Website ini merupakan demonstrasi untuk mini project Catalyst. Seluruh data akun yang digunakan bersifat fiktif.

## Deskripsi

Akashi Store adalah website satu halaman (single-page) yang menampilkan katalog akun Mobile Legends. Pengunjung dapat melihat informasi rank, jumlah hero dan skin, server, serta harga setiap akun, lalu menghubungi kontak yang tersedia untuk bertanya lebih lanjut.

## Latar Belakang dan Tujuan

Memilih akun Mobile Legends biasanya membutuhkan perbandingan rank, koleksi hero, skin, dan harga. Akashi Store dibuat untuk menyajikan informasi tersebut dengan cara yang mudah dibaca dan dibandingkan.

Dari sisi pembelajaran, project ini bertujuan untuk:
- Menerapkan HTML, CSS, dan JavaScript dasar untuk membangun website yang berfungsi.
- Menerapkan workflow kolaborasi di GitHub: issue, branch, commit, pull request, dan review.
- Membiasakan pembagian tugas dan tanggung jawab dalam tim developer.

## Fitur

- **Navbar** dengan tautan ke setiap section dan tampilan yang menyesuaikan layar ponsel.
- **Home / Hero** berisi pengenalan Akashi Store, tombol ajakan menuju katalog, dan tiga kartu informasi.
- **Tentang Kami** menjelaskan fungsi website dan informasi yang bisa dilihat pengunjung.
- **Katalog Akun** berisi daftar akun yang dapat digeser dengan tombol panah atau drag. Setiap akun memiliki galeri foto dan spesifikasi (rank tertinggi, jumlah hero, jumlah skin, server, dan harga).
- **Kontak** melalui WhatsApp dan email.
- **Footer** berisi navigasi cepat dan informasi hak cipta.
- Animasi otomatis dinonaktifkan bagi pengguna yang mengaktifkan pengaturan *reduced motion*.

## Teknologi

- HTML5
- CSS3 (custom properties, Flexbox, Grid, media query, animasi)
- JavaScript dasar (tanpa framework atau library)

## Struktur Folder

```
akashi-store/
├── index.html      # halaman utama (HTML, CSS, dan JavaScript)
├── logo.jpeg       # logo Akashi Store
├── slide1.jpeg     # foto akun
├── slide2.jpeg     # foto akun
├── README.md
└── screenshots/    # dokumentasi tampilan website
```

## Cara Menjalankan Secara Lokal

Website ini tidak memerlukan instalasi tambahan.

1. Clone repository ini:
   ```bash
   git clone https://github.com/[username]/[nama-repo].git
   cd [nama-repo]
   ```
2. Buka file `index.html` langsung di browser, atau jalankan local server:
   ```bash
   python -m http.server 8000
   ```
   Lalu buka `http://localhost:8000` di browser. Di macOS/Linux, gunakan `python3`.

Pastikan file gambar (`logo.jpeg`, `slide1.jpeg`, `slide2.jpeg`) berada di folder yang sama dengan `index.html`.

## Anggota Kelompok

Kelompok: [nama kelompok]

| Nama | Username GitHub | Bagian |
|---|---|---|
| [Nama Anggota 1] | [@username1] | Navbar & Home / Hero |
| [Nama Anggota 2] | [@username2] | About / Profile |
| [Nama Anggota 3] | [@username3] | Main Content (Katalog Akun) |
| [Nama Anggota 4] | [@username4] | Contact & Footer |

## Pembagian Tugas dan Kontribusi

**[Nama Anggota 1] - Navbar & Home / Hero**
- Branch: `feature/navbar`, `feature/homepage`
- Issue: #[nomor], #[nomor]
- Pekerjaan: merapikan navbar dan hero, memeriksa tombol dan animasi di homepage, serta memastikan tampilan responsif.
- Pull Request: [link PR]

**[Nama Anggota 2] - About / Profile**
- Branch: `feature/about`
- Issue: #[nomor], #[nomor]
- Pekerjaan: melengkapi latar belakang, visi dan misi, menyelaraskan penamaan menu, serta memeriksa tampilan About di layar kecil.
- Pull Request: [link PR]

**[Nama Anggota 3] - Main Content (Katalog Akun)**
- Branch: `feature/main-content`
- Issue: #[nomor], #[nomor]
- Pekerjaan: melengkapi data Akun #2 dan #3, serta mengganti foto sesuai masing-masing akun.
- Pull Request: [link PR]

**[Nama Anggota 4] - Contact & Footer**
- Branch: `feature/contact`
- Issue: #[nomor], #[nomor]
- Pekerjaan: merapikan bagian kontak, termasuk status Instagram, serta menyelaraskan footer dan menghapus CSS yang duplikat.
- Pull Request: [link PR]

**Bersama:** README dan screenshot. PIC: [nama].

## Alur Kerja Git

- Setiap anggota membuat branch sendiri dengan format `feature/nama-fitur`.
- Setiap perubahan dikirim melalui Pull Request ke branch `main`.
- Setiap Pull Request direview minimal oleh satu anggota lain sebelum di-merge.
- Branch `main` diusahakan selalu berisi versi website yang dapat dijalankan.

## Screenshot

Dokumentasi tampilan website tersimpan di folder `screenshots/`.

![Halaman utama](screenshots/home.png)
![Tentang Kami](screenshots/about.png)
![Katalog Akun](screenshots/katalog.png)
![Kontak dan Footer](screenshots/kontak.png)

---

Dibuat untuk Weekly Meet Catalyst, 2026.
