import './style.scss';
import L from 'leaflet';
import $ from 'jquery';
import { marques } from './src/data';
import { header, footer } from './src/view/view';
import 'leaflet-defaulticon-compatibility';

/* INCLUDE HEADER AND FOOTER */
const headerHTML = document.querySelector('header');
const footerHTML = document.querySelector('footer.footer');
console.log(headerHTML);

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
console.log(sectionAnnuaire);

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
/** *********** DEBUG A FAIRE : pas de multi-selections possibles */

const showFemme = document.querySelector('button.show-femme');
const showHomme = document.querySelector('button.show-homme');
const showEnfant = document.querySelector('button.show-enfant');
const showMaga = document.querySelector('button.show-maga');
const showMulti = document.querySelector('button.show-multi');
const showSeconde = document.querySelector('button.show-seconde');
const marquesDiv = document.querySelectorAll('.all-marques > div.w-40');

// FUNCTION FOR SHOWING ALL MARKS
let radioFilled = false;
const reshowAllMarques = () => {
  for (const div of marquesDiv) {
    const reshowMarques = div.classList.contains('w-40');
    if (reshowMarques) {
      div.style.display = 'block';
    }
  }
};

// SHOW ONLY WOMEN

const showOnlyFemme = () => {
  for (const div of marquesDiv) {
    const divFemme = div.classList.contains('Femmes');
    if (divFemme) {
      div.style.display = 'block';
    } else if (!divFemme) {
      div.style.display = 'none';
    }
  }
};

showFemme.addEventListener('click', () => {
  radioFilled = !radioFilled;
  if (radioFilled === true) {
    showOnlyFemme();
  } else if (radioFilled === false) {
    reshowAllMarques();
  }
});

// SHOW ONLY MEN

const showOnlyHomme = () => {
  for (const div of marquesDiv) {
    const divHomme = div.classList.contains('Hommes');
    if (divHomme) {
      div.style.display = 'block';
    } else if (!divHomme) {
      div.style.display = 'none';
    }
  }
};

showHomme.addEventListener('click', () => {
  radioFilled = !radioFilled;
  if (radioFilled === true) {
    showOnlyHomme();
  } else if (radioFilled === false) {
    reshowAllMarques();
  }
});

// SHOW ONLY CHILDREN

const showOnlyEnfant = () => {
  for (const div of marquesDiv) {
    const divEnfant = div.classList.contains('Enfants');
    if (divEnfant) {
      div.style.display = 'block';
    } else if (!divEnfant) {
      div.style.display = 'none';
    }
  }
};

showEnfant.addEventListener('click', () => {
  radioFilled = !radioFilled;
  if (radioFilled === true) {
    showOnlyEnfant();
  } else if (radioFilled === false) {
    reshowAllMarques();
  }
});

// SHOW ONLY MARKS THAT HAVE A SHOP

const showOnlyMaga = () => {
  for (const div of marquesDiv) {
    const divMaga = div.classList.contains('Marque');
    if (divMaga) {
      div.style.display = 'block';
    } else if (!divMaga) {
      div.style.display = 'none';
    }
  }
};

showMaga.addEventListener('click', () => {
  radioFilled = !radioFilled;
  if (radioFilled === true) {
    showOnlyMaga();
  } else if (radioFilled === false) {
    reshowAllMarques();
  }
});

// SHOW ONLY MULTIMARKS

const showOnlyMulti = () => {
  for (const div of marquesDiv) {
    const divMulti = div.classList.contains('Multimarques');
    if (divMulti) {
      div.style.display = 'block';
    } else if (!divMulti) {
      div.style.display = 'none';
    }
  }
};

showMulti.addEventListener('click', () => {
  radioFilled = !radioFilled;
  if (radioFilled === true) {
    showOnlyMulti();
  } else if (radioFilled === false) {
    reshowAllMarques();
  }
});

// SHOW ONLY SECONDE MAIN

const showOnlySeconde = () => {
  for (const div of marquesDiv) {
    const divSeconde = div.classList.contains('Seconde-main');
    if (divSeconde) {
      div.style.display = 'block';
    } else if (!divSeconde) {
      div.style.display = 'none';
    }
  }
};

showSeconde.addEventListener('click', () => {
  radioFilled = !radioFilled;
  if (radioFilled === true) {
    showOnlySeconde();
  } else if (radioFilled === false) {
    reshowAllMarques();
  }
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

// INDIVUDAL MARKERS
/*
for (const marker of markers) {
  const pin = L.marker(marker.coord);
  pin.addTo(myMap);
  pin.bindPopup(`${marker.nom}`);
}
*/
// GROUPED MARKERS
/*
const markerGroup = [];
for (const marker of marques) {
  const pin = L.marker(marker.coord, { icon: eyeIconFe });
  pin.bindPopup(`${marker.nom}`);
  markerGroup.push(pin);
}
*/
const markerMarque = [];
for (const marker of marques) {
  if (marker.categorie.includes('Marque')) {
    const pinMarque = L.marker(marker.coord, { icon: eyeIconMa });
    pinMarque.bindPopup(`${marker.nom}`);
    markerMarque.push(pinMarque);
  }
}

const markerSeconde = [];
for (const marker of marques) {
  if (marker.categorie.includes('Seconde-main')) {
    const pinSeconde = L.marker(marker.coord, { icon: eyeIconSe });
    pinSeconde.bindPopup(`${marker.nom}`);
    markerSeconde.push(pinSeconde);
  }
}

const markerMulti = [];
for (const marker of marques) {
  if (marker.categorie.includes('Multimarques')) {
    const pinMulti = L.marker(marker.coord, { icon: eyeIconMu });
    pinMulti.bindPopup(`${marker.nom}`);
    markerMulti.push(pinMulti);
  }
}

// const pinGroup = L.layerGroup(markerGroup);
// myMap.addLayer(pinGroup);

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
