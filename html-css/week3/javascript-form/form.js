const firstName = document.getElementById("name");
const lastName = document.getElementById("surname");
const emailAddress = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const password = document.getElementById("psw");
const confirmPassword = document.getElementById("re-psw");
const address = document.getElementById("address");
const postCode = document.getElementById("post");
const message = document.getElementById("message");

const form = document.getElementById("myForm");

document.getElementById("name").addEventListener("blur", validFirstName);
document.getElementById("surname").addEventListener("blur", validLastName);
document.getElementById("email").addEventListener("blur", validEmail);
document.getElementById("phone").addEventListener("blur", validPhoneNumber);
document.getElementById("psw").addEventListener("blur", validPassword);
document.getElementById("re-psw").addEventListener("blur", validConfirmPassword);
document.getElementById("address").addEventListener("blur", validAddress);
document.getElementById("post").addEventListener("blur", validPostCode);
document.getElementById("message").addEventListener("blur", validMessage);
document.getElementById("check").addEventListener("click", shippingAddressOn);

// Handle form
form.addEventListener('submit', function(event) {
  // Prevent default behaviour
  event.preventDefault();
  if (
    validFirstName() &&
    validLastName() &&
    validAddress() &&
    validPostCode() &&
    validMessage() &&
    validEmail() &&
    validPhoneNumber() &&
    validPassword() &&
    validConfirmPassword()
  )return;
  return true;
});

function validFirstName() {
  if (checkIfEmpty(firstName)) return;
  if (!containsCharacters(firstName, 4)) return; //switch function
  return true;
}

function validLastName() {
  if (checkIfEmpty(lastName)) return;
  if (!containsCharacters(lastName, 4)) return;
  return true;
}

function validEmail() {
  if (checkIfEmpty(emailAddress)) return;
  if (!containsCharacters(emailAddress, 2)) return;
  return true;
}

function validPhoneNumber() {
  if (checkIfEmpty(phoneNumber)) return;
  if (!minimumLength(phoneNumber, 6)) return;
  if (!containsCharacters(phoneNumber, 3)) return;
  return true;
}

function validPassword() {
  if (checkIfEmpty(password)) return;
  if (!minimumLength(password, 10)) return;
  if (!containsCharacters(password, 1)) return;
  return true;
}

function validConfirmPassword() {
  if (checkIfEmpty(confirmPassword)) return;
  if (password.value !== confirmPassword.value) {
    setInvalid(confirmPassword, "Passwords must match");
    return;
  } else {
    setValid(confirmPassword);
  }
  return true;
}

function validAddress() {
  if (checkIfEmpty(address)) return;
  return true;
}

function validPostCode() {
  if (!exactLength(postCode, 4)) return;
  if (!containsCharacters(postCode, 3)) return;
  return true;
}

function validMessage() {
  if (!maximumLength(message, 500)) return;
  return true;
}

/* reusable functions */
function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    //remove extra white space so it is not considered as letters
    setInvalid(field, `${field.name} field is required`);
    return true;
  } else {
    setValid(field);
    return false;
  }
}

function isEmpty(value) {
  if (value === "") return true;
  return false;
}

function setInvalid(field, message) {
  field.className = "invalid";
  field.nextElementSibling.innerHTML = message;
}

function setValid(field) {
  field.className = "valid";
  field.nextElementSibling.innerHTML = ""; //it can have a message already so I reset it
}

//maybe this can be also done as swich? exact/min/max lenght
function exactLength(field, length) {
  if (field.value.length === length) {
    setValid(field);
    return true;
  } else {
    setInvalid(
      field,
      `${field.name} must be exactly ${length} characters long`
    );
    return false;
  }
}

function minimumLength(field, minLength) {
  if (field.value.length >= minLength) {
    setValid(field);
    return true;
  } else {
    setInvalid(
      field,
      `${field.name} must be at least ${minLength} characters long`
    );
    return false;
  }
}

function maximumLength(field, maxLength) {
  if (field.value.length <= maxLength) {
    setValid(field);
    return true;
  } else {
    setInvalid(
      field,
      `${field.name} must be shorter than ${maxLength} characters`
    );
    return false;
  }
}

//switch function
function containsCharacters(field, code) {
  let regEx;
  switch (code) {
    case 1:
      // uppercase, lowercase
      regEx = /(?=.*[a-z])(?=.*[A-Z])/;
      return matchWithRegEx(
        regEx,
        field,
        "Your password needs to be minimum 10 characters long and contain one uppercase and one lowercase letter"
      );
    case 2:
      // email pattern
      regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return matchWithRegEx(regEx, field, "Please enter a valid email address");
    case 3:
      // only numbers
      regEx = /\d/g;
      return matchWithRegEx(regEx, field, "Please enter only numbers");
    case 4:
      // only letters
      regEx = /^[a-zA-Z ]+$/;
      return matchWithRegEx(regEx, field, "Please enter only letters");
    default:
      return false;
  }
}

function matchWithRegEx(regEx, field, message) {
  if (field.value.match(regEx)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, message);
    return false;
  }
}

//check box
function shippingAddressOn() {
  let checkBox = document.getElementById("check");
  let text = document.getElementById("shipping-text");
  // If the checkbox is unchecked, display the output text
  if (checkBox.checked === true) {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}
