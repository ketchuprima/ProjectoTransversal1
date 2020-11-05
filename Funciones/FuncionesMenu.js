window.onload = function () {
    // Variables
    let baseDeDatos = ModuloMenu.getBaseDeDatos();
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
        var hoy = new Date();
        let momentoMenu=2;
        let i=0;
        let limite=0;
        //si ya han pasado las 11:30
        if((hoy.getHours()>=11&&hoy.getMinutes()>30)||hoy.getHours()>11){
            momentoMenu=4; 
            document.getElementById("nav-tab").removeChild( document.getElementById("nav-bocadillos-tab"));        

        }else{//y si no
            document.getElementById("nav-tab").removeChild( document.getElementById("nav-platos-tab"));        
            document.getElementById("nav-tab").removeChild( document.getElementById("nav-postres-tab"));        

        }
        for(let j=1; j<momentoMenu+1; j++){
            items = document.getElementById("items"+(j));
            limite=i+3;
            while (i<=limite) {
                //el meollo
                let miNodoCardBody = document.createElement('div');
                miNodoCardBody.setAttribute("class", "col");
                //Titulo
                let miNodoTitle = document.createElement('h5');
                miNodoTitle.textContent = baseDeDatos[i]['nombre'];
                //foto
                let miNodoImagen = document.createElement('input');
                miNodoImagen.setAttribute('class', 'shadow-lg p-3 mb-5 bg-white rounded');
                miNodoImagen.setAttribute('src', baseDeDatos[i]['imagen']);
                miNodoImagen.setAttribute('type', 'image');
                miNodoImagen.setAttribute('width', "60%");
                miNodoImagen.setAttribute('height', "60%");
                miNodoImagen.setAttribute('marcador', baseDeDatos[i]['id']);
                miNodoImagen.addEventListener('click', anyadirCarrito);
                //Precio
                let miNodoPrecio = document.createElement('p');
                miNodoPrecio.textContent = baseDeDatos[i]['precio'] + '€';
                // Insertamos
                miNodoCardBody.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoPrecio);

                items.appendChild(miNodoCardBody);
                i++;
            }
        }
    }

    function anyadirCarrito () {
        let contador=0;
        for(let i= 0; i<carrito.length; i++){
            if(carrito[i]==this.getAttribute('marcador')){
                contador++;
            }
        }
        carrito.push(this.getAttribute('marcador'));

        renderizarCarrito(contador+1);
    }

    function renderizarCarrito(contador) {
        if(contador==1){
            let alimentoDiv = document.createElement('div');
            alimentoDiv.setAttribute("name", carrito[carrito.length-1]);
            alimentoDiv.setAttribute("class", "Alimento");

            let alimentoTexto = document.createElement('li');
            alimentoTexto.textContent+= baseDeDatos[parseInt(carrito[carrito.length-1])-1]['nombre'];
            alimentoTexto.setAttribute("id", baseDeDatos[parseInt(carrito[carrito.length-1])-1]['precio'])
            
            alimentoTexto.appendChild(ReenderizarBotonBorrar(baseDeDatos[parseInt(carrito[carrito.length-1])-1]['id']));
            alimentoDiv.appendChild(alimentoTexto);
            carritoItem.appendChild(alimentoDiv)
        }
        else{
            let divAlimento = document.getElementsByName(carrito[carrito.length-1]);
            divAlimento[0].firstChild.innerHTML= baseDeDatos[parseInt(carrito[carrito.length-1])-1]['nombre']+" x"+contador;

            divAlimento[0].firstChild.appendChild(ReenderizarBotonBorrar(baseDeDatos[parseInt(carrito[carrito.length-1])-1]['id']));
        }
        calcularTotal(baseDeDatos[parseInt(carrito[carrito.length-1])-1]['precio']);


    }

    function borrarItemCarrito() {
        let check = false;
        let contador=0;
        let marcador=this.getAttribute('marcador');
        let parentnode = this.parentNode;

        calcularTotal(-this.parentNode.id);

        for(let i= 0; i<carrito.length; i++){
            if(carrito[i]==marcador){
                contador++;
            }
        }
        if(contador==1) parentnode.parentNode.parentNode.removeChild(parentnode.parentNode);
        
        else{
            parentnode.innerHTML=baseDeDatos[marcador-1]["nombre"]+" x"+(contador-1);
            parentnode.appendChild(ReenderizarBotonBorrar(marcador));
        }

        for(let i=0; i<carrito.length && check==false; i++){
            if(carrito[i]==this.getAttribute('marcador')) {
                carrito.splice(i, 1);
                check=true;
            }
        }

    }

    function calcularTotal(precio) {

        total+=precio;
        if(total.toFixed(2)==-0.00) total=0;
        totalItem.textContent = total.toFixed(2);
        
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
        if(total == 0){
            Swal.fire({
                title: 'Error',
                text: 'Has de seleccionar algún producto de la carta',
                icon: 'error',
                confirmButtonText: "Cerrar",
            })
        }else{
            localStorage.setItem('pedido', carrito);
            localStorage.setItem('precio', total);
            window.location.href="../Pantallas/FinalizarCompra.php";
        }
    }

    function ReenderizarBotonBorrar(marcador){
        let botonBorrar = document.createElement('button');
        botonBorrar.setAttribute("class", "btn btn-primary btn-sm");
        botonBorrar.textContent="-";
        botonBorrar.setAttribute("marcador", marcador);
        botonBorrar.addEventListener('click', borrarItemCarrito);
        return botonBorrar
    }

    botonVaciarItem.addEventListener('click', vaciarCarrito);
    botonEnviarItem.addEventListener('click', Enviar);


    renderItems();
} 