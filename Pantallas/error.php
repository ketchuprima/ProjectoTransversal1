<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>

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