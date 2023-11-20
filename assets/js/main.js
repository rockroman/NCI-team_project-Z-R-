// form validation

// const myForm = document.querySelector("#myForm");
// let username = document.querySelector("#name");
// let mail = document.querySelector("#email");
// // console.log(mail);
// let inputsFields = document.querySelectorAll("input");

// myForm.addEventListener("submit", handleSubmit);

// inputsFields.forEach((field) => {
//   field.addEventListener("focus", () => {
//     field.classList.remove("border-danger");
//     field.placeholder = "";
//   });
// });

// function handleSubmit(e) {
//   e.preventDefault();
//   let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   console.log(username.value);
//   if (username.value === "") {
//     username.classList.add("border-danger");
//     username.placeholder = "Name must be provided";
//     return false;
//   }

//   if (!mail.value.match(validRegex)) {
//     mail.classList.add("border-danger");
//     mail.placeholder = "Please enter a valid e-mail address";
//     return false;
//   }

//   myForm.reset();
// }
// myForm.addEventListener("submit", handleSubmit);
// const myForm = document.querySelector("#myForm");
// let username = document.querySelector("#name");
// let mail = document.querySelector("#exampleInputEmail1");
// let modal = document.querySelector("#exampleModal");
// const closeBtn = document.querySelector("#close-modal");

// function handleSubmit(event) {
//   let myText = document.querySelector("#custom-text");
//   myText.textContent = `${username.value}, thank you for your details.
//    We will be in touch via ${mail.value} shortly.`;
//   myForm.classList.add("hide");
//   new bootstrap.Modal(document.querySelector("#exampleModal")).show();

//   event.preventDefault();
//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//       handleModalClosing();
//     }
//   };
// }

// const handleModalClosing = () => {
//   myForm.classList.remove("hide");
//   myForm.reset();
// };

// myForm.addEventListener("submit", handleSubmit);
// closeBtn.addEventListener("click", handleModalClosing);

// images effect

// code taken and adjusted from YT tutorial:
// https://www.youtube.com/watch?v=CJ26NLtdzPA

let myCards = document.querySelectorAll(".mycard");
myCards.forEach(
  (card) =>
    (card.onmousemove = function (e) {
      let x = e.pageX - card.offsetLeft;
      let y = e.pageY - card.offsetTop;

      card.style.setProperty("--x", x + "px");
      card.style.setProperty("--y", y + "px");
    })
);

// end images effect

// navbar on scroll

const navbar = document.querySelector(".navbar");

window.onscroll = () => {
  this.scrollY > 40
    ? navbar.classList.add("bg-dark")
    : navbar.classList.remove("bg-dark");
};

// end navbar on scroll

//form

const myForm = document.querySelector("#myForm");
let username = document.querySelector("#name");
let mail = document.querySelector("#email");
// console.log(mail);
let inputsFields = document.querySelectorAll("input");

let custError = document.querySelector("#option-error");

switchingEventListeners();

// myForm.addEventListener("submit", handleSubmit);

inputsFields.forEach((field) => {
  field.addEventListener("focus", () => {
    field.classList.remove("border-danger");
    field.placeholder = "";
  });
});

function handleSubmit(e) {
  e.preventDefault();
  let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let chosenOption1 = document.getElementById("dropdown");
  let chosenOption2 = document.getElementById("dropdown2");

  let optionsValid = true;

  if (username.value === "") {
    username.classList.add("border-danger");
    username.placeholder = "Name must be provided";
    return false;
  }

  if (!mail.value.match(validRegex)) {
    mail.classList.add("border-danger");
    mail.value = "";
    mail.placeholder = "Please enter a valid e-mail address";

    return false;
  }

  if (chosenOption1.value === "" && chosenOption2.value === "") {
    // let custError = document.querySelector("#option-error");
    custError.classList.remove("d-none");

    chosenOption1.addEventListener("focus", removeCustomError);
    chosenOption2.addEventListener("focus", removeCustomError);

    optionsValid = false;
  } else if (chosenOption1.value !== "" || chosenOption2.value !== "") {
    optionsValid = true;
  }

  if (optionsValid) {
    modalHandle();
    new bootstrap.Modal(document.querySelector("#exampleModal")).show();
    myForm.reset();
  }
}

//func to remove custom error on select dropdown element
function removeCustomError() {
  custError.classList.add("d-none");
}

function switchingEventListeners() {
  const currentPage = window.location.pathname.split("/").pop();
  getReferringPage();
  // console.log(currentPage);
  if (currentPage === "contact.html") {
    myForm.addEventListener("submit", handleSubmit);
  }
  if (document.referrer.split("/").pop() === "gallery.html") {
    document.querySelector("#dropdown").classList.add("d-none");
    document.querySelector("#dropdown2").classList.remove("d-none");
  }
}

function getReferringPage() {
  console.log(document.referrer.split("/").pop());
}

function modalHandle() {
  let myText = document.querySelector("#custom-text");
  myText.textContent = `${username.value}, thank you for your details.
     We will be in touch via ${mail.value} shortly.`;
}
