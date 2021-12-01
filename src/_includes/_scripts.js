function getTheme() {
  if (localStorage.getItem("theme") === null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("theme")
  );
}

function setTheme() {
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("theme")
  );
}

window.onload = () => {
  getTheme();
  document.documentElement.classList.add("loaded");
};
