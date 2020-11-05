//Variables
let vacio = true;
let numCorrecto = true;
let correoCorrecto = true;
let pedido = localStorage.getItem("pedido");
let precio = parseFloat(localStorage.getItem("precio"));
let bocadillos =[];
let baseDeDatos = ModuloMenu.getBaseDeDatos();


//Ejecución de las funciones iniciales
recibirPedido();

//Esta función nos carga la lista de los pedidos que ha hecho el usuario en la pantalla anterior
function recibirPedido(){
    let bocadillosTotales = [];
    let contador = 0;
    let id = 0;
    let comp = pedido[0];
    for(let i=1; i<pedido.length; i++){
        if(pedido[i] != ","){
            comp += pedido[i];
        }else{
            bocadillosTotales.push(baseDeDatos[comp-1]["id"]);
            comp = "";
        }
    }

    bocadillosTotales.push(baseDeDatos[comp-1]["id"]);
    
    for(let i=0; i<=baseDeDatos.length; i++){
        contador=0;
        for(let j=0; j<bocadillosTotales.length; j++){
            if(bocadillosTotales[j] == i){
                contador++;
                bocadillosTotales.splice(j, 1);
                j=-1;
            }
        }
        if(contador>0){
            let nombres = document.createElement("li");
            nombres.setAttribute("class", "list-group-item");
            nombres.textContent = baseDeDatos[i-1]["nombre"] + " x " + contador;
            document.getElementById("listaFinal").appendChild(nombres);
            bocadillos.push(nombres.textContent);
        }
    }

    console.log(bocadillos);

    let precioTotal = document.createElement("li");
    precioTotal.setAttribute("class", "list-group-item");
    precioTotal.setAttribute("id", "precio");
    precioTotal.textContent = "Total: " + precio.toFixed(2) + "€";
    document.getElementById("listaFinal").appendChild(precioTotal);
    bocadillos.push(precio);
    document.getElementById('pedido').value=bocadillos;
}

//Esta función valida que los campos del formulario no estén vacios
function camposVacios(){
    vacio = true;
    let inputs = document.getElementsByTagName("input");
    let elemento;
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].getAttribute("id") != "enviar"){
            if(inputs[i].getAttribute("id") != "retroceder"){
                if(inputs[i].getAttribute("id") != "pedido"){
                    if(inputs[i].getAttribute("id") != "imagen"){
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
        }
    }
}

//Esta función comprueba que el formato del número de teléfono introducido sea correcto de forma dinámica
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

//Esta función comprueba que el formato del correo electrónico introducido sea correcto de forma dinámica
function validarEmail(){
    let emailRegex = /^\w+([\.-]?\w+)*@(inspedralbes)(\.cat)$/;
    if(!emailRegex.test(document.getElementById("correo").value)){
        document.getElementById("errorcorreo").innerText="El correo debe tener un formato válido con servidor inspedralbes.cat";
        document.getElementById("errorcorreo").style.display="block";
        document.getElementById("correo").style.backgroundColor="red";
        correoCorrecto = false;
    }else{
        document.getElementById("errorcorreo").style.display="none";
        document.getElementById("correo").style.backgroundColor="";
        correoCorrecto = true;
    }
}

//Esta función valida que todos los campos ni estén vacios ni sean incorrectos sus datos una vez damos el botón de enviar para que el formulario sea correcto y pasamos los datos
//de la lista de los pedidos del usuario para después poder escribirlos en el fichero
function validar(){
    camposVacios();
    numeroCorrecto();
    validarEmail();
    if(!vacio || !numCorrecto || !correoCorrecto){
        document.getElementById("enviar").removeAttribute("type");
        document.getElementById("enviar").setAttribute("type", "button");
    }else{
        localStorage.setItem("bocadillos", bocadillos);
        document.getElementById("enviar").setAttribute("type", "submit");
    }
}

//Esta función nos permite retroceder a la pantalla anterior
function atras(){
    window.location.href="../Pantallas/Menu.php";
}

