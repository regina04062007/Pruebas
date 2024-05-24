// Mostrar y ocultar contraseña 
 // Mostrar mensaje al cargar la página
 setTimeout(function() {
    alert(' ATENCIÓN: Solo los docentes y el coordinador de proyecto aula que ingresarán información de sus proyectos necesitan crear una cuenta. Si solo deseas visualizar la información no la necesitas.');
},1200);

function mostrarContrasena() { 
    const x = document.getElementById("password"); 
    if (x.type === "password") { 
        x.type = "text"; } 
        else {
             x.type = "password"; 
            
    } 
} 
// Validar formulario
 function validarFormulario() { 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; 
    const username = document.getElementById('username').value; 
    const verifyPassword = document.getElementById('verifyPassword').value; 
    if (!email.endsWith('ipn.mx')) { alert('El correo electrónico debe terminar en ipn.mx');
     return false; 
    } if (password.length !== 8) { 
        alert('La contraseña debe tener exactamente 8 caracteres');
         return false;
    }
     if (username.length <= 6) { 
        alert('El nombre de usuario debe tener más de 6 caracteres');
         return false;
    } if (password !== verifyPassword) {
         alert('Las contraseñas no coinciden'); 
         return false; 
    } return true;
 }
