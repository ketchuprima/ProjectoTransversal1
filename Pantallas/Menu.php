<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Menú</title>
    <?php include "../Funciones/bootstrap.php"?>
    <link rel="stylesheet" href="../Estilos/Menu.css">
    <script src="..\Funciones\FuncionesMenu.js"></script>
</head>
<body>
    <div class="row">
        <div id="columna1" class="col-sm-10" >
            <div id="items"class="row row-cols-1 row-cols-sm-2 row-cols-md-4"></div>
        </div>
        <div id="pedido" class="col-sm-2">
            <h2>Carrito</h2>
            <hr>
            <ul id="carrito" class="list-group"></ul>
            <hr>
            <h4 >Total: <span id="total"></span>&euro;</h4>
            <button class="btn btn-secondary btn-lg" id="boton-vaciar" >Vaciar</button>
            <input type="button" id="boton-pedir" class="btn btn-primary btn-lg"  value="Siguiente">
        </div>
    </div>
</body>
</html>