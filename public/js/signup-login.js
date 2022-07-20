const socket = io.connect()
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const email = document.querySelector("#email-login").value;
    const password = document.querySelector("#password-login").value;
    //route to login
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify({
            email,
            password,
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            //the login was unsuccessful
        } else {
            document.location.replace('/profile');
        }
    });
});
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const signupObj={
        email:document.querySelector("#email-signup").value,
        password:document.querySelector("#password-signup").value,
        username:document.querySelector("#username-signup").value,
    }
    //the correct route to signup
    fetch("/api/users",{
        method:"POST",
        body:JSON.stringify(signupObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(!res.ok){
            //show that signup was unsuccessful
            return alert("trumpet sound")
        } else {
            res.json().then(data=>{
                document.location.replace(`/profile`);
            })
        }
    });
});
socket.on('greeting', (greeting) => {
    console.log(greeting);
});

const loginBtn = document.getElementById('loginBtn')
const signBtn = document.getElementById('signBtn')

signBtn.addEventListener('click', () => {
    location.href='/public/profile.html'
})

loginBtn.addEventListener('click', () => {
    location.href='/public/profile.html'
})