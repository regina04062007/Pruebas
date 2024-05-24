function mostrarContrasena() {
    const x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function validarFormulario() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    
    if (email.trim() === '' || password.trim() === '' || username.trim() === '') {
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
    
    return true;
}
