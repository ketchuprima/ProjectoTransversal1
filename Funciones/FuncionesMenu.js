window.onload = function () {
    // Variables
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
    let items = document.getElementById("items");
    let carrito = [];
    let total = 0;
    let carritoItem = document.getElementById("carrito");
    let totalItem = document.getElementById("total");
    let botonVaciarItem = document.getElementById("boton-vaciar");
    let botonEnviarItem = document.getElementById("boton-pedir");
    let i=0;

    // Funciones
    function renderItems() {
        for (i=0; i<baseDeDatos.length;i++) {
            //Div general
            let miNodo = document.createElement('div');
            //el meollo
            let miNodoCardBody = document.createElement('div');
            //Titulo
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.textContent = baseDeDatos[i]['nombre'];
            //foto
            let miNodoImagen = document.createElement('img');
            miNodoImagen.setAttribute('src', baseDeDatos[i]['imagen']);
            miNodoImagen.setAttribute('with', "100");
            miNodoImagen.setAttribute('height', "100");
            //Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.textContent = baseDeDatos[i]['precio'] + '€';
            //Boton
            let miNodoBoton = document.createElement('button');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', baseDeDatos[i]['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            items.appendChild(miNodo);
}
    }

    function anyadirCarrito () {
        carrito.push(this.getAttribute('marcador'));
        renderizarCarrito();
    }

    function renderizarCarrito() {

        let alimentoDiv = document.createElement('div');
        alimentoDiv.setAttribute("name", carrito[carrito.length-1]);
        alimentoDiv.setAttribute("class", "Alimento");


        let alimentoTexto = document.createElement('li');
        alimentoTexto.textContent+= baseDeDatos[parseInt(carrito[carrito.length-1])-1]['nombre'];
        alimentoTexto.setAttribute("id", baseDeDatos[parseInt(carrito[carrito.length-1])-1]['precio'])

        let botonBorrar = document.createElement('button');
        botonBorrar.textContent="-";
        botonBorrar.setAttribute("marcador", baseDeDatos[parseInt(carrito[carrito.length-1])-1]['id']);
        botonBorrar.addEventListener('click', borrarItemCarrito);
        
        alimentoTexto.appendChild(botonBorrar);
        alimentoDiv.appendChild(alimentoTexto);
        carritoItem.appendChild(alimentoDiv)
        
        calcularTotal(baseDeDatos[parseInt(carrito[carrito.length-1])-1]['precio']); 

    }

    function borrarItemCarrito() {
        let check = false;
        this.parentNode.parentNode.removeChild(this.parentNode);
        for(let i=0; i<carrito.length && check==false; i++){
            if(carrito[i]==this.getAttribute('marcador')) {
                delete carrito[i];
                check=true;
            }
        }
        calcularTotal(-this.parentNode.id);
    }

    function calcularTotal(precio) {

        total+=precio;
        totalItem.textContent = total;
        
    }

    function vaciarCarrito() {
        let alimentos = document.getElementsByClassName("Alimento");
        let check = false;
        for( i=0; check==false; i++){
            if(alimentos[0]){
                alimentos[0].parentNode.removeChild(alimentos[0]);
            }else{
                check=true;
            }

        }
        carrito = [];

        total=0;
        totalItem.textContent = 0;
    }

    function Enviar(){
        localStorage.setItem('pedido', carrito);
        localStorage.setItem('precio', total);
        window.location.href="../Pantallas/FinalizarCompra.php";
    }

    botonVaciarItem.addEventListener('click', vaciarCarrito);
    botonEnviarItem.addEventListener('click', Enviar);


    renderItems();
} 