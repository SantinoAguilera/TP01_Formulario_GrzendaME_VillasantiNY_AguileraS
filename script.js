function darkModeToggle(){
    let body = document.body;
    body.classList.toggle("dark-mode");
}

const printStatus = (input, subtext, errorMsg, valid) =>{
    let campo = document.getElementById(input);
    let error = document.getElementById(subtext);
    if (valid) {
        if (!campo.classList.contains("valid")) campo.classList.toggle("valid");
        if (campo.classList.contains("invalid")) campo.classList.toggle("invalid");
        error.style.color = "black";
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