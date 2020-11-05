<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Menú</title>
    <?php include "../Funciones/bootstrap.php"?>
    <link rel="stylesheet" href="../Estilos/Menu.css">
    <link rel="stylesheet" href="../Estilos/pagina.css">
    <script src="../Funciones/FuncionesMenu.js"></script>
    <script src="../Funciones/BaseDeDatos.js"></script>
</head>
<body>
    <div class="header">
        <?php include("./header.php") ?>
    </div>
    <div class="row">
        <div id="columna1" class="col-sm-10" >
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link" id="nav-bocadillos-tab" data-toggle="tab" href="#nav-bocadillos" role="tab" aria-controls="nav-bocadillos" aria-selected="false">Bocadillos</a>
                <a class="nav-item nav-link" id="nav-platos-tab" data-toggle="tab" href="#nav-platos" role="tab" aria-controls="nav-platos" aria-selected="false">Platos</a>
                <a class="nav-item nav-link active" id="nav-bebidas-tab" data-toggle="tab" href="#nav-bebidas" role="tab" aria-controls="nav-bebidas" aria-selected="true">Bebidas</a>
                <a class="nav-item nav-link" id="nav-postres-tab" data-toggle="tab" href="#nav-postres" role="tab" aria-controls="nav-postres" aria-selected="false">Postres</a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade" id="nav-bocadillos" role="tabpanel" aria-labelledby="nav-bocadillos-tab">
                <div id="items1"class="row row-cols-2"></div>
            </div>
            <div class="tab-pane fade" id="nav-platos" role="tabpanel" aria-labelledby="nav-platos-tab">
                <div id="items3"class="row row-cols-2"></div>
            </div>
            <div class="tab-pane fade show active" id="nav-bebidas" role="tabpanel" aria-labelledby="nav-bebidas-tab">
                <div id="items2"class="row row-cols-2"></div>
            </div>
            <div class="tab-pane fade" id="nav-postres" role="tabpanel" aria-labelledby="nav-postres-tab">
                <div id="items4"class="row row-cols-2"></div>
            </div>
        </div>
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
    <div class="footer">
        <?php include("./footer.php") ?>
    </div>
</body>
</html>