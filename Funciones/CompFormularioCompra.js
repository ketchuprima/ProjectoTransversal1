let vacio = true;
let numCorrecto = true;

function camposVacios(){
    let inputs = document.getElementsByTagName("input");
    let elemento;
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].getAttribute("id") != "enviar"){
            elemento = inputs[i].getAttribute("id");
            console.log(elemento);
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
    

    /*if(document.getElementById("nombre").value.length == 0){
        document.getElementById("errorNombre").innerHTML="El campo nombre está vacio";
        document.getElementById("nombre").style.backgroundColor="red";
        document.getElementById("errorNombre").style.display="block";
        vacio = false;
    }else{
        document.getElementById("errorNombre").style.display="none";
        document.getElementById("nombre").style.backgroundColor="";
        vacio = true;
    }

    if(document.getElementById("telefono").value == ""){
        document.getElementById("errorTelefono").innerHTML="El campo teléfono está vacio";
        document.getElementById("telefono").style.backgroundColor="red";
        document.getElementById("errorTelefono").style.display="block";
        vacio = false;
    }else{
        document.getElementById("errorTelefono").style.display="none";
        document.getElementById("telefono").style.backgroundColor="";
        vacio = true;
    }

    if(document.getElementById("correo").value == ""){
        document.getElementById("errorCorreo").innerHTML="El campo correo está vacio";
        document.getElementById("correo").style.backgroundColor="red";
        document.getElementById("errorCorreo").style.display="block";
        vacio = false;
    }else{
        document.getElementById("errorCorreo").style.display="none";
        document.getElementById("correo").style.backgroundColor="";
        vacio = true;
    }

    console.log("camposVacios " + vacio);
    console.log(document.getElementById("nombre").value.length);*/
}


function numeroCorrecto(){
    let formatoNumero = /^[0-9]{9,9}$/;
    if(!formatoNumero.test(document.getElementById("telefono").value)){
        document.getElementById("errortelefono").innerText="El número es incorrecto";
        document.getElementById("errortelefono").style.display="block";
        document.getElementById("telefono").style.backgroundColor="red";
        numCorrecto = false;
    }else{
        document.getElementById("errortelefono").style.display="none";
        document.getElementById("telefono").style.backgroundColor="";
        numCorrecto = true;
    }
}


function validar(){
    camposVacios();

    if(!camposVacios || !numeroCorrecto()){
        document.getElementById("enviar").removeAttribute("type");
        document.getElementById("enviar").setAttribute("type", "button");
    }else{
        document.getElementById("enviar").setAttribute("type", "submit");
    }
}

