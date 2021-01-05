import './style.scss';
import L from 'leaflet';
import $ from 'jquery';
import { marques } from './src/data/data';
import { header, footer } from './src/view/view';
import 'leaflet-defaulticon-compatibility';


/* INCLUDE HEADER AND FOOTER */
const headerHTML = document.querySelector('header');
const footerHTML = document.querySelector('footer.footer');

headerHTML.innerHTML = header;
footerHTML.innerHTML = footer;

// ***** NAV BAR ANIMATION ON CLICK RESPONSIVE ***** //

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('toggle');
});

/* RADIO BUTTONS AND FILTERS */

const radioBtns = document.querySelectorAll('.radio-btn');
const sectionAnnuaire = document.querySelector('section.all-marques');

for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].addEventListener('click', () => {
    radioBtns[i].classList.toggle('radio-filled');
  });
}

/* DISPLAY ALL MARKS */

const showAllMarques = () => {
  marques.forEach((marque) => {
    const allMarques = `
            <div class="w-40 ${(marque.categorie).join(' ')}">
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
};

showAllMarques();

// FILTERS ON MARKS

const showFemme = document.querySelector('button.show-femme');
const showHomme = document.querySelector('button.show-homme');
const showEnfant = document.querySelector('button.show-enfant');
const showMaga = document.querySelector('button.show-maga');
const showMulti = document.querySelector('button.show-multi');
const showSeconde = document.querySelector('button.show-seconde');
const marquesDiv = document.querySelectorAll('.all-marques > div.w-40');

let radioFilled = false;
let radioFilledFe = false;
let radioFilledHo = false;
let radioFilledEn = false;
let radioFilledSe = false;
let radioFilledMa = false;
let radioFilledMu = false;

// FILTRES

let filtresActifs = [];

const applyFilters = () => {
  console.log(filtresActifs);
  for (const div of marquesDiv) {
    let isFound = false;
    if (filtresActifs.length === 0) {
      isFound = true;
    }
    for (const filtre of filtresActifs) {
      isFound = div.classList.contains(filtre);
      if (isFound) {
        div.style.display = 'block';
        break;
      } else {
        div.style.display = 'none';
      }
    }
  }
};

showFemme.addEventListener('click', () => {
  radioFilledFe = !radioFilledFe;
  if (radioFilledFe === true) {
    filtresActifs.push('Femmes');
  } else {
    const index = filtresActifs.indexOf('Femmes');
    filtresActifs.splice(index, 1);
  }
  applyFilters();
});

// SHOW ONLY MEN

showHomme.addEventListener('click', () => {
  radioFilledHo = !radioFilledHo;
  if (radioFilledHo === true) {
    filtresActifs.push('Hommes');
  } else {
    const index = filtresActifs.indexOf('Hommes');
    filtresActifs.splice(index, 1);
  }
  applyFilters();
});

// SHOW ONLY CHILDREN

showEnfant.addEventListener('click', () => {
  radioFilledEn = !radioFilledEn;
  if (radioFilledEn === true) {
    filtresActifs.push('Enfants');
  } else {
    const index = filtresActifs.indexOf('Enfants');
    filtresActifs.splice(index, 1);
  }
  applyFilters();
});

// SHOW ONLY MARKS THAT HAVE A SHOP

showMaga.addEventListener('click', () => {
  radioFilledMa = !radioFilledMa;
  if (radioFilledMa === true) {
    filtresActifs.push('Marque');
  } else {
    const index = filtresActifs.indexOf('Marque');
    filtresActifs.splice(index, 1);
  }
  applyFilters();
});

// SHOW ONLY MULTIMARKS

showMulti.addEventListener('click', () => {
  radioFilledMu = !radioFilledMu;
  if (radioFilledMu === true) {
    filtresActifs.push('Multimarques');
    } else {
      const index = filtresActifs.indexOf('Mutlimarques');
      filtresActifs.splice(index, 1);
  }
  applyFilters();
});

// SHOW ONLY SECONDE MAIN

showSeconde.addEventListener('click', () => {
  radioFilledSe = !radioFilledSe;
  if (radioFilledSe === true) {
    filtresActifs.push('Seconde-main');
  } else  {
    const index = filtresActifs.indexOf('Seconde-main');
    filtresActifs.splice(index, 1);
  }
  applyFilters();
});

/* SEARCH BAR */
/** ******** DOIT encore faire le bouton search */

const searchIpt = document.getElementById('search-annuaire');
const searchBtn = document.getElementById('btn-search-annuaire');
const resultsSection = document.getElementById('section-results');

searchIpt.addEventListener('input', (e) => {
  const results = [];
  const needle = e.currentTarget.value.toLowerCase().trim();
  resultsSection.style.display = 'block';
  for (const marque of marques) {
    const lowerCaseMarque = marque.nom.toLowerCase();
    if (lowerCaseMarque.includes(needle)) {
      results.push(marque);
      const showSearchResult = () => {
        resultsSection.innerHTML = `
        <div class="w-40 ${(marque.categorie).join(' ')}">
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
      };
      showSearchResult();
    }
  }
  if (needle === '') {
    resultsSection.style.display = 'none';
  }
});

