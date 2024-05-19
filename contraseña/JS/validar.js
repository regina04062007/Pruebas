function validarFormulario() {
    var codigo = document.getElementById('codigo').value;
    var password = document.getElementById('password').value;
    

    if (codigo.length !== 6) {
        alert('El código de verificación no es el correcto');
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
