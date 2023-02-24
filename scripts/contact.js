// console.log("wei ciao")
const formTop = document.querySelector("#contact-form");
const form = document.querySelector("#form-block");
const nameField = document.querySelector("#full-name");
const nameError = document.querySelector("#name-error");
const emailField = document.querySelector("#e-mail");
const emailError = document.querySelector("#email-error");
const subjectField = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const messageField = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const submitButton = document.querySelector(".submit");

// nameField.addEventListener {

// }

form.onsubmit = function () {
    event.preventDefault();

    console.log("wei ciao submitta");

    if (validateInput(nameField.value, 5)) {
        nameError.style.display = "none";
      } else {
        nameError.style.display = "block";
      }

      if (validateInput(subjectField.value, 15)) {
        subjectError.style.display = "none";
      } else {
        subjectError.style.display = "block";
      }

      if (validateInput(messageField.value, 25)) {
        messageError.style.display = "none";
      } else {
        messageError.style.display = "block";
      }

      if (validateEmail(emailField.value)) {
        emailError.style.display = "none";
      } else {
        emailError.style.display = "block";
      }

      if (
        validateInput(nameField.value, 5) &&
        validateInput(subjectField.value, 15) &&
        validateInput(messageField.value, 25) &&
        validateEmail(emailField.value)
      ) {
        formTop.innerHTML = "";
        formTop.innerHTML = `<div id="message-sent"><p>Your Message Was Sent</p></div>`
        console.log("allright!!!");
      } 
};

function validateInput(value, len) {
    if (value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }
  function validateEmail(emailField) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(emailField);
    return patternMatch;
  }