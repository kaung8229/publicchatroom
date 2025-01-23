import { Chatroom } from './chat.js';
import { Lielements } from './chatuielement.js';
import "@fortawesome/fontawesome-free/css/all.min.css";

// GET UI
const uirooms = document.querySelector(".chatrooms");
const uichatul = document.querySelector(".chat-ul");
const uichatform = document.querySelector(".chat-form");
const uiuserform = document.querySelector(".user-form");
const uiusermsg = document.querySelector(".msg");
const uiroomtitle = document.querySelector(".roomtitle");
// console.log(uiuserform.username);

const localusername = localStorage.username ? localStorage.username : "Guest";
uiuserform.username.placeholder = `Username is ${localusername}`;


// chatroom instance
const chatroom = Chatroom('general', localusername);
uiroomtitle.textContent = "General";

// old chats instance
const uielement = Lielements(uichatul);


// start chat
uichatform.addEventListener("submit", (e)=>{
    e.preventDefault();
    const message = uichatform.message.value.trim();
    if(message){
        chatroom.addChat(message)
            .then(() => uichatform.reset())
            .catch(e => console.log("Error found : ", e));
    }
})


// update username
uiuserform.addEventListener("submit", (e) => {
    e.preventDefault();
    const newusername = uiuserform.username.value.trim();
    if(newusername){
        chatroom.updateUsername(newusername);
        uiuserform.reset();
    }

    // show & hide msg for updating username
    uiusermsg.innerText = `Username updated to ${newusername}`;
    uiuserform.username.placeholder = `Username is ${newusername}`;
    setTimeout(()=>{uiusermsg.innerText = '';},3000);
})


// update chatroom
uirooms.addEventListener("click", (e) => {
    e.preventDefault();

    const getbtn = e.target.closest('button');
    // console.log(getbtn);
    if(getbtn){
        // reset li / clear previous chats
        uielement.resetli();

        const getroomid = getbtn.getAttribute('id');
        // console.log(getroomid);
        const getroomtitle = getbtn.querySelector('h2').innerText;
        uiroomtitle.textContent = getroomtitle;

        chatroom.updateChatroom(getroomid);

        // fetch & update old chats & show
        chatroom.getChats((data)=>{
            // console.log(data);

            uielement.newli(data);
        })
    }

})



// get old chats & show
chatroom.getChats((data)=>{
    // console.log(data);

    uielement.newli(data);
})
