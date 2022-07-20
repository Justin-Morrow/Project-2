// const fetch = require('node-fetch');

// //const url = `https://dog.ceo/api/breed/${dogBreed}/images`

// // This was to test if breed would show up
// // let breed = 'terrier wheaten'


// // Getting a list of all breeds from API
// fetch('https://dog.ceo/api/breeds/list/all')
// .then (res => res.json())
// .then(data => {
//     console.log(data.message)
//     console.log(data.message.spaniel.includes('irish'))
//     console.log('data.message', Object.keys(data.message).includes('mix'))

//     const userinput = `${breed}`

//     if(Object.keys(data.message).includes(userinput)) {
//         fetch(`https://dog.ceo/api/breed/${breed}/images`)
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data)
//             let x = Math.floor((Math.random() * data.message.length));
//             console.log(x)
//             console.log(data.message[x])
            
//             const profilePicture = document.createElement('img')
//             profilePicture = data.message[x]
//         })
//         .catch(err => console.log(err))
//     } else {
//         prompt(`${breed} is invalid. Please enter a valid breed.`);
//     }
// })
// .catch(err => console.log(err))

// // module.exports = fetch; //???????
