const setUserInfoForm = document.getElementById("setUserInfoForm");
const addUserBtn = document.getElementById("addUser");
const editUserBtn = document.getElementById("editUser");
const userLogin = document.getElementById("userLogin");
const userPassword = document.getElementById("userPassword");
const userEmail = document.getElementById("userEmail");
const tableBody = document.getElementById("tableBody");
let users = [];
let pass = false;
let userIndex = 0;
setUserInfoForm.addEventListener("input", isValid);
function isValid(event) {
    let result = 0;
    if (event.target.checkValidity() === false) {
        event.target.style.backgroundColor = "red";
    }
    else if (event.target.checkValidity()) {
        event.target.style.backgroundColor = "lightgreen";
    }
    if (event.target.value.length === 0) {
        event.target.style.backgroundColor = "white";
    }
    document.querySelectorAll(".userInfo").forEach((elem) => {
        getComputedStyle(elem).backgroundColor === 'rgb(144, 238, 144)' ? result++ : 0;
    });
    if (pass === false) {
        result === 3 ? pass = true : pass = false;
    }
}
addUserBtn.addEventListener("click", addUser);
function addUser() {
    if (pass) {
        users.push({ userLogin: userLogin.value, userPassword: userPassword.value, userEmail: userEmail.value });
        setUserInfoForm.reset();
        document.querySelectorAll(".userInfo").forEach((elem) => elem.style.backgroundColor = "white");
        pass = false;
    }
    render();
}
function render() {
    tableBody.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        let userTR = document.createElement("tr");
        userTR.id = users.indexOf(users[i]);
        userTR.innerHTML = `<th>${users.indexOf(users[i]) + 1}</th>
                            <th>${users[i].userLogin}</th>
                            <th>${users[i].userPassword}</th>
                            <th>${users[i].userEmail}</th>
                            <th><input type="button"  class="editBtn" value="Edit"></th>
                            <th><input type="button"  class="deleteBtn" value="Delete"></th>`;
        tableBody.append(userTR);
    }
}
tableBody.addEventListener("click", deleteUser);
function deleteUser(event) {
    if (event.target.className === "deleteBtn") {
        users.splice(event.target.parentElement.parentElement.id, 1);
        render();
    }
}
tableBody.addEventListener("click", editUser);
function editUser(event) {
    if (event.target.className === "editBtn") {
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
function saveEditUser() {
    if (pass) {
        users.splice(userIndex, 1, { userLogin: userLogin.value, userPassword: userPassword.value, userEmail: userEmail.value });
        addUserBtn.style.display = "block";
        editUserBtn.style.display = "none";
        setUserInfoForm.reset();
        document.querySelectorAll(".userInfo").forEach((elem) => elem.style.backgroundColor = "white");
        render();
        pass = false;
    }
}
