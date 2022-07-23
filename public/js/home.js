const loginBtn = document.getElementById('loginbtn') //camel case
const signupBtn = document.getElementById('signupbtn')
const signUp = document.getElementById('signup')

loginBtn.addEventListener('click', () => {
    console.log(event.target)
    location.href = '/login'
})

signupBtn.addEventListener('click', () => {
    console.log(event.target)
    location.href = '/login'
})

signUp.addEventListener('click', () => {
    console.log(event.target)
    location.href = '/login'
})




