<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="../Estilos/Menu.css">
    <script src="..\Funciones\FuncionesMenu.js"></script>
</head>
<body>
    <div class="container">
            <div id="items"></div>
            <div id="carrito">
                <h2>Carrito</h2>
                <ul id="carrito" class="list-group"></ul>
                <hr>
                <p >Total: <span id="total"></span>&euro;</p>
                <button id="boton-vaciar" >Vaciar</button>
                <input type="button" id="boton-pedir"  value="Siguiente">
            </div>
    </div>
</body>
</html>