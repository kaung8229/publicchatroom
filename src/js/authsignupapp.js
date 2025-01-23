import { Authorize } from './authorize.js';

// GET UI
const signupform = document.getElementById("signupform");

// Register
signupform.addEventListener("submit", (e)=>{
    e.preventDefault();

    const fullname = signupform.querySelector("#fullname").value.trim();
    const email = signupform.querySelector("#email").value.trim();
    const password = signupform.querySelector("#password").value.trim();
    // console.log(fullname, email, password);

    const authorize = Authorize();
    authorize.registerUser(fullname, email, password);


})



