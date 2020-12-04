
let mymap = L.map('mymap').setView([52.702238, 10.473799], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/anneliesetaylor/cki9icf6e462319pligzkewga/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5uZWxpZXNldGF5bG9yIiwiYSI6ImNraTk5N3pkZDBkZXUycm1xdXRleXpqZHcifQ.TFYB96hQHHp5Lg7CNfuIIA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(mymap);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h5>' + places[i].placeName + '</h5>' + '<p>' + places[i].descrip + '</p>')
  .addTo( mymap );
}
