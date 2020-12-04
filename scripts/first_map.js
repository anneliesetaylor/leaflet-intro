
let mymap = L.map('mymap').setView([29.029679, -81.302531], 15.66);

L.tileLayer('https://api.mapbox.com/styles/v1/anneliesetaylor/cki99k9mx4ele19qvrvyeln00/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5uZWxpZXNldGF5bG9yIiwiYSI6ImNraTk5N3pkZDBkZXUycm1xdXRleXpqZHcifQ.TFYB96hQHHp5Lg7CNfuIIA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
}).addTo(mymap);

let marker1 = L.marker([29.030400, -81.303210]).addTo(mymap);
marker1.bindPopup("<b>Oudom Thai and Sushi</b><br>Family-owned pick for classic Thai fare and sushi that offers vegetarian options.");

let marker2 = L.marker([29.028570, -81.303170]).addTo(mymap);
marker2.bindPopup("<b>Pho Company Noodle House</b><br>Another family-owned classic for Vietnamese cuisine as well as traditional teas and boba drinks.");

let marker3 = L.marker([29.029490, -81.303690]).addTo(mymap);
marker3.bindPopup("<b>Santorini Greek Cuisine</b><br>A local favorite for a variety of Greek Classics.");

let marker4 = L.marker([29.027740, -81.303060]).addTo(mymap);
marker4.bindPopup("<b>The Table Restaurant</b><br>A relaxed, family-friendly restraunt serving southern classics in addition to coffee and pasteries in their upstairs cafe.");
