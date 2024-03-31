const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML
   if(nombre.Value.length<6){
    warnings +='El nombre es muy corto <br>'
    entrar=true
   }
   if(regexEmail.test(email.value)){
    warnings +='El email no es válido <br>'
    entrar=true
   }
   if(pass.value.length<8){
    warnings +='La contraseña no es válida <br>'
    entrar=true
   }
   if(entrar){
    parrafo.innerHTML=warnings
   }
   }
})