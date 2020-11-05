<?php
    $fecha_actual = strtotime(date("d-m-Y"));
    $fecha_pedido = strtotime(date($_COOKIE['check']));
    echo $fecha_pedido;
    if (isset($_COOKIE['check'])){
            echo "1";
        if($fecha_actual>$fecha_pedido){
            echo "2";
            header("Location: Menu.php");
        }else{
            echo "3";
            header("Location: error.php");
        }
    }
    else header("Location: Menu.php");
?>