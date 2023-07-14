$.getJSON("/geojson/DataBanjir_Jakarta_Januari2020.json", function(json){
  var temp = json;
  map(temp);
})

function map(temp) {
  console.log(temp[0]["kecamatan"]);
  const map = L.map('map').setView([-6.2297465, 106.829518], 12);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);


    function popUp(f, l) {
        var out = [];

        if (f.properties.WADMPR) {
            out.push("Kabupaten: " + f.properties.WADMKK);
          }

        if (f.properties.WADMKK) {
            out.push("Kecamatan: " + f.properties.WADMKC);
          }

        if (f.properties) {
          if (f.properties.NAMOBJ) {
            out.push("Kelurahan/Desa: " + f.properties.NAMOBJ);
          }

          if (f.properties.J_T_Jiwa) {
            out.push("Jumlah Terdampak: " + f.properties.J_T_Jiwa + " Jiwa");
          }

          if (f.properties.Jml_Luka_R) {
            out.push("Jumlah Luka Ringan: " + f.properties.Jml_Luka_R + " Jiwa");
          }

          if (f.properties.J_P_Tinggi) {
            out.push("Jumlah Pengungsi: " + f.properties.J_P_Tinggi + " RW");
          }

          if (f.properties.K_Air) {
            out.push("Ketinggian Air: " + f.properties.K_Air);
          }

          if (f.properties.Tanggal_K) {
            out.push("Tanggal Kejadian: " + f.properties.Tanggal_K);
          }
      
          l.bindPopup(out.join("<br />"));
        }
    }
    var jsonTest = new L.GeoJSON.AJAX(["/geojson/Data Banjir DKI 2020.geojson"],{onEachFeature:popUp}).addTo(map);
  
}