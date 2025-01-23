import { db } from './firebase.js'
import { collection, addDoc, onSnapshot, Timestamp, query, where, orderBy } from 'firebase/firestore'


export function Chatroom(room, username){

    let curroom = room;
    let curname = username;
    let dbRef = collection(db, "chats");

    let unsubscribe = null;

    const addChat = async (message) => {
        const now = new Date();
        const chatdata = {
            username: curname,
            room: curroom,
            message,
            created_at: Timestamp.fromDate(now)
        };

        try{

            const response = await addDoc(dbRef, chatdata);
            return response;

        }catch(err){
            console.log("Error Found : ", err);
        }
    }

    const getChats = (callback) => {

        // fetch all data when data updated
        // onSnapshot(
        //     query(dbRef, where('room', '==', curroom), orderBy('created_at')),
        //     (docSnap) => {
        //         docSnap.forEach(doc => {
        //             console.log(doc.data());
        //             // callback(doc.data());
        //         })
        //     }
        // )

        // fetch only new changed data when data updated
        // docChanges()
        // onSnapshot(
        //     query(dbRef, where('room', '==', curroom), orderBy('created_at')),
        //     (docSnap) => {
        //         docSnap.docChanges().forEach(chats => {
        //             // console.log(chats);
        //             // console.log(chats.doc.data());
        //             callback(chats.doc.data());
        //         })
        //     }
        // )

        // if(unsubscribe){
        //     unsubscribe();
        // }
        if(unsubscribe) unsubscribe();


        unsubscribe = onSnapshot(
            query(dbRef, where('room', '==', curroom), orderBy('created_at')),
            (docSnap) => {
                docSnap.docChanges().forEach(chats => {
                    // console.log(chats);
                    // console.log(chats.doc.data());
                    callback(chats.doc.data());
                })
            }
        )

    }

    const updateChatroom = (newroom) => {
        curroom = newroom;
        // console.log("Room changed to " + curroom);
    }

    const updateUsername = (newusernmae) => {
        curname = newusernmae;
        localStorage.setItem("username", curname);

        // console.log("Username updated to ", curname);
    }

    return {addChat, getChats, updateChatroom, updateUsername};
}




