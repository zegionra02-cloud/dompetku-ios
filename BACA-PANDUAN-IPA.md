# Panduan Build & Install DompetKu.ipa di iPhone

Paket proyek ini sudah dikonfigurasi penuh menggunakan **Capacitor 6 iOS** lengkap dengan:
- Aplikasi utama `www/index.html` (Pencatat Pemasukan/Pengeluaran detail hingga satuan detik, Scan Foto Struk OCR, Filter Rekening, dan Export e-Statement PDF Native Share).
- Ikon aplikasi `1024x1024` & Splash Screen di folder `resources/`.
- Skrip injeksi izin Kamera & Galeri otomatis (`scripts/patch-ios-plist.js`).
- File kompilator otomatis Cloud macOS (`.github/workflows/build-ipa.yml`) untuk menghasilkan file **`DompetKu-iOS.ipa`** meskipun Anda menggunakan **Laptop Windows**.

---

## JALUR A: Jika Laptop Anda adalah **Windows** (Tanpa Mac)
Karena Apple mengunci kompilator Xcode hanya di macOS, proyek ini sudah dilengkapi robot **GitHub Actions (macOS Cloud Gratis)** yang akan merakit file `.ipa` untuk Anda, lalu Anda tinggal menginstalnya ke iPhone lewat kabel USB menggunakan **Sideloadly**.

### Tahap 1: Buat File `.ipa` Gratis Lewat GitHub
1. Buat akun gratis di [github.com](https://github.com) lalu klik **New Repository** (beri nama `dompetku-ios`, boleh *Public* agar kuota build gratis tak terbatas).
2. Ekstrak seluruh isi ZIP ini, lalu upload semua file & foldernya (pastikan folder `.github/workflows/build-ipa.yml` ikut ter-upload) ke repository tersebut.
   *(Tips termudah lewat Git di laptop: buka terminal di folder ini lalu jalankan `git init`, `git add .`, `git commit -m "init"`, lalu push ke GitHub).*
3. Buka tab **Actions** di repository GitHub Anda → klik workflow **Build DompetKu iOS (.ipa)** → klik **Run workflow**.
4. Tunggu sekitar **3–4 menit** sampai centang hijau muncul. Gulir ke bagian **Artifacts** di bawah halaman tersebut, lalu klik **DompetKu-iOS-IPA** untuk mengunduh file **`DompetKu-iOS.ipa`** murni ke laptop Anda!

### Tahap 2: Install `DompetKu-iOS.ipa` ke iPhone (Lewat Laptop Windows)
1. Pastikan **iTunes** dan **iCloud** versi web Apple (bukan versi Microsoft Store) sudah terpasang di laptop Windows Anda, lalu hubungkan iPhone ke laptop memakai kabel data dan tekan **Percayai Komputer Ini (Trust)** di layar iPhone.
2. Unduh dan buka aplikasi gratis **Sideloadly** (`sideloadly.io`) di laptop.
3. Seret (*drag & drop*) file **`DompetKu-iOS.ipa`** ke kotak IPA di Sideloadly.
4. Masukkan alamat email **Apple ID** Anda di kolom *Apple account*, lalu klik **Start** (masukkan kode OTP Apple jika diminta).
5. Setelah tertulis **Done**, buka iPhone Anda:
   - Masuk ke **Pengaturan (Settings) → Umum (General) → VPN & Manajemen Perangkat (VPN & Device Management)** → ketuk email Apple ID Anda → pilih **Percayai (Trust)**.
   - Khusus iOS 16 ke atas: aktifkan **Mode Pengembang (Developer Mode)** di **Pengaturan → Privasi & Keamanan → Mode Pengembang** (iPhone akan restart sekali).
6. Selesai! Aplikasi **DompetKu** kini terinstal murni di iPhone Anda.

---

## JALUR B: Jika Laptop Anda adalah **MacBook (macOS)**
Anda bisa langsung menginstal ke iPhone atau mengekspor `.ipa` langsung dari laptop Anda:

1. Pastikan **Node.js** (versi 18+) dan **Xcode** (dari Mac App Store) sudah terpasang.
2. Ekstrak folder ZIP ini, buka **Terminal** di dalam folder `DompetKu-iOS-IPA-Project`, lalu jalankan:
   ```bash
   npm install
   npm run init:ios
   npm run open:xcode
   ```
3. Xcode akan otomatis terbuka:
   - Klik ikon proyek **App** di panel kiri atas → buka tab **Signing & Capabilities**.
   - Centang **Automatically manage signing**, lalu pada menu **Team**, login dan pilih **Apple ID pribadi Anda** (gratis).
   - Jika muncul peringatan *Bundle Identifier*, ubah akhiran `com.dompetku.keuangan.ios` menjadi unik, misalnya `com.dompetku.namaanda`.
4. Hubungkan iPhone ke Mac dengan kabel USB, pilih nama iPhone Anda di bar atas Xcode, lalu tekan tombol **Play (▶ Run)**.
5. Di iPhone, buka **Pengaturan → Umum → VPN & Manajemen Perangkat → Percayai Apple ID Anda**, dan aplikasi langsung terpasang!
