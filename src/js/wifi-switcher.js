import '../sass/main.scss';

const switcher = document.querySelector('#wifi-switch-toggle');
const wifiIcon = document.querySelector('svg[aria-label="WiFi icon"]');
const planeIcon = document.querySelector('svg[aria-label="Airplane icon"]');

const stats = {
  onWifi: 'wifi-active',
  onPlane: 'plane-active'
}

let pageStat = localStorage.getItem('page-state') || stats.onWifi;
switcher.checked = localStorage.getItem('page-state') === stats.onPlane;
wifiIcon.classList.add(pageStat);
// planeIcon.classList.add(stats.onPlane);


function statChanger() {
  wifiIcon.classList.toggle(pageStat);
  pageStat = pageStat === stats.onPlane ? stats.onWifi : stats.onPlane;
  wifiIcon.classList.add(pageStat);
  localStorage.setItem('page-state', pageStat);
}

switcher.addEventListener('change', statChanger)