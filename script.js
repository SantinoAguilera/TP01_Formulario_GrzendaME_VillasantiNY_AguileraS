function darkModeToggle(){
    let body = document.body;
    body.classList.toggle("dark-mode");
}

function verifyPassword()
{
    const password = document.getElementById("password").value;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (console.log(regex.test(password)))
    {
        //Añadir output grafico de que la contraseña esta bien (sugiero cambiarle el color al contorno del Input)
    }
    else
    {
        document.querySelector("#errorPassword").innerHTML = "La contraseña debe de tener como mínimo 8 caracteres, al menos un número y una letra."
    }
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