<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Landing Page</title>
</head>
<body>

    <img src="../Sources/inici.png"/>

    <br/>

    <a href = "Menu.php" id="menu" onclick="menu()">Ir al menu</a>

    <?php include 'footer.php';?>

    <?php
    
        function menu(){
            $fecha_actual = date("d-m-Y");
            if (!isset($_COOKIE['check'])){
                if(date("d-m-Y",strtotime($fecha_actual."- 1 days"))>=$_COOKIE['nom']){
                    header("Location: Menu.php");
                }else{
                    header("Location: error.php");
                }
            }
        }
    ?>


</body>
</html>