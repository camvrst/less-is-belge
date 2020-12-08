import './style.scss';
import L from 'leaflet';
import { marques } from './src/data';
import { header, footer } from './src/view/view';
import 'leaflet-defaulticon-compatibility';

/* INCLUDE HEADER AND FOOTER */
const headerHTML = document.querySelector('header');
const footerHTML = document.querySelector('footer.footer');
console.log(headerHTML);

headerHTML.innerHTML = header;
footerHTML.innerHTML = footer;

/* RADIO BUTTONS AND FILETRS */

const radioBtns = document.querySelectorAll('.radio-btn');
const sectionAnnuaire = document.querySelector('section.all-marques');
console.log(sectionAnnuaire);

for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener('click', () => {
    radioBtns[i].classList.toggle('radio-filled');
    console.log('toto');
  });
}

/* DISPLAY ALL MARKS */

marques.forEach((marque) => {
  const allMarques = `
            <div class="w-40">
              <a href="${marque.url}" target=blank>
              <div class="img-container">
                <img
                  class="img-marque"
                  src="${marque.image}"
                  alt="${marque.nom}"
                />
              </div>
                <h3>${marque.nom}</h3>
              </a>
            </div>
  `;
  sectionAnnuaire.innerHTML += allMarques;
});

/// //// MAP //////

// CUSTOM PIN ICON

const eyeIcon = L.icon({
  iconUrl: './assets/img/eyepin7.png',
  iconSize: [32, 55], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

// MAP AND VIEW SETTINGS

const myMap = L.map('map');
const bxl = [50.85040233847921, 4.352729224511531];
myMap.setView(bxl, 13);

// FREE TILE
const myLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 19,
});
myMap.addLayer(myLayer);

// MARKERS

const markers = [
  {
    nom: 'Episode',
    coord: ['50.845606514632294', '4.3524056962972635'],
  },
  {
    nom: 'Think Twice',
    coord: ['50.84910153436276', '4.345443513909804'],
  },
  {
    nom: 'Isabelle Bajart',
    coord: ['50.84902908222008', '4.346073842745757'],
  },
  {
    nom: 'Mardi Editions',
    coord: ['50.8240553511075', '4.359173156237397'],
  },
];

// INDIVUDAL MARKERS
/*
for (const marker of markers) {
  const pin = L.marker(marker.coord);
  pin.addTo(myMap);
  pin.bindPopup(`${marker.nom}`);
}
*/
// GROUPED MARKERS

const markerGroup = [];
for (const marker of marques) {
  const pin = L.marker(marker.coord, { icon: eyeIcon });
  pin.bindPopup(`${marker.nom}`);
  markerGroup.push(pin);
}

const pinGroup = L.layerGroup(markerGroup);
myMap.addLayer(pinGroup);

// BTN HIDE
/*
document.getElementById('btn-hide').addEventListener('click', () => {
  if (myMap.hasLayer(pinGroup)) {
    myMap.removeLayer(pinGroup);
  } else {
    myMap.addLayer(pinGroup);
  }
});
*/
