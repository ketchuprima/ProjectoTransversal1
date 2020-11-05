<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include "../Funciones/bootstrap.php"?>
    <link rel="stylesheet" href="../Estilos/FinalizarCompra.css">
</head>
<body class="h-100 ">
    <div class="container">
                <div class="row">
                    <div id="pedidoFinal" class="col-sm-8 align-self-center">
                        <ul id="listaFinal"></ul>
                    </div>
                    <div id="formulario" class="col-sm-4 align-self-center">
                        <form action="confirmar.php" method="post" name="factura" id="factura">
                        <h4>Factura</h4>
                        <div>
                            <label for="nombre" class="label">Nombre</label>
                            <input name="nombre" type="text" class="form-control" id="nombre">
                            <span id="errornombre"></span>
                        </div>
                        <div>
                            <label for="telefono" class="label">Teléfono</label>
                            <input name="telefono" type="text" id="telefono" class="form-control" onkeyup="numeroCorrecto()">
                            <span id="errortelefono"></span>
                        </div>
                        <div>
                            <label for="correo" class="label">Correo electrónico</label>
                            <input name="correo" type="text" id="correo" class="form-control" onkeyup="validarEmail()">
                            <span id="errorcorreo"></span>
                        </div>
                        <input name="pedido" id="pedido" type="text" class="form-control" style="visibility: hidden">
                        <div>
                            <input type="button" onclick="atras()" name="retroceder" id="retroceder" value="Retroceder" class="btn btn-secondary btn-lg">
                            <input type="submit" name="enviar" id="enviar" value="Enviar" onclick="validar()"  class="btn btn-primary btn-lg">
                        </div>
                </form>
                    </div>
                </div>
            </div>
    <script src="../Funciones/FinalizarCompra.js"></script>
</body>
</html>