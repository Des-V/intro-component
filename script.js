// Accessing the DOM and assign it to variables
const headerTitle = document.getElementById("headerTitle");
const headerText = document.getElementById("headerText");
const promotionText = document.getElementById("promotionText");
const buttonClaim = document.getElementById("buttonClaim");
const smallText = document.getElementById("smallText");
const smallTextLink = document.getElementById("smallTextLink");
const form = document.getElementById("form");
const formList = document.getElementById("formList");
const fname = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formTerms = document.getElementById("formTerms");
const backgroundWrapper = document.getElementById("wrapper");
const body = document.getElementById("body");

// Adding texts to the HTML Structure
headerTitle.innerHTML = 'Learn to code by watching others';
headerText.innerHTML = 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.';
promotionText.innerHTML = '<b>Try it free 7 days</b> then $20/mo. thereafter';
buttonClaim.innerHTML = 'CLAIM YOUR FREE TRIAL';
smallText.innerHTML = 'By clicking the button you are agreeing to our <a id="smallTextLink" class="smallTextLink" href="#" alt="Terms and Services" style="color: rgb(255, 120, 124); font-weight: bold">Terms and Services</>';

// Creating error messages and Text placeholders

const errorMessage = ['First Name cannot be empty', 'Last Name cannot be empty', 'Looks like this is not and email', 'Password cannot be empty'];


let isEmpty = (value) => {

    for (value in errorMessage) {
        if (value === "") {
            if (value in fname) {
                // fname display 
                return errorMessage[0];
            }
        }
    }

}
    