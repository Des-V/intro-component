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
smallText.innerHTML = 'By clicking the button you are agreeing to our <a id="smallTextLink" href="#" alt="Terms and Services" style="color: rgb(255, 120, 124)">Terms and Services</>';

// Styling body HTML element body
body.style.backgroundImage = "url(img/bg-intro-desktop.png)";
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundSize = 'cover';
body.style.backgroundAttachment = 'fixed';
body.style.fontFamily = "'Poppins', sans-serif";

// Styling wrapper HTML element div
backgroundWrapper.style.backgroundColor = "rgba(255, 121, 120, 0.7)"; // Orange bg color


// Styling headerTitle HTML element h1
headerTitle.style.color = 'white';
headerTitle.style.fontSize = '22px';

// Styling headerText HTML element p
headerText.style.color = 'white';
headerText.style.fontSize = '13px';

// Styling promotionText HTML element p
promotionText.style.color = 'white';
promotionText.style.backgroundColor = 'rgb(93, 84, 163)';
promotionText.style.boxShadow = '0px 10px rgb(218, 105, 107)';
promotionText.style.borderRadius = '10px';
promotionText.style.fontSize = '14px';

// Styling form HTML element form
form.style.fontFamily = "'Poppins', sans-serif";

// Styling formList HTML element ul
formList.style.backgroundColor = 'white';
formList.style.boxShadow = '0px 10px rgb(218, 105, 107)';
formList.style.borderRadius = '10px';
formList.style.listStyleType = 'none';

// Styling name HTML element form ul li 
fname.style.fontFamily = "'Poppins', sans-serif";
fname.style.fontWeight = "bold";

// Styling surname HTML element form ul li 
surname.style.fontFamily = "'Poppins', sans-serif";
surname.style.fontWeight = "bold";

// Styling email HTML element form ul li 
email.style.fontFamily = "'Poppins', sans-serif";
email.style.fontWeight = "bold";

// Styling password HTML element form ul li 
password.style.fontFamily = "'Poppins', sans-serif";
password.style.fontWeight = "bold";

// Styling formTerms HTML element li
formTerms.style.backgroundColor = 'white';
formTerms.style.fontFamily = "'Poppins', sans-serif";
formTerms.style.fontSize = '10px';

// Styling buttonClaim HTML element li
buttonClaim.style.color = 'white';
buttonClaim.style.backgroundColor = 'rgb(119, 212, 180)';
buttonClaim.style.boxShadow = '0px 5px rgb(141, 189, 167)';
buttonClaim.style.borderRadius = '10px';
buttonClaim.style.border = 'none';
buttonClaim.style.fontWeight = "bold";

// Styling smallText HTML element p
smallText.style.color = 'gray';
smallText.style.backgroundColor = 'white'; 

