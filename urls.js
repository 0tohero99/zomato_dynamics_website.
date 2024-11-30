const base_urls = "http://3.17.216.66:4000";


// http://3.17.216.66:4000/location
// http://3.17.216.66:4000/restaurants
// http://3.17.216.66:4000/restaurant?stateId=3


// const getcity = () => {
//     fetch(`${base_urls}/location`, { method: 'GET' })
//         .then((res) => res.json())
//         .then((data) => {
//             //  console.log(data) 
//             for (i = 0; i < data.length; i++) {
//                 let element = document.createElement('option'); //option//
//                 let text = document.createTextNode(data[i].state) //states//
//                 element.appendChild(text);//<option>state</option>//
//                 element.value = data[i].state_id //<option value="1">state</option>//
//                 document.getElementById("city").appendChild(element);
//                 //<select><option value="1">state</option>//</select>//
//             }
//         })
// }

// async await//
const getcity = async () => {
    let response = await fetch(`${base_urls}/location`, { method: 'GET' })
    let data = await response.json()
    for (i = 0; i < data.length; i++) {
        let element = document.createElement('option'); //option//
        let text = document.createTextNode(data[i].state) //states//
        element.appendChild(text);//<option>state</option>//
        element.value = data[i].state_id //<option value="1">state</option>//
        document.getElementById("city").appendChild(element);
        //<select><option value="1">state</option>//</select>//
    }
}
async function get_rest() {
    let cityId = document.getElementById("city").value;
    // console.log("===get_rest===", cityId)
    let rest = document.getElementById("rest");
    while (rest.length > 0) {
        rest.remove(0)
    }
    let response = await fetch(`${base_urls}/restaurant?stateId=${cityId}`, { method: "GET" })
    let data = await response.json();
    for (i = 0; i < data.length; i++) {
        let element = document.createElement('option'); //option//
        let text = document.createTextNode(`${data[i].restaurent_name}-${data[i].address}`) //states//
        element.appendChild(text);//<option>state</option>//
        rest.appendChild(element);
    }

}