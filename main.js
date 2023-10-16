const btn = document.getElementById("btn");
const dissmess = document.getElementById("bttn");
const modal = document.getElementById("container");
const main = document.getElementById("main");
const form = document.getElementById("form");
const email = document.getElementById("mail");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (emailValidation.test(email.value)) {
    modal.classList.toggle("hidden");
    main.style.filter = "blur(1.5rem)";
  } else {
    email.style.backgroundColor = "#ffcccc";
    email.style.boxShadow = "0 0 5px #ff8080";
  }
});

dissmess.addEventListener("click", function (event) {
  event.preventDefault();
  modal.classList.toggle("hidden");
  main.style.filter = "blur(0)";
});

const emailValidation =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//console.log(re.match("ash#loremcompany"));

// if (btn === " ash@loremcompany.com") {
//   btn = dissmess;
// } else {
//   form.style.color.red;
// }
