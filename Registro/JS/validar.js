// Mostrar y ocultar contraseña
// Mostrar mensaje al cargar la página
setTimeout(function () {
    alert(' ATENCIÓN: Solo los docentes y el coordinador de proyecto aula que ingresarán información de sus proyectos necesitan crear una cuenta. Si solo deseas visualizar la información no la necesitas.');
}, 1200);

function mostrarContrasena() {
    const mostrar = document.getElementById("password");
    if (mostrar.type === "password") {
        mostrar.type = "text";
    } else {
        mostrar.type = "password";

    }
}

// Validar formulario
function validarFormulario() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const verifyPassword = document.getElementById('verifyPassword').value;
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const maidenname = document.getElementById('maidenname').value;

    const regex = /^[a-zA-Z]+$/;

    if (email.trim() === '' || password.trim() === '' || username.trim() === '' || verifyPassword.trim() === '' || name.trim() === '' || lastname.trim() === '' || maidenname.trim() === '') {
        alert('Debe llenar completamente todos los campos.');
        return false;
    }

    if (!email.endsWith('ipn.mx')) {
        alert('El correo electrónico debe terminar en ipn.mx');
        return false;
    }

    if (password.length !== 8) {
        alert('La contraseña debe tener exactamente 8 caracteres');
        return false;
    }

    if (username.length <= 6) {
        alert('El nombre de usuario debe tener más de 6 caracteres');
        return false;
    }

    if (!regex.test(name)) {
        alert('El nombre solo pueden contener letras');
        return false;
    }
    if (!regex.test(lastname)) {
        alert('El apellido paterno solo pueden contener letras');
        return false;
    }
    if ( !regex.test(maidenname)) {
        alert('El apellido materno solo pueden contener letras');
        return false;
    }

    if (password !== verifyPassword) {
        alert('Las contraseñas no coinciden');
        return false;
    }

    return true;
}
