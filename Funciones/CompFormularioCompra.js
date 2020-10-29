let vacio = true;
let numCorrecto = true;
let correoCorrecto = true;
let pedido = localStorage.getItem("pedido");
let precio = localStorage.getItem("precio");
let bocadillos;
let retroceder = document.getElementById("retroceder");

let baseDeDatos = [
    {
        id: 1,
        nombre: 'Bocadillo de nocilla',
        precio: 1.50,
        imagen: 'https://media.istockphoto.com/photos/toast-with-chocolate-paste-on-a-white-background-picture-id646993386'
    },
    {
        id: 2,
        nombre: 'Bocadillo de fues',
        precio: 1.70,
        imagen: 'https://www.bcrek-shop.com/entrepans/337/fuet-de-olot.jpg'
    },
    {
        id: 3,
        nombre: 'Bocadillo de hamburguesa con queso',
        precio: 2.40,
        imagen: 'https://thumbs.dreamstime.com/z/bocadillo-de-la-hamburguesa-y-del-queso-de-la-carne-de-vaca-54317684.jpg'
    },
    {
        id: 4,
        nombre: 'Bocadillo de atún',
        precio: 10.20,
        imagen: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/01/bocadillo-atun-morron.jpg'
    }
]

recibirPedido();

function recibirPedido(){
    for(let i=0; i<pedido.length; i++){
        if(pedido[i] != ","){
            let nombres = document.createElement("li");
            nombres.setAttribute("class", "lista-nombres");
            nombres.textContent = baseDeDatos[pedido[i]-1]["nombre"];
            document.getElementById("listaFinal").appendChild(nombres);
            bocadillos += baseDeDatos[pedido[i]-1]["nombre"] + "\n";
        }
    }
    let precioTotal = document.createElement("li");
    precioTotal.setAttribute("class", "precioTotal");
    precioTotal.textContent = precio;
    document.getElementById("listaFinal").appendChild(precioTotal);
    bocadillos += precio;
}

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
        correoCorrecto = false;
    }else{
        document.getElementById("errorcorreo").style.display="none";
        document.getElementById("correo").style.backgroundColor="";
        correoCorrecto = true;
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
        localStorage.setItem("bocadillos", bocadillos);
        document.getElementById("enviar").setAttribute("type", "submit");
    }
}

//retroceder.addEventListener('onclick', atras());

function atras(){
    window.location.href="../Pantallas/FinalizarCompra.php";
}

