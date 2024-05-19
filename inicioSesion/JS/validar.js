function validarFormulario() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.endsWith('ipn.mx')) {
        alert('El correo electronico debe terminar en @alumno.ipn.mx');
        return false;
    }else{
        if (password.length !== 8) {
            alert('La contraseña debe tener exactamente 8 caracteres');
            return false;
        }else{
            return true;
        }
    }
}
