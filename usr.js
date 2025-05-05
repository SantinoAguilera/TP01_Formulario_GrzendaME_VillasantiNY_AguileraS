const img = document.getElementById("themeBtn");
const root = document.querySelector(':root');
const html = document.querySelector('html');

const darkModeToggle = () =>{
    html.classList.toggle("dark-mode");
    if (html.classList.contains("dark-mode")) {
        localStorage.setItem("html", "dark-mode");
        localStorage.setItem("img", "sun.png");
        img.src = "sun.png"
        root.style.setProperty('--text', 'rgb(220, 220, 220)');
        root.style.setProperty('--bg1', 'rgb(47, 41, 38)');
        root.style.setProperty('--bg2', 'rgb(20,20,20)');
        root.style.setProperty('--input', '#181a1b');
        root.style.setProperty('--border', '#383d3f');
        root.style.setProperty('--placeholder', '#5e5d5b');
    } else {
        localStorage.setItem("html", "");
        localStorage.setItem("img", "moon.png");
        root.style.setProperty('--text', 'black');
        root.style.setProperty('--bg1', 'rgb(207, 184, 166)');
        root.style.setProperty('--bg2', 'white');
        root.style.setProperty('--input', 'white');
        root.style.setProperty('--border', '#dee2e6');
        root.style.setProperty('--placeholder', '#737578');
        img.src = "moon.png"
    }
    let compRoot = getComputedStyle(root);
    localStorage.setItem("variables", JSON.stringify([compRoot.getPropertyValue('--text'), compRoot.getPropertyValue('--bg1'), compRoot.getPropertyValue('--bg2'), compRoot.getPropertyValue('--input'), compRoot.getPropertyValue('--border'), compRoot.getPropertyValue('--placeholder')]));
}
const Delete = (index) =>{
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    location.reload();
}

if (localStorage.getItem("users")) {
    let users = JSON.parse(localStorage.getItem("users"));
    const list = document.getElementById("list");
    for (let index = 0; index < users.length; index++) {
        list.innerHTML += `
            <tr>
                <th scope="row">${index++}</th>
                <td>${users[index].name}</td>
                <td>${users[index].email}</td>
                <td><button type="button" class="btn btn-danger" onclick=Delete(${index})>Delete</button></td>
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
    root.style.setProperty('--input', variables[3]);
    root.style.setProperty('--border', variables[4]);
    root.style.setProperty('--placeholder', variables[5]);
}
if (localStorage.getItem("img") != null) img.src = localStorage.getItem("img");
if (localStorage.getItem("root") != null) root.value = localStorage.getItem("root");