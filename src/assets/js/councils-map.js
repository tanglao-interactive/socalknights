(() => {
  const mapElement = document.querySelector('#council-map');
  const districtSelect = document.querySelector('[data-district-select]');
  const groups = [...document.querySelectorAll('[data-district-group]')];
  const status = document.querySelector('#map-status');
  if (!mapElement || !window.L) return;

  const districts = JSON.parse(document.querySelector('#district-data').textContent);
  const councils = districts.flatMap((district) => district.councils.map((council) => ({ ...council, district: district.number })));
  const mappedCouncils = councils.filter((council) => council.locationVerified && Number.isFinite(council.latitude) && Number.isFinite(council.longitude));
  // The map is supplementary to the complete semantic directory. Keeping the
  // map canvas and dozens of duplicate markers out of the tab order prevents a
  // long keyboard detour while the ordinary directory links remain available.
  const map = L.map(mapElement, { keyboard: false, scrollWheelZoom: false }).setView([34.16, -118.36], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

  const icon = L.divIcon({ className: 'council-marker', html: '<span aria-hidden="true"></span>', iconSize: [24, 24], iconAnchor: [12, 12] });
  const mapsUrl = (council) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Knights of Columbus Council ${council.councilNumber} ${council.city} CA`)}`;
  const markers = mappedCouncils.map((council) => {
    const marker = L.marker([council.latitude, council.longitude], { icon, keyboard: false, title: `Council ${council.councilNumber}: ${council.name}` });
    marker.bindPopup(`<strong>Council ${council.councilNumber}</strong><br>${council.name}<br>District ${council.district} · ${council.city}<br><a href="${mapsUrl(council)}" target="_blank" rel="noopener">Open in Google Maps</a>`);
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
    groups.forEach((group) => {
      const show = district === 'all' || group.dataset.district === district;
      group.hidden = !show;
      if (district !== 'all') group.open = show;
    });
    if (districtSelect) districtSelect.value = district;
    const listedCount = district === 'all'
      ? councils.length
      : councils.filter((council) => String(council.district) === district).length;
    const districtLabel = district === 'all' ? 'all districts' : `District ${district}`;
    if (status) status.textContent = `${visible.length} mapped locations shown for ${listedCount} listed ${listedCount === 1 ? 'council' : 'councils'} in ${districtLabel}.`;
    if (visible.length) {
      const bounds = L.latLngBounds(visible.map(({ council }) => [council.latitude, council.longitude]));
      map.fitBounds(bounds.pad(.15), { maxZoom: 12 });
    }
  };

  districtSelect?.addEventListener('change', () => applyFilter(districtSelect.value));
  groups.forEach((group) => group.addEventListener('toggle', () => {
    if (group.open && !group.hidden && districtSelect?.value === 'all') applyFilter(group.dataset.district);
  }));
  applyFilter('all');
})();
