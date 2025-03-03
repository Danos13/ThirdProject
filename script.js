const darkLightButton = document.querySelector(".logo");
const body = document.querySelector("body");

darkLightButton.addEventListener("click", () => {
  body.classList.toggle("colorDark");
});

const upButton = document.querySelector(".upButton");

window.addEventListener("scroll", () => {
  if (scrollY >= 150) {
    upButton.classList.add("upButtonShow");
    upButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  } else {
    upButton.classList.remove("upButtonShow");
  }
});

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
