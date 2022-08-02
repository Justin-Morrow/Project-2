//const fetch = require('node-fetch');

const addPetBtn = document.getElementById('add-btn')
const nameIn = document.getElementById('name')
const descriptionIn = document.getElementById('description')
const breedIn = document.getElementById('breed')
const ageIn = document.getElementById('age')
const genderIn = document.getElementById('gender')
const locationIn = document.getElementById('location')


addPetBtn.addEventListener('click', () => {
    if(nameIn.value.length && descriptionIn.value.length && breedIn.value.length && ageIn.value.length && genderIn.value.length && locationIn.value.length > 0) {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then (res => res.json())
        .then(data => {
            console.log(data.message)
            console.log(data.message.spaniel.includes('irish'))
            console.log('data.message', Object.keys(data.message).includes('mix'))


            if(Object.keys(data.message).includes(breedIn.value)) {
                fetch('https://dog.ceo/api/breed/' + breedIn.value + '/images')
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    let x = Math.floor((Math.random() * data.message.length));
                    console.log(x)
                    console.log(data.message[x])
                    
                    const profilePicture = document.createElement('img')
                    profilePicture = data.message[x]
                })
                .catch(err => console.log(err))

                    location.href = '/public/match.html'

            } else {
                alert('Please enter a valid breed.');
            }
        })
        .catch(err => console.log(err))

    } else {
        alert('Please fill out sign up form.')
    }
});

