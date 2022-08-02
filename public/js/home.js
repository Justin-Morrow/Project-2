const loginBtn = document.getElementById('loginBtn')
const signupBtn = document.getElementById('signupBtn')
const loginBtn2 = document.getElementById('loginBtn2')


loginBtn.addEventListener('click', () => {
    console.log(loginBtn)
    location.href = './signup-login'
})

signupBtn.addEventListener('click', () => {
    console.log(signupBtn)
    location.href = './signup-login'
})

loginBtn2.addEventListener('click', () => {
    location.href = './signup-login'
})