import { Authorize } from './authorize.js';
import { UiElement } from './uielement.js';

// GET UI
const uiuserinfodiv = document.getElementById("userinfo");
const logoutbtn = document.getElementById("logoutbtn");

// authorize instance
const authorize = Authorize();
// Uielement instance
const uiele = UiElement(uiuserinfodiv);

// Get info data & render
authorize.getUser((data)=>{
    // console.log(data);

    uiele.userInfoElement(data);
})


// logout
logoutbtn.addEventListener("click", () => {
    authorize.logoutUser();
})



