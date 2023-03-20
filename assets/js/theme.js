const toggleSwitch = document.querySelector('.theme-toggle-checkbox');
const body = document.body;

function setTheme(theme) {
  body.className = theme;
  toggleSwitch.checked = theme === "dark-mode";
}

function setThemeFromSystem() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark-mode");
  } else {
    setTheme("light-mode");
  }
}

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    setTheme("dark-mode");
  } else {
    setTheme("light-mode");
  }
});

setThemeFromSystem();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  if (e.matches) {
    setTheme("dark-mode");
  } else {
    setTheme("light-mode");
  }
});
