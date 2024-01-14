const switcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const { LIGHT, DARK } = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme'
}

// Колір теми беремо з локалстора або за замовченням ЛАЙТ
let themeColor = localStorage.getItem('theme-color') || LIGHT;
body.classList.add(themeColor);

// Якщо поточна тема ДАРК, то робимо switcher чекнутим
switcher.checked = themeColor === DARK;

function themeChanger() {
  // Змінюємо поточну тему
  body.classList.toggle(LIGHT);
  body.classList.toggle(DARK);
  // Зберігаємо змінене значення в локалстор
  themeColor = themeColor === LIGHT ? DARK : LIGHT;
  localStorage.setItem('theme-color', themeColor);
  console.log("Theme is changes")
}


switcher.addEventListener('change', themeChanger);