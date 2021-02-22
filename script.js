// Accessing the DOM and assign it to variables
const buttonClaim = document.getElementById("buttonClaim");
const fname = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const input = document.getElementsByTagName("<input>");
const errorMessage = document.getElementsByTagName("<small>");
const errorIcon = document.getElementsByTagName("<i>");
// Creating error messages and Text placeholders



let isEmpty = (value) => {

    for (value in input) {
        if (value === "") {
               return errorMessage.style.visibility = "visible"
                
            } else {
                continue;
            }
        } 
    }

}


function validateForm() {
    return isEmpty
}