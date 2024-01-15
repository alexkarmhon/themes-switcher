import '../sass/main.scss';

const switcher = document.querySelector('#wifi-switch-toggle');
const wifiIcon = document.querySelector('svg[aria-label="WiFi icon"]');
const planeIcon = document.querySelector('svg[aria-label="Airplane icon"]');

const {onWifi, onPlane} = {
  onWifi: 'wifi-active',
  onPlane: 'plane-active'
}

let pageStat = localStorage.getItem('page-state') || onWifi;
switcher.checked = localStorage.getItem('page-state') === onPlane;
wifiIcon.classList.add(onWifi);

if (pageStat === onPlane) {
  planeIcon.classList.add(onPlane);
  wifiIcon.classList.remove(onWifi);
} 

function statChanger() {
  planeIcon.classList.toggle(onPlane);
  wifiIcon.classList.toggle(onWifi);
  pageStat = pageStat === onPlane ? onWifi : onPlane;
  localStorage.setItem('page-state', pageStat);
}

switcher.addEventListener('change', statChanger)