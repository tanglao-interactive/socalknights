(() => {
  const mapElement = document.querySelector('#council-map');
  const cards = [...document.querySelectorAll('[data-council-card]')];
  const filters = [...document.querySelectorAll('[data-district-filter]')];
  if (!mapElement || !window.L) return;

  const councils = JSON.parse(document.querySelector('#council-data').textContent);
  const map = L.map(mapElement, { scrollWheelZoom: false }).setView([34.16, -118.36], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

  const icon = L.divIcon({ className: 'council-marker', html: '<span aria-hidden="true"></span>', iconSize: [24, 24], iconAnchor: [12, 12] });
  const markers = councils.map((council) => {
    const marker = L.marker([council.latitude, council.longitude], { icon, title: `Council ${council.councilNumber}: ${council.name}` });
    marker.bindPopup(`<strong>Council ${council.councilNumber}</strong><br>${council.name}<br>District ${council.district} · ${council.city}<br><a href="${council.mapsUrl}" target="_blank" rel="noopener">Open in Google Maps</a>`);
    marker.addTo(map);
    return { council, marker };
  });

  const applyFilter = (district) => {
    const visible = markers.filter(({ council, marker }) => {
      const show = district === 'all' || String(council.district) === district;
      if (show && !map.hasLayer(marker)) marker.addTo(map);
      if (!show && map.hasLayer(marker)) map.removeLayer(marker);
      return show;
    });
    cards.forEach((card) => { card.hidden = district !== 'all' && card.dataset.district !== district; });
    filters.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.districtFilter === district)));
    if (visible.length) {
      const bounds = L.latLngBounds(visible.map(({ council }) => [council.latitude, council.longitude]));
      map.fitBounds(bounds.pad(.15), { maxZoom: 12 });
    }
  };

  filters.forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.districtFilter)));
  applyFilter('all');
})();
