<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fichero</title>
</head>
<body>
    <?php

    $fecha = date("d-m-Y");


    if (!file_exists("../Pedidos/$fecha")) {
        $fp = fopen("../Pedidos/$fecha", 'w');
        fclose($fp);
    }

    $sustituto = str_replace(',', "\n", $_POST['pedido']);
    setCookie("check", $fecha);
    $fp = fopen("../Pedidos/$fecha", 'a');
    fwrite($fp, "               PEDIDO              \n");
    fwrite($fp, "------------------------------------\n");
    fwrite($fp, $_POST['nombre']);
    fwrite($fp, "\n");
    fwrite($fp, $_POST['telefono']); 
    fwrite($fp, "\n");
    fwrite($fp, $_POST['correo']);
    fwrite($fp, "\n");
    fwrite($fp, $sustituto . "€");
    fwrite($fp, "\n\n\n");
    fclose($fp);
    ?>
</body>
</html>