// ------ MAP ------ //

const showMap = document.querySelector('button.show-map');
const mapDiv = document.getElementById('map-section');
showMap.addEventListener('click', () => {
  radioFilled = !radioFilled;
  if (radioFilled === true) {
    mapDiv.style.display = 'none';
  } else if (radioFilled === false) {
    mapDiv.style.display = 'block';
  }
});

// CUSTOM PIN ICON

const eyeIconMa = L.icon({
  iconUrl: './assets/img/pinMa4.png',
  iconSize: [32, 55], 
  iconAnchor: [22, 94], 
  popupAnchor: [-3, -76], 
});

const eyeIconMu = L.icon({
  iconUrl: './assets/img/pinMu2.png',
  iconSize: [32, 55], 
  iconAnchor: [22, 94], 
  popupAnchor: [-3, -76], 
});

const eyeIconSe = L.icon({
  iconUrl: './assets/img/pinSe2.png',
  iconSize: [32, 55], 
  iconAnchor: [22, 94], 
  popupAnchor: [-3, -76], 
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


const markerMarque = [];
for (const marker of marques) {
  if (marker.categorie.includes('Marque')  && marker.coord.length > 0) {
    const pinMarque = L.marker(marker.coord, { icon: eyeIconMa });
    pinMarque.bindPopup(`${marker.nom}`);
    markerMarque.push(pinMarque);
  }
}

const markerSeconde = [];
for (const marker of marques) {
  if (marker.categorie.includes('Seconde-main')  && marker.coord.length > 0) {
    const pinSeconde = L.marker(marker.coord, { icon: eyeIconSe });
    pinSeconde.bindPopup(`${marker.nom}`);
    markerSeconde.push(pinSeconde);
  }
}

const markerMulti = [];
for (const marker of marques) {
  if (marker.categorie.includes('Multimarques') && marker.coord.length > 0) {
    const pinMulti = L.marker(marker.coord, { icon: eyeIconMu });
    pinMulti.bindPopup(`${marker.nom}`);
    markerMulti.push(pinMulti);
  }
}

const pinGroupMa = L.layerGroup(markerMarque);
myMap.addLayer(pinGroupMa);

const pinGroupMu = L.layerGroup(markerMulti);
myMap.addLayer(pinGroupMu);

const pinGroupSe = L.layerGroup(markerSeconde);
myMap.addLayer(pinGroupSe);

// BTN HIDE

document.getElementById('hide-maga').addEventListener('click', () => {
  if (myMap.hasLayer(pinGroupMa)) {
    myMap.removeLayer(pinGroupMa);
  } else {
    myMap.addLayer(pinGroupMa);
  }
});

document.getElementById('hide-multi').addEventListener('click', () => {
  if (myMap.hasLayer(pinGroupMu)) {
    myMap.removeLayer(pinGroupMu);
  } else {
    myMap.addLayer(pinGroupMu);
  }
});

document.getElementById('hide-seconde').addEventListener('click', () => {
  if (myMap.hasLayer(pinGroupSe)) {
    myMap.removeLayer(pinGroupSe);
  } else {
    myMap.addLayer(pinGroupSe);
  }
});
