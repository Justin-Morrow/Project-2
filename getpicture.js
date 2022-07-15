const fetch = require('node-fetch')

const dogBreed = 'chihuahua';
const dogImage = 'https://dog.ceo/api/breed/' + dogBreed + '/images'


console.log(dogImage)


fetch(dogImage)
.then(res => res.json())
.then(data => {
    //console.log(data)

    let x = Math.floor((Math.random() * data.message.length));
    //console.log(x)
    console.log(data.message[x])

})

.catch(err => console.log(err))

