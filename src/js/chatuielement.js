import { formatDistance } from "date-fns";

export function Lielements(chatul){
    const newli = (data) => {

        // CDN
        // const whenago = dateFns.formatDistance(data.created_at.toDate(), new Date(), { addSuffix: true });

        // NPM
        const whenago = formatDistance(data.created_at.toDate(), new Date(), { addSuffix: true });

        const html = `
        <li class="shadow rounded-lg px-4 py-2">
            <div class="flex justify-between mb-2">
                <h4 class="text-gray-600 font-medium text-sm">${data.username}</h4>
                <i class="text-gray-300 text-sm">${whenago}</i>
            </div>
            <p class="text-gray-600 text-sm">${data.message}</p>
        </li>
        `;

        chatul.innerHTML += html;
    }

    const resetli = () => {
        chatul.innerHTML = "";
    }

    return {newli, resetli};
}