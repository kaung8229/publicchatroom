import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "firebase/auth";

export function Authorize(){

    // sign up
    const registerUser = async(fullname, email, password)=>{

        const defaultProfileImg = "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png";
        
        try{
            
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;
            // console.log(user);

            updateProfile(user, {
                displayName: fullname, 
                photoURL: defaultProfileImg
            }).then(() => {
                // Redirect
                window.location.href = "../index.html";
            })

        }catch(e){
            console.log("Error found in register : ", e.message);
        }

    }

    // sign in
    const loginUser = (email, password)=>{

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                // set username to localstorage
                setLocalName(userCredential.user);

                // Redirect
                window.location.href = "../index.html";

            })
            .catch((error) => {
                console.log("Error found in login user : ", e.message);
            });
        
    }

    // sign out
    const logoutUser = ()=>{

        signOut(auth)
            .then(() => {

                // remove username from localstorage
                unsetLocalName();

                // Redirect
                window.location.href = "../signin.html";
                
            })
            .catch((error) => {
                console.log("Error Found in logout user : ", error.message);
            });

    }

    // reset password
    const resetPassword = async(email, uimsg)=>{

        try{
            await sendPasswordResetEmail(auth, email);

            uimsg.textContent = "Reset password email has sent. Please check inbox.";
            uimsg.style.color = "green";

        }catch(error){

            console.log("Error found in reset password email : ", error.message);

            uimsg.textContent = "Error : " + error.message;
            uimsg.style.color = "red";

        }

    }

    // google sign in
    const googleLogin = ()=>{

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {

            // set username to localstorage
            setLocalName(result.user);
            
            // Redirect
            window.location.href = "../index.html";

        }).catch((error) => {
            console.log("Error Found in google sign-in : ", error.message);
        });

    }
    
    // auth check
    const isLoggedIn = ()=>{

        onAuthStateChanged(auth, (userdata) => {
            if (userdata) {
                // console.log(userdata);
                return true;
            } else {
                // Redirect
                window.location.href = "../signin.html";
            }
        });

    }

    // get user information
    const getUser = (callback)=>{
        onAuthStateChanged(auth, (userdata) => {
            if (userdata) {
                callback(userdata);
            }
        });
    }


    const setLocalName = (userdata)=>{
        localStorage.setItem("username", userdata.displayName);
    }

    const unsetLocalName = ()=>{
        localStorage.removeItem("username");
    }


    return {registerUser, loginUser, logoutUser, resetPassword, googleLogin, isLoggedIn, getUser};
}


