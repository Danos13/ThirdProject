/*Response menu */

class ResponseMenu {
  addClass = (htmlElement, whichClass) => {
    htmlElement.classList.add(whichClass);
  };

  removeClass = (htmlElement, whichClass) => {
    htmlElement.classList.remove(whichClass);
  };

  menuListNav = (htmlElement, property) => {
    htmlElement.style.display = property;
  };
}

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".choosen");

const responseMenu = new ResponseMenu();

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[2] === "fa-bars") {
    responseMenu.addClass(hamburgerIcon, "fa-xmark");
    responseMenu.removeClass(hamburgerIcon, "fa-bars");
    responseMenu.menuListNav(menuList, "block");
  } else {
    responseMenu.addClass(hamburgerIcon, "fa-bars");
    responseMenu.removeClass(hamburgerIcon, "fa-xmark");
    responseMenu.menuListNav(menuList, "none");
  }
});

/* Dark-light mode*/

class DarkLightButton {
  darkOrLight(htmlElement, className) {
    htmlElement.classList.toggle(className);
  }
}

const darkLightButton = document.querySelector(".logo");
const body = document.querySelector("body");

const buttonDarkLigt = new DarkLightButton();

darkLightButton.addEventListener("click", () => {
  buttonDarkLigt.darkOrLight(body, "colorDark");
});

/* Up button*/

class UpButton {
  constructor() {
    this.addOrRemoveClass = new ResponseMenu(); /* I choose composition here */
  }
}

const upButton = document.querySelector(".upButton");

const buttonUp = new UpButton();

window.addEventListener("scroll", () => {
  if (scrollY >= 150) {
    buttonUp.addOrRemoveClass.addClass(upButton, "upButtonShow");
    upButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    buttonUp.addOrRemoveClass.removeClass(upButton, "upButtonShow");
  }
});

/* Form password */

const firstPassword = document.querySelector(".firstPassword");
const secondPassword = document.querySelector(".secondPassword");
const wrongPassword = document.querySelector(".wrongPassword");
const sendButton = document.querySelector(".sendButton");

firstPassword.addEventListener("input", () => {
  if (firstPassword.value !== secondPassword.value) {
    wrongPassword.textContent = "Hesla nejsou schodné";
    wrongPassword.classList.add("invalid");
    wrongPassword.classList.remove("valid");
    sendButton.style.display = "none";
  } else if (firstPassword.value === "" && secondPassword.value === "") {
    wrongPassword.textContent = "";
  } else {
    wrongPassword.textContent = "Hesla jsou schodné";
    wrongPassword.classList.add("valid");
    wrongPassword.classList.remove("invalid");
    sendButton.style.display = "block";
  }
});

secondPassword.addEventListener("input", () => {
  if (firstPassword.value !== secondPassword.value) {
    wrongPassword.textContent = "Hesla nejsou schodné";
    wrongPassword.classList.add("invalid");
    wrongPassword.classList.remove("valid");
    sendButton.style.display = "none";
  } else if (firstPassword.value === "" && secondPassword.value === "") {
    wrongPassword.textContent = "";
  } else {
    wrongPassword.textContent = "Hesla jsou schodné";
    wrongPassword.classList.add("valid");
    wrongPassword.classList.remove("invalid");
    sendButton.style.display = "block";
  }
});

/* Form email */

class EmailForm {
  constructor(fullName, email) {}
}

const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const form = document.querySelector("form");
const notEmail = document.querySelector(".notEmail");
const notName = document.querySelector(".notName");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (fullName.value === "") {
    notName.textContent = "Vyplňte prosím jméno a příjmení";
  } else notName.textContent = "";
  if (email.value === "") {
    notEmail.textContent = "Vyplňte prosím email";
  } else notEmail.textContent = "";
});

/*MAP*/

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(49.57455095613252, 18.76362800639648),
    zoom: 17,
  };
  var map = new google.maps.Map(document.querySelector(".mapsGoogle"), mapProp);

  var marker = new google.maps.Marker({ position: mapProp.center });

  marker.setMap(map);
}
