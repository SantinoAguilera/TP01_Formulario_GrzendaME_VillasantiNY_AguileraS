const img = document.getElementById("themeBtn");
const root = document.querySelector(':root');
const html = document.querySelector('html');
let users = [];

const darkModeToggle = () =>{
    html.classList.toggle("dark-mode");
    if (html.classList.contains("dark-mode")) {
        localStorage.setItem("html", "dark-mode");
        localStorage.setItem("img", "sun.png");
        img.src = "sun.png"
        root.style.setProperty('--text', 'rgb(220, 220, 220)');
        root.style.setProperty('--bg1', 'rgb(47, 41, 38)');
        root.style.setProperty('--bg2', 'rgb(20,20,20)');
    } else {
        localStorage.setItem("html", "");
        localStorage.setItem("img", "moon.png");
        root.style.setProperty('--text', 'black');
        root.style.setProperty('--bg1', 'rgb(207, 184, 166)');
        root.style.setProperty('--bg2', 'white');
        img.src = "moon.png"
    }
    let compRoot = getComputedStyle(root);
    localStorage.setItem("variables", JSON.stringify([compRoot.getPropertyValue('--text'), compRoot.getPropertyValue('--bg1'), compRoot.getPropertyValue('--bg2')]));
}

const printStatus = (input, subtext, errorMsg, valid) =>{
    let campo = document.getElementById(input);
    let error = document.getElementById(subtext);
    if (valid) {
        if (!campo.classList.contains("valid")) campo.classList.toggle("valid");
        if (campo.classList.contains("invalid")) campo.classList.toggle("invalid");
        error.innerHTML = "";
    } else {
        if (!campo.classList.contains("invalid")) campo.classList.toggle("invalid");
        if (campo.classList.contains("valid")) campo.classList.toggle("valid");
        error.style.color = "red";
        error.innerHTML = errorMsg;
    }
}

var nameCorrect, emailCorrect, passwordCorrect, confirmationCorrect;

const verifyName = () =>{
    const name = document.getElementById("name");
    const errorMsg = "Tu nombre debe ser de al menos 3 caracteres.";

    if (name.value.length >= 3) {
        valid = true;
    }
    else{
        valid = false;
    }
    nameCorrect = valid;
    printStatus("name", "errorName", errorMsg, valid);
    return valid;
}

const verifyEmail = () =>{
    const email = document.getElementById("email");
    const regex = /[$&+,:;=?/\\#|'<>^*()%!-\s]/;
    const errorMsg = "Tu email debe tener un formato válido.";
    let valid

    if (!regex.test(email.value) && /@/.test(email.value)) {
        valid = true;
    } else {
        valid = false;
    }
    emailCorrect = valid;
    printStatus("email", "errorEmail", errorMsg, valid);
    return valid;
}

function verifyPassword()
{
    const password = document.querySelector("#password");
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const errorMsg = "Tu contraseña debe ser de al menos 8 caracteres y contener al menos una letra y un número.";
    let valid;

    if ((regex.test(password.value)))
    {
        valid = true;
    }
    else
    {
        valid = false;
    }
    passwordCorrect = valid;
    printStatus("password", "errorPassword", errorMsg, valid);
    return valid;
}

function verifyConfirmation()
{
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const errorMsg = "Las contraseñas no coinciden.";
    let valid;

    if (password.value == confirmPassword.value)
    {
        valid = true;
    }
    else
    {
        valid = false;
    }
    confirmationCorrect = valid;
    printStatus("confirmPassword", "errorConfirm", errorMsg, valid);
    return valid;
}

function verifyForm()
{
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const registerConfirm = document.getElementById("registerConfirm");
    let error = false;

    if (name.value.trim().length === 0 || !nameCorrect)
    {
        error = true;
    }
    else
    {
        resetErrorStyles(name);
    }

    if (email.value.trim().length === 0 || !emailCorrect)
    {
        error = true;
    }
    else
    {
        resetErrorStyles(email);
    }

    if (password.value.trim().length === 0 || !passwordCorrect)
    {
        error = true;
    }
    else
    {
        resetErrorStyles(password);
    }

    if (confirmPassword.value.trim().length === 0 || !confirmationCorrect)
    {
        error = true;
    }
    else
    {
        resetErrorStyles(confirmPassword);
    }

    if (!error)
    {
        registerConfirm.innerHTML = "Se registró exitosamente.";
        localStorage.setItem()
    }
    else
    {
    	registerConfirm.innerHTML = "";
    }
}

function resetErrorStyles(inputElement)
{
    function showPassword(id) {
    inputElement.style.border = "";
}

const showPassword = (id) => {
    id = document.getElementById(id);

    console.log(id)

    if (id.type === "password") {
      id.type = "text";
    } else {
      id.type = "password";
    }
}
const verifyForm = () =>
{
    let valid = verifyConfirmation() && verifyEmail() && verifyName() && verifyPassword();
    if(valid){
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        console.log(localStorage.getItem("usrNum"));
        let userNumber = parseInt(localStorage.getItem("usrNum"))++;
        localStorage.setItem("usrNum", userNumber.toString());
        localStorage.setItem("Usr" + userNumber, JSON.stringify([name.value, email.value, password.value]));
        users.add("Usr" + localStorage.getItem("usrNum"));
    }
    location.reload();
}
const Delete = (index) =>{
    localStorage.removeItem(index);
    location.reload();
}
if(window.location['href'] == 'usr.html'){
    let list = document.getElementById("list");
    for (let index = 0; index < users.length; index++) {
        usr = JSON.parse(localStorage.getItem(users[index]));
        list.innerHTML += `
            <tr>
                <th scope="row">${index++}</th>
                <td>${usr[0]}</td>
                <td>${usr[1]}</td>
                <td><button type="button" class="btn btn-danger" onclick=Delete(${users[index]})>Delete</button></td>
            </tr>
        `   
    }
}

if (localStorage.getItem("html") != null){
    html.classList.add(localStorage.getItem("html"));
    let variables = JSON.parse(localStorage.getItem("variables"));
    root.style.setProperty('--text', variables[0]);
    root.style.setProperty('--bg1', variables[1]);
    root.style.setProperty('--bg2', variables[2]);
}
if (localStorage.getItem("img") != null) img.src = localStorage.getItem("img");
if (localStorage.getItem("root") != null) root.value = localStorage.getItem("root");
if (localStorage.getItem("usrNum") == null) localStorage.setItem("usrNum", "0");
