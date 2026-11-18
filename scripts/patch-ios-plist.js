const fs = require('fs');
const path = require('path');

const plistPath = path.join(__dirname, '..', 'ios', 'App', 'App', 'Info.plist');
if (!fs.existsSync(plistPath)) {
  console.log('Info.plist belum ditemukan, lewati patch.');
  process.exit(0);
}

let plist = fs.readFileSync(plistPath, 'utf8');

const permissions = `
	<key>NSCameraUsageDescription</key>
	<string>DompetKu memerlukan akses kamera untuk memotret dan membaca struk belanja otomatis.</string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string>DompetKu memerlukan akses galeri foto untuk mengunggah gambar struk transaksi.</string>
	<key>NSPhotoLibraryAddUsageDescription</key>
	<string>DompetKu memerlukan izin untuk menyimpan bukti laporan dan struk.</string>
	<key>LSSupportsOpeningDocumentsInPlace</key>
	<true/>
	<key>UIFileSharingEnabled</key>
	<true/>
`;

if (!plist.includes('NSCameraUsageDescription')) {
  plist = plist.replace('</dict>\n</plist>', permissions + '</dict>\n</plist>');
  fs.writeFileSync(plistPath, plist, 'utf8');
  console.log('Berhasil menambahkan izin Kamera, Galeri, dan File PDF ke Info.plist!');
} else {
  console.log('Izin Info.plist sudah terpasang.');
}
