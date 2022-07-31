// const socket = io.connect();
console.log('loginButton')
const loginButton = document.querySelector('#loginButton')
const signupButton = document.querySelector('#signupButton')
console.log(signupButton)
const loginFormHandler = async (event) => {
    event.preventDefault();
console.log(signupButton)
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    } else {
      alert('Please enter valid email/password')
    }
};


const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('HELLOOOOOOO')
    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(email && username && password) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ email, username, password}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert(response.statusText)
        }
    } else {
      alert('Please enter valid email/password')
    }
};

  
loginButton.addEventListener('click', loginFormHandler);

signupButton.addEventListener('click', signupFormHandler);

// document
//   .querySelector('#loginButton')
//   .addEventListener('click', loginFormHandler);

// document
//   .querySelector('#signupButton')
//   .addEventListener('click', signupFormHandler);

//===================================//
// const loginForm = document.querySelector("#login-form");
// loginForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const email = document.querySelector("#email-login").value;
//     const password = document.querySelector("#password-login").value;
//     //  correct route to login
//     fetch("/api/users/login",{
//         method:"POST",
//         body:JSON.stringify({
//             email,
//             password,
//         }),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(!res.ok){
//             // show that the login was unsuccessful
//         } else {
//             document.location.replace('/profile');
//         }
//     });
// });

// const signupForm = document.querySelector("#signup-form");
// signupForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const signupObj={
//         email:document.querySelector("#email-signup").value,
//         password:document.querySelector("#password-signup").value,
//         username:document.querySelector("#username-signup").value,
//     }
//     //  correct route to signup
//     fetch("/api/users",{
//         method:"POST",
//         body:JSON.stringify(signupObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(!res.ok){
//             //  show that signup was unsuccessful
//             return alert("trumpet sound")
//         } else {
//             res.json().then(data=>{
//                 document.location.replace(`/profile`);
//             })
//         }
//     });
// });
// socket.on('greeting', (greeting) => {
//     console.log(greeting);
// });

// const loginBtn = document.getElementById('loginBtn')
// const signBtn = document.getElementById('signBtn')

// signBtn.addEventListener('click', () => {
//     location.href='/public/profile.html'
// })

// loginBtn.addEventListener('click', () => {
//     location.href='/public/profile.html'
// })