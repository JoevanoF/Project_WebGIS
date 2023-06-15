const map = L.map('map').setView([-8.6736524, 115.203102], 11);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

    function popUp(f, l) {
        var out = [];

        if (f.properties.WADMPR) {
            out.push("Provinsi: " + f.properties.WADMPR);
          }

        if (f.properties.WADMKK) {
            out.push("Kabupaten: " + f.properties.WADMKK);
          }

        if (f.properties) {
          if (f.properties.NAMOBJ) {
            out.push("Kecamatan: " + f.properties.NAMOBJ);
          }
      
          l.bindPopup(out.join("<br />"));
        }
    }
    var jsonTest = new L.GeoJSON.AJAX(["/geojson/Admin_Denpasar_AR.geojson"],{onEachFeature:popUp}).addTo(map);
