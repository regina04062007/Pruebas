  // Mostrar mensaje al cargar la página
  setTimeout(function() {
    alert(' ATENCIÓN: Solo los docentes y el coordinador de proyecto aula que ingresarán información de sus proyectos necesitan crear una cuenta. Si solo deseas visualizar la información no la necesitas.');
},1000);

function validarFormulario() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('name').value;

    if (!email.endsWith('ipn.mx')) {
        alert('El correo electrónico debe terminar en ipn.mx');
        email.style.color='red';
        return false;
    }else{
        email.style.color='black';
        if (password.length !== 8) {
            alert('La contraseña debe tener exactamente 8 caracteres');
            return false;
        }else{
            if (username.length <= 6) {
                alert('El nombre de usuario debe tener más de 6 caracteres');
                return false;
            }else{
                return true;
            }
        }
    }
}
