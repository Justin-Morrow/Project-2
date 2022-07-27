// const { response } = require("express")

//const socket = io.connect();
const loginBtn = document.getElementById('loginBtn')
const signBtn = document.getElementById('signBtn')

const emailSignup = document.getElementById('email-signup')
const userSignup = document.getElementById('username-signup')
const passwordSignup = document.getElementById('password-signup')
const emailLogin = document.getElementById('email-login')
const passwordLogin = document.getElementById('password-login')


//const loginForm = document.querySelector("#login-form");

loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(emailLogin.value.length && passwordLogin.value.length > 0){
        
        const email = document.querySelector("#email-login").value.trim();
        const password = document.querySelector("#password-login").value.trim();
        // const email = emailLogin.value;
        // const password = passwordLogin.value;

        //  correct route to login
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
            console.log(res, 'RES !!!!!!')
            if(!res.ok){

                // show that the login was unsuccessful
                alert(res.statusText);
            } else {
                document.location.replace('/profile');
                // location.href='./profile'
            }
        });

    } else {
        alert('Incorrect email/password')
    }
});

//const signupForm = document.querySelector("#signup-form");
signBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(emailSignup.value.length && userSignup.value.length && passwordSignup.value.length > 0){
        
        const signupObj={
            // email:emailLogin.value,
            // password:passwordLogin.value,
            // username:document.querySelector("#username-signup").value,
            email:document.querySelector("#email-signup").value,
            password:document.querySelector("#password-signup").value,
            username:document.querySelector("#username-signup").value,
        }
        //  correct route to signup
        fetch("/api/users",{
            method:"POST",
            body:JSON.stringify(signupObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            console.log(res, 'RESPONSEEEEEEE!!!!!')
            if(!res.ok){
                //  show that signup was unsuccessful
                return alert("trumpet sound")
            } else {
                // res.json().then(data=>{
                    // location.href='./profile'
                    document.location.replace(`/profile`);
                // })
            }
        });
    } else {
        alert('Please enter valid email/password')
    }
});
//=============================================//

// socket.on('greeting', (greeting) => {
//     console.log(greeting);
// });



// const loginBtn = document.getElementById('loginButton')
// const signBtn = document.getElementById('signBtn')

// signBtn.addEventListener('click', () => {
//     location.href='/profile'
// })

// loginBtn.addEventListener('click', () => {
//     location.href='/profile'
// })

//====================DAVIDS===========================//

// const loginForm = document.querySelector("#login-form");
// loginBtn.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const email = document.querySelector("#email-login").value.trim();
//     const password = document.querySelector("#password-login").value.trim();
//     //route to login
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
//             //the login was unsuccessful
//         } else {
//             document.location.replace('/profile');
//         }
//     });
// });

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);

// const signupForm = document.querySelector("#signup-form");
// signupForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
    
    
//     const signupObj={

//         email:document.querySelector("#email-signup").value.trim(),
//         password:document.querySelector("#password-signup").value.trim(),
//         username:document.querySelector("#username-signup").value.trim(),
//     }
    
//     console.log(signupObj, "signup OBJ!!!!!!!!")
//     //the correct route to signup
//     fetch("/api/users",{
//         method:"POST",
//         body:JSON.stringify(signupObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(!res.ok){
//             //show that signup was unsuccessful
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



// const loginBtn = document.getElementById('loginButton')
// const signBtn = document.getElementById('signBtn')

// signBtn.addEventListener('click', () => {
//     location.href='/profile'
// })

// loginBtn.addEventListener('click', () => {
//     location.href='/profile'
// })




