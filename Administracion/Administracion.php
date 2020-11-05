<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include "../Funciones/bootstrap.php"?>
    <link rel="stylesheet" type="text/css" href="../Estilos/Administracion.css">
    <link rel="stylesheet" href="../Estilos/paginaPrincipal.css">
</head>
<body>
    <div class="header">
        <?php include("./header.php") ?>
    </div>
    <?php
        listarFicheros("../Pedidos");
        function listarFicheros($ruta){
            if (is_dir($ruta)){
                $gestor = opendir($ruta);
                echo "<ul>";
                while (($archivo = readdir($gestor)) !== false)  {
                    $ruta_completa = $ruta . "/" . $archivo;
                    if ($archivo != "." && $archivo != ".." && !strpos($archivo, "php")){
                        echo "<li><input class='btn btn-primary' type=button value=$archivo onclick=location.href='../Pedidos/$archivo'></li>";
                    }
                }
                closedir($gestor);
                echo "</ul>";
            } else {
                echo "No es una ruta de directorio valida<br/>";
            }
        }
    ?>
    <div class="footer">
        <?php include("./footer.php") ?>
    </div>
</body>
</html>