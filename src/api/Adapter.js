// console.log('ADAPTER LINKED!')

// const userEndpoint = 'http://localhost:3000/api/v1/users'

// const userFetch = userAdapter()

// const lookEndpoint = 'http://localhost:3000/api/v1/looks'

// const lookFetch = lookAdapter()

// function userAdapter() {
//     return {
//         index: function () {
//             return fetch(userEndpoint).then(res => res.json())
//         },

//         showUser: function (id) {
//             return fetch(`${userEndpoint}/${id}`).then(res => res.json())
//         },

//         postUser: function (username) {

//             let postConfig = {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     username: `${username}`
//                 })
//             }
//             return fetch(userEndpoint, postConfig).then(res => res.json()).then(console.log)
//         },
//         deleteUser: function (userID) {
//             return fetch(`${userEndpoint}/${userID}`, { method: 'DELETE' })
//         }

//     }
// }


// function lookAdapter() {

//     return {
//         postLook: function (stateObj) {
//             let postConfig = {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     title: `${stateObj.title}`,
//                     lookURL: `${stateObj.lookURL}`,
//                     user_id: `${stateObj.user_id}`
//                 })
//             }
//             return fetch(lookEndpoint, postConfig).then(res => res.json()).then(console.log)
//         }
//     }
// }

// // export const userFetch
// // export const lookFetch
