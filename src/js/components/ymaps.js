function init() {
  // eslint-disable-next-line no-undef
  let map = new ymaps.Map("map", {
    center: [59.93858587880745, 30.323110063661197],
    zoom: 16
  });
  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
  map.behaviors.disable(["scrollZoom"]);
  // eslint-disable-next-line no-undef
  let myPlacemark = new ymaps.Placemark([59.93858587880745,30.323110063661197], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/marker.svg",
    iconImageSize: [33, 40],
    iconImageOffset: [-13, -33],
  });
  map.geoObjects.add(myPlacemark);
}
// eslint-disable-next-line no-undef
ymaps.ready(init);