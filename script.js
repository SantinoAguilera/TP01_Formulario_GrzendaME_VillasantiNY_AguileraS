const img = document.getElementById("themeBtn");
const root = document.querySelector(':root');
const html = document.querySelector('html');

const darkModeToggle = () =>{
    html.classList.toggle("dark-mode");
    if (html.classList.contains("dark-mode")) {
        localStorage.setItem("html", "dark-mode");
        localStorage.setItem("img", "sun.png");
        img.src = "sun.png"
        root.style.setProperty('--text', 'white');
        root.style.setProperty('--bg1', 'blue');
        root.style.setProperty('--bg2', 'black');
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
}

function verifyForm()
{
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    let error = false;

    if (name.value.trim().length === 0)
    {
        error = true;
        name.style.border = "red";
    }
    else
    {
        resetErrorStyles(name);
    }

    if (email.value.trim().length === 0)
    {
        error = true;
        email.style.border = "red";
    }
    else
    {
        resetErrorStyles(email);
    }

    if (password.value.trim().length === 0)
    {
        error = true;
        password.style.border = "red";
    }
    else
    {
        resetErrorStyles(password);
    }

    if (confirmPassword.value.trim().length === 0)
    {
        error = true;
        confirmPassword.style.border = "red";
    }
    else
    {
        resetErrorStyles(confirmPassword);
    }

    if (!error)
    {
        localStorage.setItem()
    }
}

function resetErrorStyles(inputElement)
{
    inputElement.style.border = "";
}

function showPassword(id) {
    id = document.getElementById(id);

    console.log(id)

    if (id.type === "password") {
      id.type = "text";
    } else {
      id.type = "password";
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