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
    const password = document.querySelector("#password");
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const errorMsg = "La contraseña debe de tener como mínimo 8 caracteres, al menos un número y una letra.";
    let valid;

    if ((regex.test(password.value)))
    {
        password.style.border = "green";
        valid = true;
    }
    else
    {
        document.querySelector("#errorPassword").innerHTML = "La contraseña debe de tener como mínimo 8 caracteres, al menos un número y una letra.";
        password.style.border = "red";
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
        confirmPassword.style.border = "green";
        valid = true;
    }
    else
    {
        document.querySelector("#errorConfirm").innerHTML = "Las contraseñas no coinciden.";
        confirmPassword.style.border = "red";
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
}

function resetErrorStyles(inputElement)
{
    inputElement.style.backgroundColor = "";
}