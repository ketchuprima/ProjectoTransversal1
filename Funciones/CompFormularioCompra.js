let vacio = true;
let numCorrecto = true;
let correoCorrecto = true;

function camposVacios(){
    vacio = true;
    let inputs = document.getElementsByTagName("input");
    let elemento;
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].getAttribute("id") != "enviar"){
            elemento = inputs[i].getAttribute("id");
            if(inputs[i].value.length == 0){
                document.getElementById("error" + elemento).innerHTML="El campo está vacío";
                document.getElementById(elemento).style.backgroundColor="red";
                document.getElementById("error" + elemento).style.display="block";
                vacio = false;
            }else{
                document.getElementById("error" + elemento).style.display="none";
                document.getElementById(elemento).style.backgroundColor="";
            }
        }
    }
}

function numeroCorrecto(){
    let formatoNumero = /^[0-9]{9,9}$/;
    if(!formatoNumero.test(document.getElementById("telefono").value)){
        document.getElementById("errortelefono").innerText="El número introducido no existe";
        document.getElementById("errortelefono").style.display="block";
        document.getElementById("telefono").style.backgroundColor="red";
        numCorrecto = false;
    }else{
        document.getElementById("errortelefono").style.display="none";
        document.getElementById("telefono").style.backgroundColor="";
        numCorrecto = true;
    }
}

function validarEmail(){
    let emailRegex = /^\w+([\.-]?\w+)*@(inspedralbes)(\.cat)$/;
    if(!emailRegex.test(document.getElementById("correo").value)){
        document.getElementById("errorcorreo").innerText="El correo debe tener un formato válido con servidor inspedralbes.cat";
        document.getElementById("errorcorreo").style.display="block";
        document.getElementById("correo").style.backgroundColor="red";
        correoCorrecto = true;
    }else{
        document.getElementById("errorcorreo").style.display="none";
        document.getElementById("correo").style.backgroundColor="";
        correoCorrecto = false;
    }
}


function validar(){
    camposVacios();
    numeroCorrecto();
    validarEmail();
    if(!vacio || !numCorrecto || !correoCorrecto){
        document.getElementById("enviar").removeAttribute("type");
        document.getElementById("enviar").setAttribute("type", "button");
    }else{
        document.getElementById("enviar").setAttribute("type", "submit");
    }
}

