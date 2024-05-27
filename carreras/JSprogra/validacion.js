function agregarBoton() {

    let nuevoBoton = document.createElement("button");
    nuevoBoton.className = "btn2";
    nuevoBoton.textContent = " Proyecto ";
    

    let buttons = document.getElementsByClassName("btn2");

    if (buttons.length > 0) {
        buttons[0].parentNode.appendChild(nuevoBoton, buttons[0]);
    } else {
        let icon = document.querySelector(".fa-circle-plus");
        icon.parentNode.insertBefore(nuevoBoton, icon);
    }
}