//____________   КАРТА 2гис   _______   MAP 2GIS    _______//
var map;
DG.then(function () {
    map = DG.map('map', {
        center: [42.877737, 74.59211],
        zoom: 15
    });
    DG.marker([42.877737, 74.59221]).addTo(map).bindPopup('Maker\'s bootcamp!');
});