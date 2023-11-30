var map = L.map('map').setView([40.0417, -3.611], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; Tanden Arajuez 2023'
}).addTo(map);
// coordenadas salón de los Reyes Catolicos 40.03847, -3.60792

var markerReyesCatolicos = new L.Marker(new L.LatLng(40.03847, -3.60792), {
    icon:   new L.NumberedDivIcon({number: '1'})
}).addTo(map);
// ;
// var markerPajarera = L.marker([40.03905, -3.61005],{
//     icon:   new L.NumberedDivIcon({number: '2'})
// }).addTo(map);
// var markerEspina = L.marker([40.03817,-3.60923],{
//     icon:   new L.NumberedDivIcon({number: '3'})
// }).addTo(map);

var markerPresa = L.marker([40.03687,-3.60672],{
    icon:   new L.NumberedDivIcon({number: '2'})
}).addTo(map);
var markerLloron = L.marker([40.04067,-3.60940],{
    icon:   new L.NumberedDivIcon({number: '3'})
}).addTo(map);
var markerTronca = L.marker([40.04078,-3.60992],{
    icon:   new L.NumberedDivIcon({number: '4'})
}).addTo(map);
var markerBaco = L.marker([40.04034,-3.61273],{
    icon:   new L.NumberedDivIcon({number: '5'})
}).addTo(map);
var markerApolo = L.marker([40.03737,-3.60796],{
    icon:   new L.NumberedDivIcon({number: '6'})
}).addTo(map);



// contorno parque
var contornoJardin = L.polygon([
    [40.0369797,-3.6073454],
    [40.0377354,-3.6075063],
    [40.0394522, -3.6079677],
    [40.0403311,-3.6082037],
    [40.0411689,-3.6084719],
    [40.0418753,-3.6087294],
    [40.0425611,-3.6089001],
    [40.0431443,-3.6092434],
    [40.0440889,-3.6100051],
    [40.0449184,-3.6107025],
    [40.0450745,-3.6108527],
    [40.0450662,-3.6112282],
    [40.0446966,-3.611593],
    [40.0444749,-3.6117968],
    [40.0442449,-3.6121402],
    [40.0439739,-3.6120651],
    [40.0440067,-3.6117968],
    [40.0439492,-3.611475],
    [40.0437028,-3.6113999],
    [40.0433414,-3.611711],
    [40.0430622,-3.6121509],
    [40.042824,-3.612623],
    [40.0423558,-3.6128483],
    [40.0418049,-3.6131935],
    [40.0415379,-3.613408],
    [40.040885,-3.6138318],
    [40.04031,-3.6142181],
    [40.0397843,-3.6148833],
    [40.0395543,-3.6154841],
    [40.03916,-3.6161707],
    [40.0386836,-3.6170719],
    [40.0384536,-3.6175655],
    [40.0383222,-3.6168359],
    [40.0387,-3.6157416],
    [40.0392422,-3.614776],
    [40.0394064,-3.6142395],
    [40.0394229,-3.6137889],
    [40.0390615,-3.6132096],
    [40.0388643,-3.6123727],
    [40.0387986,-3.6116217],
    [40.038355,-3.6107205],
    [40.0378293,-3.6100982],
    [40.0374351,-3.6094545],
    [40.0372123,-3.6091063],
    [40.0372657,-3.6087845],
    [40.0372287,-3.6082695],
    [40.0371076,-3.6083285],
    [40.0370418,-3.608358],
    [40.0369823,-3.6082668],
    [40.0369084,-3.6079878],
    [40.0368632,-3.6077464],
    [40.0368365,-3.6074836],
    [40.036857,-3.6073602],
    [40.0369289,-3.6073253],
    [40.0369797,-3.6073454]
], {
    color: '#A19861',
    fillColor: 'purple',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)
//añadimos popup
markerReyesCatolicos.bindPopup("Salon de los Reyes Católicos <a href='audiokillian.github.io/audio.mp3'>Oir audio</a>").openPopup();
// markerPajarera.bindPopup("La pajarera <a href='abdel.github.io/audio.mp3'>Oir audio</a>").openPopup();
// markerEspina.bindPopup("Niño de la Espina <a href='abdel.github.io/audio.mp3'>Oir audio</a>").openPopup();
markerPresa.bindPopup("Presa <a href='abdel.github.io/audio.mp3'>Oir audio</a>").openPopup();
markerLloron.bindPopup("Lloron <a href='abdel.github.io/audio.mp3'>Oir audio</a>").openPopup();
markerTronca.bindPopup("Tronca <a href='abdel.github.io/audio.mp3'>Oir audio</a>").openPopup();
markerBaco.bindPopup("Baco <a href='abdel.github.io/audio.mp3'>Oir audio</a>").openPopup();
markerApolo.bindPopup("Apolo <a href='abdel.github.io/audio.mp3'>Oir audio</a>").openPopup();




// añadimos una imagen a modo de logotipo
var imageUrl='images/explorador.png';
var latLngBounds=  [[40.0427,-3.6124], [40.0413, -3.61]];
var options= {
    opacity: 0.8,
    alt: 'Logotipo de Tandem'
}
var logotipo = L.imageOverlay(imageUrl, latLngBounds, options);
logotipo.addTo(map);

//que te mande al mapa
document.getElementById('reyesCatolicos').addEventListener('click',function(){
    // alert('uy me has tocado');
    markerReyesCatolicos.fire('click');
});
// document.getElementById('pajarera').addEventListener('click',function(){
//     markerPajarera.fire('click');
// });
// document.getElementById('espina').addEventListener('click',function(){
//     markerEspina.fire('click');
// });
document.getElementById('presa').addEventListener('click',function(){
    markerPresa.fire('click');
});
document.getElementById('lloron').addEventListener('click',function(){
    markerLloron.fire('click');
});
document.getElementById('tronca').addEventListener('click',function(){
    markerTronca.fire('click');
});
document.getElementById('baco').addEventListener('click',function(){
    markerBaco.fire('click');
});
document.getElementById('apolo').addEventListener('click',function(){
    markerApolo.fire('click');
});


/////////////////////////////////////////////////////
