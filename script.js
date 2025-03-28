function darkModeToggle(){
    let body = document.body;
    body.classList.toggle("dark-mode");
}

const printStatus = (input, subtext, errorMsg, valid) =>{
    let campo = document.getElementById(input);
    let error = document.getElementById(subtext);
    if (valid) {
        campo.classList.toggle("valid");
        error.innerHTML = "";
    } else {
        campo.classList.toggle("invalid");
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
        vaild = false;
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