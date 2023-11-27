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

// contact page logic

//
const winBtn = document.getElementById("winBtn");
const discountContainer = document.querySelector(".relative");
const tries = document.getElementById("tries");
const discount = document.querySelector(".discount");
let discountAttempts = 3;

function generateDiscount() {
  const discountRange = [
    "5%",
    "7%",
    "9%",
    "10%",
    "12%",
    "15%",
    "17%",
    "20%",
    "25%",
  ];
  discountAttempts--;
  discount.textContent = discountRange[Math.floor(Math.random() * 9)];
  discountContainer.classList.remove("d-none");
  console.log(discountAttempts);
  tries.textContent = discountAttempts;
  stopDiscountAttempts();
}

//limit generating discount only 3 times
function stopDiscountAttempts() {
  if (discountAttempts === 0) {
    winBtn.setAttribute("disabled", "");
  }
}

// reseting discounts game after
function resetDiscountGame() {
  discountAttempts = 0;
  discountContainer.classList.add("d-none");
  winBtn.removeAttribute("disabled", "");
}

//end  discount logic

//form
const myForm = document.querySelector("#myForm");
let username = document.querySelector("#name");
let mail = document.querySelector("#email");

let inputsFields = document.querySelectorAll("input");

let custError = document.querySelector("#option-error");
let dateEl = document.getElementById("datepicker");
let myEr = document.getElementById("my-err");

switchingEventListeners();

inputsFields.forEach((field) => {
  field.addEventListener("focus", () => {
    field.classList.remove("border-danger");
    field.placeholder = "";
  });
});

function handleSubmit(e) {
  e.preventDefault();
  let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let dropOption = document.getElementById("dropdown");
  let formValid = true;

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
  // date logic
  if (dateEl.value === "") {
    dateEl.classList.add("border-danger");
    myEr.classList.remove("d-none");
    formValid = false;
  } else {
    formValid = checkIsItInPast();
  }

  if (dropOption.value === "") {
    custError.classList.remove("d-none");
    dropOption.addEventListener("focus", removeCustomError);
    formValid = false;
  }

  if (formValid) {
    modalHandle();
    new bootstrap.Modal(document.querySelector("#exampleModal")).show();
    myForm.reset();
    discountAttempts = 0;
    handleCheckboxToggle();
    document.querySelectorAll(".my-select").forEach((element) => {
      element.classList.add("d-none");
    });
    document.querySelector(".my-datepicker").classList.remove("d-none");
    dateEl.classList.remove("d-none");
    resetDiscountGame();
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
    handleCheckboxToggle();
    myForm.addEventListener("submit", handleSubmit);
    dateEl.addEventListener("focus", datePickCustomError);
    winBtn.addEventListener("click", generateDiscount);
  }
}

function getReferringPage() {
  console.log(document.referrer.split("/").pop());
}

function modalHandle() {
  let myText = document.querySelector("#custom-text");
  myText.textContent = `${username.value}, thank you for your details.
     We will be in touch via ${mail.value} shortly.
     <
     YOU WON ${discount.textContent} DISCOUNT ON OUR SERVICES`;
}

// check date if in past
function checkIsItInPast() {
  const currentDate = new Date();
  console.log(currentDate);
  const selectedDate = new Date(dateEl.value);
  console.log(selectedDate);
  if (selectedDate < currentDate) {
    dateEl.classList.add("border-danger");
    myEr.classList.remove("d-none");
    myEr.textContent = "Date cant be in the past";
    return false;
  }
  return true;
}

// remove datepicker error
function datePickCustomError() {
  myEr.classList.add("d-none");
  dateEl.classList.remove("border-danger");
}

// handle checkbox toggle

function handleCheckboxToggle() {
  let appointment = document.querySelector("#inlineRadio1");
  let inquiry = document.querySelector("#inlineRadio2");
  let dropOption = document.querySelector("#dropdown");
  dropOption.value = "General Inquiry";

  appointment.addEventListener("click", function () {
    document.querySelectorAll(".my-select").forEach((element) => {
      element.classList.add("d-none");
    });
    // let dropOption = document.querySelector("#dropdown");
    dropOption.value = "General Inquiry";
    dateEl.classList.remove("d-none");
    dateEl.value = "";
    document.querySelector(".my-datepicker").classList.remove("d-none");
  });

  inquiry.addEventListener("click", function () {
    document.querySelectorAll(".my-select").forEach((element) => {
      element.classList.remove("d-none");
    });
    dateEl.classList.add("d-none");
    document.querySelector(".my-datepicker").classList.add("d-none");
    const currentDate = new Date();
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);

    // Format the date to 'YYYY-MM-DD'
    const defaultDate = nextDay.toISOString().split("T")[0];

    // Set the value of the datepicker
    dateEl.value = defaultDate;
  });
}
