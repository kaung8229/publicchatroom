import { format } from "date-fns";

export function UiElement(divele){

    const userInfoElement = (data)=>{
        // console.log(data);
        const createdTime = data.metadata.creationTime;

        // const monthname = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        // const getDate = new Date(createdTime).getDate();
        // const getMonth = new Date(createdTime).getMonth();
        // const getYear = new Date(createdTime).getFullYear();
        // // console.log(getDate, monthname[getMonth], getYear);
        // const formateddate = `${getDate} ${monthname[getMonth]} ${getYear}`;
        // console.log(formateddate);

        // CDN
        // const formateddate = dateFns.format(new Date(createdTime), "dd MMM yyyy");
        // console.log(formateddate);

        // NPM
        const formateddate = format(new Date(createdTime), "dd MMM yyyy");


        const html = `
        <img src="${data.photoURL}" width="100" alt="profileicon">
        <p>UID : ${data.uid}</p>
        <p>Username : ${data.displayName}</p>
        <p>Email : ${data.email}</p>
        <p>Login at : ${formateddate}</p>
        `;

        divele.innerHTML = html;
    }

    return { userInfoElement };
}