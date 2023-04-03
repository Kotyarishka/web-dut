const body = document.querySelector("body");
const themeButton = document.querySelector("#theme-button");
const themeIcon = themeButton.querySelector("i");

window.addEventListener("load", (event) => {
  if (localStorage.getItem("theme") == "dark") {
    body.classList.add("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    body.classList.remove("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }

  setTimeout(() => {
    body.style.transition = "all 0.5s ease";
  }, 100);
});

themeButton.addEventListener("click", (event) => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});
