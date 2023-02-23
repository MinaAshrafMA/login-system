var userName = document.getElementById("nameInput");
var emailInputs = document.getElementById("emailInput");
var passInputs = document.getElementById("passInput");
var signUpBtn = document.querySelector('#signupBtn');
var alertMsg = document.getElementById('alertMsg');
var loginBtn = document.getElementById('loginBtn');
var welcomeMsg = document.getElementById('welcomeMsg');
var logoutBtn = document.getElementById('logoutBtn');
var usersContainer = [];



if (localStorage.getItem("users") != null) {
    usersContainer = JSON.parse(localStorage.getItem("users"));
}
if (signUpBtn != null) {
    signUpBtn.addEventListener('click', addUser);
}
if (loginBtn != null) {
    loginBtn.addEventListener('click', login);
}
if (logoutBtn != null) {
    logoutBtn.addEventListener('click', logOut);
}
if(welcomeMsg != null) {
    let user = JSON.parse(localStorage.getItem('usersNames'))
    welcomeMsg.innerHTML = 'welcome' + user;
}


function addUser() {

    var users = {
        username: userName.value,
        userEmail: emailInputs.value,
        userPass: passInputs.value
    }

    if (userName.value == '' || emailInputs.value == '' || passInputs.value == '' || checkMail() != undefined) {

        if (userName.value == '' || emailInputs.value == '' || passInputs.value == '') {
            callAlert('All inputs are required', '#d23544');
        }

        if (checkMail() != undefined) {
            callAlert('email already existed', '#d23544');
        }

    }

    else {
        callAlert('success', '#28a545')
        usersContainer.push(users);
        localStorage.setItem("users", JSON.stringify(usersContainer));
        console.log(usersContainer);
    }


}

function callAlert(msg, txtColor) {
    alertMsg.innerHTML = msg;
    alertMsg.classList.replace('d-none', 'd-block');
    alertMsg.style.color = txtColor;
}

function checkMail() {
    var res = usersContainer.find(ele => ele.userEmail == emailInputs.value);
    return res;
}


function login() {

    if (emailInputs.value == '' || passInputs.value == '') 
    {
        callAlert('All inputs are required', '#d23544')
    }
    else 
    {
        var res = usersContainer.find(ele => ele.userEmail == emailInputs.value && ele.userPass == passInputs.value);
        if (res == undefined) 
        {
            callAlert('email or password not found!', '#d23544')
        }
        else 
        {
            localStorage.setItem('usersNames', JSON.stringify(res.username));
            window.location.href = 'welcome.html';
        }
    }

}


function logOut()
{ 
    window.location.href='index.html'
}









