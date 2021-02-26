// Access the DOM and assign it to variables

const form = document.getElementsByTagName("<form>");
const fname = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Add event listener on type submit button
form.addEventListener("submit", (e) => {
  // Prevent from submition if not valid
  e.preventDefault();
  // Use Validate Form function to validate inputs
  validateForm();
});

// Function Validation Form

function validateForm() {
  // Get values from the inputs and remove (trim()) possible white spaces
  const fnameValue = fname.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Validate First Name
  // Check if empty
  if (fnameValue === "" || fnameValue === null) {
    // Add class error plus message and icon
    setErrorFor(fname, "First Name cannot be empty");
  } else {
    // Add class success
    setSuccessFor(fname);
  }

  // Validate Last Name
  // Check if empty
  if (surnameValue === "" || surnameValue === null) {
    // Add class error plus message and icon
    setErrorFor(surname, "Last Name cannot be empty");
  } else {
    // Add class success
    setSuccessFor(surname);
  }

  // Validate email
  // Check if empty
  if (emailValue === "" || emailValue === null) {
    // Add class error plus message and icon
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    // Add class error plus message and icon
    setErrorFor(email, "Looks like this is not an email");
  } else {
    // Add class success
    setSuccessFor(email);
  }

  // Validate password
  // Check if empty
  if (passwordValue === "" || passwordValue === null) {
    // Add class error plus message and icon
    setErrorFor(password, "Password cannot be empty");
  } else if (passwordValue.lenght < 8) {
    // Add class error plus message and icon
    setErrorFor(password, "Password must be a minimun of 8 characters");
  } else {
    // Add class success
    setSuccessFor(password);
  }
}

// Function Set Error For

function setErrorFor(input, message) {
  // Get input from parent division element
  const formControl = input.parentElement; // .form-control
  // Add class error
  formControl.className = "form-control error";

  // Get small element
  const small = formControl.querySelector("small"); // <small>
  // Add error message inside the small element
  small.innerText = message;
}

// Function Set Success For

function setSuccessFor(input) {
  // Get input from parent division element
  const formControl = input.parentElement; // .form-control
  // Add class success
  formControl.className = "form-control success";
}

//Function is email, to see if valid

function isEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
