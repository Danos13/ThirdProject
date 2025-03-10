/* I was trying with OOP. I choose my second variant, it means
 * only one class for whole web. In the end of the code I put in the comment
 * my first try- for each section separate class, but it was confused and code was
 * longer than now so these are resons why I choose my second variant (try)
 * I do not know which one is correct (if any of them are correct) but I think that
 * for a small web like this, one class is enough...
 */

class Clinic {
  constructor(nameAndemail, passwords) {
    this.name = nameAndEmail[0];
    this.email = nameAndEmail[1];
    this.passwords = passwords;
  }

  addClass = (htmlElement, whichClass) => {
    htmlElement.classList.add(whichClass);
  };

  removeClass = (htmlElement, whichClass) => {
    htmlElement.classList.remove(whichClass);
  };

  displayOrDisapeare = (htmlElement, property) => {
    htmlElement.style.display = property;
  };

  darkOrLight(htmlElement, className) {
    htmlElement.classList.toggle(className);
  }

  textContentChange(htmlElement, text) {
    htmlElement.textContent = text;
  }

  htmlTagCleaner = (htmlTag, button, property) => {
    if (this.passwords[0].value == "" && this.passwords[1].value == "") {
      htmlTag.textContent = "";
      this.displayOrDisapeare(button, property); //Button has to disappear again
    }
  };
}

/* from Form section - for constructor*/
const passwords = document.querySelectorAll(".passwords");
const nameAndEmail = document.querySelectorAll(".nameAndEmail");

const myClinic = new Clinic(nameAndEmail, passwords);

/*Response menu */
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".choosen");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[2] === "fa-bars") {
    myClinic.addClass(hamburgerIcon, "fa-xmark");
    myClinic.removeClass(hamburgerIcon, "fa-bars");
    myClinic.displayOrDisapeare(menuList, "block");
  } else {
    myClinic.addClass(hamburgerIcon, "fa-bars");
    myClinic.removeClass(hamburgerIcon, "fa-xmark");
    myClinic.displayOrDisapeare(menuList, "none");
  }
});

/* Dark-light mode*/
const darkLightButton = document.querySelector(".logo");
const body = document.querySelector("body");

darkLightButton.addEventListener("click", () => {
  myClinic.darkOrLight(body, "colorDark");
});

/* Up button*/

const upButton = document.querySelector(".upButton");

window.addEventListener("scroll", () => {
  if (scrollY >= 150) {
    myClinic.addClass(upButton, "upButtonShow");
    upButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    myClinic.removeClass(upButton, "upButtonShow");
  }
});

/* Form */
const form = document.querySelector("form");
const notEmail = document.querySelector(".notEmail");
const notName = document.querySelector(".notName");
const wrongPassword = document.querySelector(".wrongPassword");
const sendButton = document.querySelector(".sendButton");
/* part with name and email */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (myClinic.name.value === "") {
    myClinic.textContentChange(notName, "Vyplňte prosím jméno a příjmení");
  } else myClinic.textContentChange(notName, "");
  if (myClinic.email.value === "") {
    myClinic.textContentChange(notEmail, "Vyplňte prosím email");
  } else myClinic.textContentChange(notEmail, "");
});
/*part with passwords - I have done it here that the button will be displayed when both passwords are the same */
myClinic.passwords.forEach((element) => {
  element.addEventListener("input", () => {
    if (myClinic.passwords[0].value !== myClinic.passwords[1].value) {
      myClinic.textContentChange(wrongPassword, "Hesla nejsou schodné");
      myClinic.addClass(wrongPassword, "invalid");
      myClinic.removeClass(wrongPassword, "valid");
      myClinic.displayOrDisapeare(sendButton, "none");
    } else {
      myClinic.textContentChange(wrongPassword, "Hesla jsou schodné");
      myClinic.addClass(wrongPassword, "valid");
      myClinic.removeClass(wrongPassword, "invalid");
      myClinic.displayOrDisapeare(sendButton, "block");
    }

    myClinic.htmlTagCleaner(wrongPassword, sendButton, "none");
  });
});

/*MAP*/
/* I embedded a map from Google Maps on the website, but commented it out because I had to remove the API key from Index.html for github. Here is the code:
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(49.57455095613252, 18.76362800639648),
    zoom: 17,
  };
  var map = new google.maps.Map(document.querySelector(".mapsGoogle"), mapProp);

  var marker = new google.maps.Marker({ position: mapProp.center });

  marker.setMap(map);
}
*/

/* My first try:

*********Response menu*******************
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

 ***********Dark-light mode***************

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

********** Up button*****************

class UpButton {
  constructor() {
    this.addOrRemoveClass = new ResponseMenu(); * I choose composition here *
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

*************** Form email ******************

class Form {
  constructor(nameAndemail, passwords) {
    this.name = nameAndEmail[0];
    this.email = nameAndEmail[1];
    this.passwords = passwords;
    this.classAddRemove = new ResponseMenu();
  }

  textContentChange(htmlElement, text) {
    htmlElement.textContent = text;
  }

  htmlTagCleaner = (htmlTag, button, property) => {
    if (this.passwords[0].value == "" && this.passwords[1].value == "") {
      htmlTag.textContent = "";
      this.classAddRemove.menuListNav(button, property);
    }
  };
}

const nameAndEmail = document.querySelectorAll(".nameAndEmail");
const form = document.querySelector("form");
const notEmail = document.querySelector(".notEmail");
const notName = document.querySelector(".notName");
const passwords = document.querySelectorAll(".passwords");
const wrongPassword = document.querySelector(".wrongPassword");
const sendButton = document.querySelector(".sendButton");

const myForm = new Form(nameAndEmail, passwords);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (myForm.name.value === "") {
    myForm.textContentChange(notName, "Vyplňte prosím jméno a příjmení");
  } else myForm.textContentChange(notName, "");
  if (myForm.email.value === "") {
    myForm.textContentChange(notEmail, "Vyplňte prosím email");
  } else myForm.textContentChange(notEmail, "");
});

myForm.passwords.forEach((element) => {
  element.addEventListener("input", () => {
    if (myForm.passwords[0].value !== myForm.passwords[1].value) {
      myForm.textContentChange(wrongPassword, "Hesla nejsou schodné");
      myForm.classAddRemove.addClass(wrongPassword, "invalid");
      myForm.classAddRemove.removeClass(wrongPassword, "valid");
      myForm.classAddRemove.menuListNav(sendButton, "none");
    } else {
      myForm.textContentChange(wrongPassword, "Hesla jsou schodné");
      myForm.classAddRemove.addClass(wrongPassword, "valid");
      myForm.classAddRemove.removeClass(wrongPassword, "invalid");
      myForm.classAddRemove.menuListNav(sendButton, "block");
    }

    myForm.htmlTagCleaner(wrongPassword, sendButton, "none");
  });
});

*/
