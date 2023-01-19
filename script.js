var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
var iconMenu = document.querySelector(".fa-bars");
var iconClose = document.querySelector(".fa-xmark");

function openmenu() {
  sidemenu.style.right = "0";
}

iconMenu.addEventListener("click", () => {
  openmenu();
});

function closemenu() {
  sidemenu.style.right = "-200px";
}
iconClose.addEventListener("click", () => {
  closemenu();
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwqNZwLWOlO3bX2jVSBgb_mCYluT6ttwB27ONjQGMl31AfpDL9bC1lkzey2L8pUxx4/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent succesfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

var myButton = document.getElementById("btn-work");
var message = document.getElementById("message");

function seeMore() {
  message.innerHTML = ' "New projects coming soon....." ';
}
myButton.addEventListener("click", () => {
  seeMore();
});

var timerId;
myButton.addEventListener("click", () => {
  clearTimeout(timerId);
  seeMore();
  timerId = setTimeout(() => {
    message.innerHTML = "";
  }, 1000);
});
