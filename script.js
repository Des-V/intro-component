// Accessing the DOM and assign it to variables
const headerTitle = document.getElementById("headerTitle");
const headerText = document.getElementById("headerText");
//const promotionTextBold = document.getElementById("promotionTextBold");
const promotionText = document.getElementById("promotionText");
const buttonClaim = document.getElementById("buttonClaim");
const smallText = document.getElementById("smallText");
//const smallTextLink = document.getElementById("smallTextLink");
const formList = document.getElementById("formList");
const formTerms = document.getElementById("formTerms");
const backgroundWrapper = document.getElementById("wrapper");
const body = document.getElementById("body");

// Adding texts to the HTML Structure
headerTitle.innerHTML = 'Learn to code by watching others';
headerText.innerHTML = 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.';
//promotionTextBold.innerHTML = 'Try it free 7 days';
promotionText.innerHTML = 'Try it free 7 days then $20/mo. thereafter';
buttonClaim.innerHTML = 'CLAIM YOUR FREE TRIAL';
smallText.innerHTML = 'By clicking the button you are agreeing to our Terms and Services';
//smallTextLink.innerHTML = 'Terms and Services';

// Styling body HTML element body
body.style.backgroundImage = "url(img/bg-intro-desktop.png)";
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundSize = 'cover';
body.style.backgroundAttachment = 'fixed';
body.style.fontFamily = "'Poppins', sans-serif";

// Styling wrapper HTML element div
backgroundWrapper.style.display = 'grid';
backgroundWrapper.style.textAlign = 'center'; 
backgroundWrapper.style.backgroundColor = "rgb(255, 121, 120)"; // Orange bg color
backgroundWrapper.style.opacity = '3';

// Styling headerTitle HTML element h1
headerTitle.style.color = 'white';

// Styling headerText HTML element p
headerText.style.color = 'white';

// Styling promotionTextBold HTML element p span
//promotionTextBold.style.fontWeight = 'bold';


// Styling promotionText HTML element p
promotionText.style.color = 'white';
promotionText.style.backgroundColor = 'rgb(93, 84, 163)';
promotionText.style.borderBottomColor = 'rgb(218, 105, 107)';

// Styling formList HTML element ul
formList.style.backgroundColor = 'white';
formList.style.borderBottomColor = 'rgb(218, 105, 107)';
formList.style.listStyleType = 'none';

// Styling formTerms HTML element li
formTerms.style.backgroundColor = 'white';

// Styling buttonClaim HTML element li
buttonClaim.style.color = 'white';
buttonClaim.style.backgroundColor = 'rgb(119, 212, 180)';
buttonClaim.style.borderBottomColor = 'rgb(137, 212, 180)';

// Styling smallText HTML element p
smallText.style.backgroundColor = 'white'; 

// Styling smallTextLink HTML element a
//smallTextLink.style.color = 'rgb(255, 120, 124)'; // Orange form