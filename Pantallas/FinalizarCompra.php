<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div id="pedidoFinal">
        <ul id="listaFinal"></ul>
    </div>
    <form action="Prueba.php" method="post" name="factura" id="factura">
        <div>
            <label for="nombre" class="label">Nombre</label>
            <input name="nombre" type="text" id="nombre">
            <span id="errornombre"></span>
        </div>
        <div>
            <label for="telefono" class="label">Teléfono</label>
            <input name="telefono" type="text" id="telefono" onkeyup="numeroCorrecto()">
            <span id="errortelefono"></span>
        </div>
        <div>
            <label for="correo" class="label">Correo electrónico</label>
            <input name="correo" type="text" id="correo" onkeyup="validarEmail()">
            <span id="errorcorreo"></span>
        </div>
        <div>
            <input type="button" onclick="atras()" name="retroceder" id="retroceder" value="Retroceder">
            <input type="submit" name="enviar" id="enviar" value="Enviar" onclick="validar()">
        </div>
    </form>
    <script src="../Funciones/CompFormularioCompra.js"></script>
</body>
</html>