const request = new XMLHttpRequest();
request.open("GET", `/data.json`);
request.send();
request.addEventListener("load", () => {
  const { data } = JSON.parse(request.responseText);
  console.log(data);
  for (const dat of data) {
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      `${dat.covidcase} Covid Cases were found`
    );
    new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([dat.longitude, dat.latitude])
      .setPopup(popup)
      .addTo(map);
  }
});
