const form = document.getElementById("form");
const signInForm = document.getElementById("signInForm")
const userName = document.getElementById("userName");
const userSurname = document.getElementById("userSurname");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const myPlaceholder = document.querySelector(".myPlaceholder");
const signUpBtn = document.getElementById("signUpBtn");
const signInBtn = document.getElementById("signInBtn")
const signUpBtn1 = document.getElementById("signUpBtn1");
const signInBtn1 = document.getElementById("signInBtn1");
const signOutBtn = document.getElementById("signOutBtn");
const SIuserEmail = document.getElementById("SIuserEmail");
const SIuserPassword = document.getElementById("SIuserPassword");
const userWindow = document.querySelector(".userWindow")
let redCross = document.querySelector(".redCross");
let redMessage = document.querySelector(".redMessage");
let notRegUsers = [];
let regUsers = [];


signInForm.addEventListener("click", currentInput)
form.addEventListener("click", currentInput);
function currentInput(event) {
    if (event.target.className === "textInput") {
        event.target.addEventListener("input", someFunc);
        function someFunc() {
            if (event.target.checkValidity() === false) {
                event.target.parentElement.querySelector(".redCross").style.display = "block";
                event.target.parentElement.querySelector(".redMessage").style.display = "block";
                event.target.parentElement.querySelector(".checkMark").style.display = "none";
                event.target.parentElement.querySelector(".myPlaceholder").style.cssText = 'top: 10px;left: 8px;font-size: 13px;margin-bottom: 20px;';
                event.target.parentElement.querySelector(".textInput").style.padding = "18px 0px 0px 7px";
            } else if (event.target.checkValidity()) {
                event.target.parentElement.querySelector(".checkMark").style.display = "block";
                event.target.parentElement.querySelector(".redCross").style.display = "none";
                event.target.parentElement.querySelector(".redMessage").style.display = "none";
                event.target.parentElement.querySelector(".myPlaceholder").style.cssText = 'top: 10px;left: 8px;font-size: 13px;margin-bottom: 20px;';
                event.target.parentElement.querySelector(".textInput").style.padding = "18px 0px 0px 7px";
            }
            if (event.target.value.length === 0) {
                event.target.parentElement.querySelector(".checkMark").style.display = "none";
                event.target.parentElement.querySelector(".redCross").style.display = "none";
                event.target.parentElement.querySelector(".redMessage").style.display = "none";
                event.target.parentElement.querySelector(".myPlaceholder").style.cssText = 'top: 20px;left: 10px;font-size: 16px;';

            }
        }
    }
}
//перевіряє чи пройшла форма валідаюцію,якщо активує кнопку реєстрації
form.addEventListener("input", () => {
    let arr = document.querySelectorAll(".textInput"); //доступ до всіх елементів з даним класом
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parentElement.querySelector(".checkMark").style.display === "block") { //перевіряє чи пройдена перевірка інпутом
            result++
        }
    }
    if (result === 4) { //перевіряє чи всі 4 інпута валідні і чи поставлена галочка чекбоксу
        signUpBtn.disabled = false;
        signUpBtn.style.backgroundColor = "rgba(80, 147, 169, 0.7)";
    }
});


signUpBtn.addEventListener("click", () => {
    function checkStorage(){
        if(localStorage.length > 0 && localStorage.getItem('users')){
            notRegUsers = JSON.parse(localStorage.getItem("users")); 
        }
    }
    function checkTheSame() {
        let result = false;
        for (let i = 0; i < notRegUsers.length; i++) {
            if (notRegUsers[i].email === userEmail.value) {
                result = true;
            }
        };
        return result
    }
    checkStorage();
    if(checkTheSame()){
        emailBox.querySelector(".redCross").style.display = "block";
        emailBox.querySelector(".checkMark").style.display = "none";
        alert("this email is allready exist")
    }else{
        notRegUsers.push({ name: userName.value, surname: userSurname.value, email: userEmail.value, password: userPassword.value })
        localStorage.setItem("users", JSON.stringify(notRegUsers));
        console.log(notRegUsers)
        form.querySelectorAll(".checkMark").forEach((elem) => elem.style.display = "none");
        signUpBtn.disabled = true;
        signUpBtn.style.backgroundColor = "rgba(80, 147, 169, 0.3)";
        document.querySelectorAll(".myPlaceholder").forEach((elem) => elem.style.cssText = 'top: 20px;left: 10px;font-size: 16px;');
        form.reset();
    }
})


const fullUserName = document.getElementById("fullUserName");
const showUserEmail = document.getElementById("showUserEmail");

signInBtn1.addEventListener("click", () => {
    function getUsers(){
        if(localStorage.length > 0 && localStorage.getItem('users')){
            regUsers = JSON.parse(localStorage.getItem("users")); 
        }
    }
    
    getUsers()
    for(let i = 0;i<regUsers.length;i++){
        if(regUsers[i].email === SIuserEmail.value && regUsers[i].password === SIuserPassword.value){
            signInForm.style.display = "none";
            userWindow.style.display = "flex";
            fullUserName.innerHTML = `${regUsers[i].name} ${regUsers[i].surname}`;
            showUserEmail.innerHTML = regUsers[i].email;
            console.log(regUsers)
        }else{
            signInForm.querySelector(".redMessage").style.display = "block";
        }
            
        
    }
    
})


// when press "sign in now" close sign up form and open sign in form
signInBtn.addEventListener("click", () => {
    form.style.display = "none";
    signInForm.style.display = "flex";
})
// when press "sign up now" close sign in form and open sign up form
signUpBtn1.addEventListener("click", () => {
    console.log("click")
    signInForm.style.display = "none";
    form.style.display = "flex";

})

signOutBtn.addEventListener("click",()=>{
    location.reload();

})




// regUsers
// function setToStorage(){
//         if(localStorage.length > 0 && localStorage.getItem('users')){
//             notRegUsers = JSON.parse(localStorage.getItem('users'));
//         }
//         if(!notRegUsers.some(userEmail => userEmail.value === userEmail.value)){
//             notRegUsers.push(userEmail.value);
//         }
//         localStorage.setItem('users', JSON.stringify(notRegUsers));
//         userEmail.value = '';
    
//     console.log(notRegUsers);
// }


// const NEW_NAME = document.querySelector('.newName');
// const ADD_NAME = document.querySelector('.addName');

// let allNames = [];

// ADD_NAME.addEventListener('click', function(){
//     if(NEW_NAME.value !== ''){
//         if(localStorage.length > 0 && localStorage.getItem('allNames')){
//             allNames = JSON.parse(localStorage.getItem('allNames'));
//         }
//         if(!allNames.some(name => name.toLowerCase() === NEW_NAME.value.toLowerCase())){
//             allNames.push(NEW_NAME.value);
//         }
//         localStorage.setItem('allNames', JSON.stringify(allNames));
//         NEW_NAME.value = '';
//     }
//     console.log(allNames);
// });