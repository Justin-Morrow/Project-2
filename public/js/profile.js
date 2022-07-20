const addPetBtn = document.getElementById('add-btn')
const forms = document.querySelectorAll('input.value')
const name = document.getElementById('name')
const description = document.getElementById('description')
const breed = document.getElementById('breed')
const age = document.getElementById('age')
const gender = document.getElementById('gender')
const location = document.getElementById('location')
const vl = value.length

addPetBtn.addEventListener('click', () => {
    if(forms.vl && name.vl && description.vl && breed.vl && age.vl && gender.vl && location.vl > 0) {
        location.href = 'public/match.html'
    } else {
        prompt('Please fill out sign up form.')
    }
})