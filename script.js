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

function verifyPassword()
{
    const password = document.getElementById("password").value;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const errorMsg = "Tu contraseña debe ser de al menos 8 caracteres y contener al menos una letra y un número.";
    let valid;

    if (regex.test(password))
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
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    let error = false;

    if (name.trim().length === 0)
    {
        error = true;
        console.log("ERRORnameHasNoValue")
    }

    if (email.trim().length === 0)
    {
        error = true;
        console.log("ERRORemailHasNoValue")
    }

    if (password.trim().length === 0)
    {
        error = true;
        console.log("ERRORpasswordHasNoValue")
    }

    if (confirmPassword.trim().length === 0)
    {
        error = true;
        console.log("ERRORconfirmPasswordHasNoValue")
    }
}