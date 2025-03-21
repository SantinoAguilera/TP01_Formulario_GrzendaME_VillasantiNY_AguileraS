function darkModeToggle(){
    let body = document.body;
    body.classList.toggle("dark-mode");
}

const printStatus = (input, subtext, errorMsg, valid) =>{
    let campo = document.getElementById(input);
    let error = document.getElementById(subtext);
    if (valid) {
        campo.style.color = "green";
        error.innerHTML = "";
    } else {
        campo.style.color = "red";
        error.innerHTML = errorMsg;
    }
}

function verifyPassword()
{
    const password = document.getElementById("password").value;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const errorMsg = "La contraseña debe de tener como mínimo 8 caracteres, al menos un número y una letra.";
    let valid;

    if (console.log(regex.test(password)))
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

    if (password == confirmPassword)
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