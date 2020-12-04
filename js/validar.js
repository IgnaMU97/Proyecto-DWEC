window.onload=iniciar;

function iniciar(){

    document.getElementById("btnEnviar").addEventListener("click",validar,false);

}

function validar(item){
    
    var mensajeError  = "Errores en: </br>";

    //Validación nombre y apellidos.

    var email = document.getElementById("email").value;

    //Validación e-mail

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) || email==""){

        item.preventDefault();

        mensajeError = mensajeError + "-E-mail incorrecto.</br>";

        document.getElementById("errores").innerHTML = mensajeError;

    }

}