Khairun Nisa
2308107010074
GIS B

# Penjelasan Kode WebGIS Kampus di Banda Aceh
Berikut penjelasan singkat untuk kode WebGIS kampus di Banda Aceh:

## Struktur Kode
### index.html
- Membuat struktur dasar halaman web dengan judul "WebGIS Kampus di Banda Aceh"
- Memuat library Leaflet CSS untuk styling peta
- Menyediakan elemen `<div id="map">` sebagai container untuk peta
- Memuat library Leaflet JavaScript dan file script.js kustom

### script.js
- Membuat peta Leaflet dan menetapkan titik pusat di Banda Aceh (koordinat 5.5483°N, 95.3238°E) dengan zoom level 13
- Menambahkan layer peta dasar dari OpenStreetMap
- Mengambil data kampus dari file 'export.geojson' menggunakan Fetch API
- Menampilkan data GeoJSON pada peta dengan popup yang menampilkan nama kampus ketika marker diklik

### style.css
- Mengatur style dasar untuk halaman web
- Membuat header dengan latar belakang biru
- Mengatur ukuran peta agar mengisi 90% tinggi viewport
- Menyesuaikan font dan margin untuk tampilan yang lebih baik

Aplikasi WebGIS ini dirancang untuk menampilkan lokasi berbagai kampus di wilayah Banda Aceh dengan data yang dimuat dari file GeoJSON eksternal.
