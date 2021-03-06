/** @format */

const db = firebase.firestore();

let email = document.getElementById("inputEmail");
let name = document.getElementById("inputName");

let address = document.getElementById("inputAddress");
let phone = document.getElementById("inputPhone");
let password = document.getElementById("inputPassword");
let privacy = document.getElementById("privacy");
let form = document.getElementById("registraion__form");
let submit_btn = document.getElementById("submit_button");

submit_button.addEventListener("click", formsubmit);

function formsubmit() {
  if (form.checkValidity()) {
    addToFirestore();
  }
}

function addToFirestore() {
  db.collection("users")
    .add({
      name: name.value,
      email: email.value,
      address: address.value,
      phone: phone.value,
      password: password.value,
    })
    .then(function (docRef) {
      document.getElementById("alert__email").textContent = email.value;
      document.getElementById("alert").classList.remove("hide");
      name.value = "";
      email.value = "";
      address.value = "";
      phone.value = "";
      password.value = "";
    })
    .catch(function (error) {
      console.log("this is my error ", error);
    });
}
