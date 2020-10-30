<?php
    $fecha_actual = date("d-m-Y");
    if (isset($_COOKIE['check'])){
            echo "1";
        if(date("d-m-Y",strtotime($fecha_actual."- 1 days"))>=$_COOKIE['check']){
            echo "2";
            header("Location: Menu.php");
        }else{
            echo "3";
            header("Location: error.php");
        }
    }
    else header("Location: Menu.php");
?>