// Membuat peta dan mengatur pusatnya di Banda Aceh
var map = L.map('map').setView([5.5483, 95.3238], 13);

// Menambahkan layer peta dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Mengambil data dari file export.geojson
fetch('export.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                var namaKampus = feature.properties?.name ?? "Nama kampus tidak tersedia";
                layer.bindPopup(`<b>${namaKampus}</b>`);
            }
        }).addTo(map);
    })
    .catch(error => console.error('Gagal memuat GeoJSON:', error));
