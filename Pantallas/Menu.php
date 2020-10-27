<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    
    <script src="..\Funciones\FuncionesMenu.js"></script>
</head>
<body>
<body>
    <div class="container">
        <div class="row">
            <!-- Elementos generados a partir del JSON -->
            <main id="items"></main>
            <!-- Carrito -->
            <aside>
                <h2>Carrito</h2>
                <!-- Elementos del carrito -->
                <ul id="carrito" class="list-group"></ul>
                <hr>
                <!-- Precio total -->
                <p >Total: <span id="total"></span>&euro;</p>
                <button id="boton-vaciar" >Vaciar</button>
                <button id="boton-pedir" >Siguiente</button>
            </aside>
        </div>
    </div>
</body>
</body>
</html>