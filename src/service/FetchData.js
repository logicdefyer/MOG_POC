// FetchData.js

const URI = 'http://localhost:3000';

// export default class ajax {
//     async fetchUsers() {
//         return fetch(URI+'/users')
//         .then((response) => {return response.json()})
//         .catch((error) => {
//         console.error(error);
//         });
//     }   
// }

const ajax = () => {
 
    return fetch(URI+'/users')
           .then((response) => response.json())
           .then((responseJson) => {
            console.log(responseJson);
           })
           .catch((error) => {
             console.error(error);
           });
   
}

module.export = {
    ajax: ajax
}