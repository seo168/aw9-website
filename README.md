# AW9 Website

Website AW9 dengan layout referensi yang telah disetujui. AW9 menjadi merek utama, diikuti AW9Win, AW9Go, AW9Rummy, dan varian AW9 lainnya.

## Pratinjau lokal

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Buka http://127.0.0.1:4173/.

## Struktur

- `dist/index.html`: halaman utama dan initial state.
- `dist/api/web_config`: konfigurasi platform, banner, metadata, dan URL tujuan.
- `dist/aw9-v107/`: bundle frontend dengan merek AW9.
- `dist/brand/`: logo, banner dan popup AW9, serta pengaman tautan.
- `dist/media/`: aset tampilan yang dirujuk halaman.

Tidak memerlukan instalasi paket atau build. Sajikan isi `dist` pada root domain; path aset menggunakan awalan `/`.

## Status

- Layout, warna dan susunan referensi dipertahankan.
- Teks dan gambar merek diperbarui ke AW9.
- URL platform/unduhan belum diberikan; akses eksternal dinonaktifkan.
- Tidak termasuk backend akun, game, transaksi, atau APK.
- Konten dan klaim promosi dari contoh referensi perlu disesuaikan dengan informasi bisnis sebenarnya sebelum publikasi.

Repository ini menyimpan source dan aset frontend final. Pengunggahan ke GitHub tidak otomatis mengaktifkan website publik atau GitHub Pages.
