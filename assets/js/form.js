const myForm = document.querySelector("#myForm");
let username = document.querySelector("#name");
let mail = document.querySelector("#email");
// console.log(mail);
let inputsFields = document.querySelectorAll("input");

myForm.addEventListener("submit", handleSubmit);

inputsFields.forEach((field) => {
  field.addEventListener("focus", () => {
    field.classList.remove("border-danger");
    field.placeholder = "";
  });
});

function handleSubmit(e) {
  e.preventDefault();
  let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(username.value);
  if (username.value === "") {
    username.classList.add("border-danger");
    username.placeholder = "Name must be provided";
    return false;
  }

  if (!mail.value.match(validRegex)) {
    mail.classList.add("border-danger");
    mail.placeholder = "Please enter a valid e-mail address";
    return false;
  }

  myForm.reset();
}
