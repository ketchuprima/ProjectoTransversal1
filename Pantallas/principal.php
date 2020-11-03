<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Landing Page</title>
    <link rel="stylesheet" href="../Estilos/Principal.css">
    <link rel="stylesheet" href="../Estilos/pagina.css">
</head>
<body>
    <div class="header">
        <?php include("./header.php") ?>
    </div>
    <div id="layer">
        <img id="fotoInsti" src="../Sources/LogoInstitut.png">
        <div id="lineaCentral">
            <input id="comanda" type="image" onclick="location.href='comprobacio.php'" src="../Sources/LogoPedido.png">
            <input id="lista" type="image" onclick="location.href='../Administracion/Administracion.php'" src="../Sources/LogoLista.png">
        </div>
        <br/>
    </div>
    <div class="footer">
        <?php include("./footer.php") ?>
    </div>
</body>
</html>