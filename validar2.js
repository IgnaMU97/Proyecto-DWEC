window.onload=iniciar;

function iniciar(){

    document.getElementById("btnEnviar").addEventListener("click",validar,false);

}

function validar(item){
    
    var mensajeError  = "";

    //Validación nombre y apellidos.

    var email = document.getElementById("email").value;

    var pw = document.getElementById("pw").value;

    var pw2 = document.getElementById("verPw").value;

    //Validación e-mail

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) || email==""){

        item.preventDefault();

        mensajeError = mensajeError + "-E-mail incorrecto.</br>";

        document.getElementById("errores").innerHTML = mensajeError;

    }

    //Validación Contraseñas

    if(pw!=pw2){

        item.preventDefault();

        mensajeError = mensajeError + "-Las contraseñas no coinciden</br>";

        document.getElementById("errores").innerHTML = mensajeError;

    }else if(pw=="" || pw2=="" ){

        mensajeError = mensajeError + "-Ninguno de los campos puede estar vacío.</br>";

        document.getElementById("errores").innerHTML = mensajeError;

    }

}