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
        root.style.setProperty('--text', 'white');
        root.style.setProperty('--bg1', 'black');
        root.style.setProperty('--bg2', 'grey');
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


const verifyName = () =>{
    const name = document.getElementById("name");
    const errorMsg = "El nombre tiene que tener un minimo de 3 caracteres"
    let valid = false;

    if (name.value.length >= 3) {
        valid = true;
    }
    else{
        valid = false;
    }
    printStatus("name", "errorName", errorMsg, valid);
    return valid;
}

const verifyEmail = () =>{
    const email = document.getElementById("email");
    const regex = /[$&+,:;=?/\\#|'<>^*()%!-\s]/;
    const errorMsg = "El email tiene que tener un formato valido";
    let valid

    if (!regex.test(email.value) && /@/.test(email.value)) {
        valid = true;
    } else {
        valid = false;
    }
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
    printStatus("confirmPassword", "errorConfirm", errorMsg, valid);
    return valid;
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
        let userNumber = parseInt(localStorage.getItem("usrNum")) + 1;
        let usrId = "Usr" + userNumber;
        localStorage.setItem("usrNum", userNumber.toString());
        localStorage.setItem(usrId, JSON.stringify([name.value, email.value, password.value]));
        if (localStorage.getItem("users") != null) users = localStorage.getItem("users");
        console.log(localStorage.getItem(usrId));
        users.push(usrId);
        localStorage.setItem("users", JSON.stringify(users));
        console.log(localStorage.getItem(users));
    }
    location.reload();
}
const Delete = (index) =>{
    localStorage.removeItem(index);
    location.reload();
}
const buffer = () =>{
    let list = document.getElementById("list");
    users = localStorage.getItem("users");
    for (let index = 0; index < users.length; index++) {
        let usr = localStorage.getItem(users[indexpt2]);
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
if (localStorage.getItem("usrNum") == null) localStorage.setItem("usrNum", "0");
if (localStorage.getItem("img") != null) img.src = localStorage.getItem("img");
if (localStorage.getItem("root") != null) root.value = localStorage.getItem("root");