function darkModeToggle(){
    let body = document.body;
    body.classList.toggle("dark-mode");
}

const printError = (input, subtext) =>{
    let campo = getElementById(input);
    let error = getElementById(subtext);

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