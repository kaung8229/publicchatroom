import { Authorize } from './authorize.js';

// GET UI
const resetpasswordform = document.getElementById("resetpasswordform");
const uimsg = document.getElementById("msg");

// Login
resetpasswordform.addEventListener("submit", (e)=>{
    e.preventDefault();

    const resetemail = resetpasswordform.querySelector("#resetemail").value.trim();
    // console.log(resetpasswordform);

    const {resetPassword} = Authorize();
    resetPassword(resetemail, uimsg);
})



