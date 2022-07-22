const loginBtn = document.getElementById('loginbtn')
const logbtn = document.getElementById('logbtn')
const signupBtn = document.getElementById('signupbtn')
const signUp = document.getElementById('signup')

loginBtn.addEventListener('click', () => {
    console.log(event.target)
    location.href = './signup-login.html'
})

signupBtn.addEventListener('click', () => {
    console.log(event.target)
    location.href = './signup-login.html'
})

signUp.addEventListener('click', () => {
    console.log(event.target)
    location.href = './signup-login.html'
})

logbtn.addEventListener('click', () => {
    console.log(event.target)
    location.href = './signup-login.html'
})