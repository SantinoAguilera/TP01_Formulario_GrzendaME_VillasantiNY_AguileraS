function darkModeToggle(){
    let body = document.body;
    body.classList.toggle("dark-mode");
}

const printError = (input, subtext) =>{
    let campo = getElementById(input);
    let error = getElementById(subtext);

}

function verifyPassword()
{
    const password = document.querySelector("#password");
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if ((regex.test(password.value)))
    {
        password.style.border = "green";
    }
    else
    {
        document.querySelector("#errorPassword").innerHTML = "La contraseña debe de tener como mínimo 8 caracteres, al menos un número y una letra.";
        password.style.border = "red";
    }
}

function verifyConfirmation()
{
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmPassword");

    if (password.value == confirmPassword.value)
    {
        confirmPassword.style.border = "green";
    }
    else
    {
        document.querySelector("#errorConfirm").innerHTML = "Las contraseñas no coinciden.";
        confirmPassword.style.border = "red";
    }
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