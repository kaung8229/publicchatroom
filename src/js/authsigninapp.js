import "@fortawesome/fontawesome-free/css/all.min.css";
import { Authorize } from './authorize.js';

// GET UI
const signinform = document.getElementById("signinform");
const googleloginbtn = document.getElementById("googleloginbtn");

// Login
signinform.addEventListener("submit", (e)=>{
    e.preventDefault();

    const signinemail = signinform.querySelector("#signinemail").value.trim();
    const signinpassword = signinform.querySelector("#signinpassword").value.trim();
    // console.log(email, password);

    const {loginUser} = Authorize();
    loginUser(signinemail, signinpassword);
})


// google login
googleloginbtn.addEventListener("click", () => {
    const {googleLogin} = Authorize();
    googleLogin();
})



