<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>

    <!--<h1>ERROR: Ja has fet una comanda avui</h1>
    <form method="post" action="error.php">
        <input type="submit" name="inici" value="inici"/>
    </form>-->

    <?php
        /*if(isset($_POST['inici'])){
            header("Location: principal.php");
        }*/
    ?>
    
    <link rel="stylesheet" type="text/css" href="../libs/sweetalert/dist/sweetalert2.min.css">
    <script type="text/javascript" src="../libs/sweetalert/dist/sweetalert2.min.js" ></script>
    <script type="text/javascript">
        Swal.fire({
            title: 'Error',
            text: 'Ya has realizado un pedido hoy',
            icon: 'error',
            confirmButtonText: "volver a inicio",
        }).then((result)=>{
            if(result.isConfirmed){
                window.location.href="principal.php";
            }
        })
    </script>

    

</body>
</html>