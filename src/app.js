var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel);

function underlineAbout() {
  underlineHomeLink.classList.remove("active");
  underlineContactLink.classList.remove("active");
  underlineAboutLink.classList.add("active");
}

function underlineContact() {
  underlineHomeLink.classList.remove("active");
  underlineAboutLink.classList.remove("active");
  underlineContactLink.classList.add("active");
}

function underlineHome() {
  underlineAboutLink.classList.remove("active");
  underlineContactLink.classList.remove("active");
  underlineHomeLink.classList.add("active");
}

let underlineHomeLink = document.querySelector("#homeLink");
let underlineAboutLink = document.querySelector("#aboutLink");
let underlineContactLink = document.querySelector("#contactLink");

underlineHomeLink.addEventListener("click", underlineHome);
underlineAboutLink.addEventListener("click", underlineAbout);
underlineContactLink.addEventListener("click", underlineContact);

let greetUser = document.querySelector("#name");
greetUser.innerHTML = `Almost there, ${window.location.search.slice(
  11,
  -18
)}...`;

function darkmode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

function dashboardDarkmode() {
  let element = document.body;
  element.classList.toggle("dashboard-dark-mode");
}
