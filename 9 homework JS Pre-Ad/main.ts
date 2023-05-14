const setUserInfoForm = document.getElementById("setUserInfoForm") as HTMLFormElement;
const addUserBtn = document.getElementById("addUser") as HTMLInputElement;
const editUserBtn = document.getElementById("editUser") as HTMLInputElement;
const userLogin = document.getElementById("userLogin") as HTMLInputElement;
const userPassword = document.getElementById("userPassword") as HTMLInputElement;
const userEmail = document.getElementById("userEmail") as HTMLInputElement;
const tableBody = document.getElementById("tableBody")as HTMLTableElement;
let users:any = [];
let pass:boolean = false;
let userIndex:number = 0;

setUserInfoForm.addEventListener("input", isValid);
function isValid(event):void {
    let result:number = 0;
    if (event.target.checkValidity() === false) {
        event.target.style.backgroundColor = "red";
    } else if (event.target.checkValidity()) {
        event.target.style.backgroundColor = "lightgreen";
    }
    if (event.target.value.length === 0) {
        event.target.style.backgroundColor = "white";
    }
    document.querySelectorAll(".userInfo").forEach((elem) => {
        getComputedStyle(elem).backgroundColor === 'rgb(144, 238, 144)' ? result++ : 0;
    })
    if(pass === false){
        result === 3 ? pass = true : pass = false
    }
    
}


//по кліку добавити юзера пушить обєкт в масив users;
addUserBtn.addEventListener("click", addUser);
function addUser():void{
    if (pass) {
        users.push({userLogin:userLogin.value, userPassword:userPassword.value,userEmail:userEmail.value});
        setUserInfoForm.reset();
        document.querySelectorAll<HTMLElement>(".userInfo").forEach((elem) => elem.style.backgroundColor = "white");
        pass = false;
    }
    render()
}


function render():void{
    tableBody.innerHTML = "";
    for(let i = 0;i<users.length;i++){
        let userTR = document.createElement("tr");
        userTR.id = users.indexOf(users[i])
        userTR.innerHTML = `<th>${users.indexOf(users[i])+1}</th>
                            <th>${users[i].userLogin}</th>
                            <th>${users[i].userPassword}</th>
                            <th>${users[i].userEmail}</th>
                            <th><input type="button"  class="editBtn" value="Edit"></th>
                            <th><input type="button"  class="deleteBtn" value="Delete"></th>`
        tableBody.append(userTR)
    }
}

tableBody.addEventListener("click", deleteUser);
function deleteUser(event):void{
    if(event.target.className === "deleteBtn"){
       users.splice(event.target.parentElement.parentElement.id, 1);
       render();
    }
}

tableBody.addEventListener("click", editUser);
function editUser(event):void{
    if(event.target.className === "editBtn"){
        userIndex = event.target.parentElement.parentElement.id;
        userLogin.value = users[event.target.parentElement.parentElement.id].userLogin;
        userPassword.value = users[event.target.parentElement.parentElement.id].userPassword;
        userEmail.value = users[event.target.parentElement.parentElement.id].userEmail;
        addUserBtn.style.display = "none";
        editUserBtn.style.display = "block";
        pass = true;
    }
}


editUserBtn.addEventListener("click", saveEditUser);
function saveEditUser():void{
    if(pass){
        users.splice(userIndex, 1 ,{userLogin:userLogin.value, userPassword:userPassword.value,userEmail:userEmail.value});
        addUserBtn.style.display = "block";
        editUserBtn.style.display = "none";
        setUserInfoForm.reset();
        document.querySelectorAll<HTMLElement>(".userInfo").forEach((elem) => elem.style.backgroundColor = "white");
        render();
        pass = false;
    }
}