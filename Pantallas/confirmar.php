<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fichero</title>
</head>
<body>
    <?php

    date_default_timezone_set('Etc/UTC');

    require "../libs/PHPMailer-5.2-stable/PHPMailerAutoload.php";
    $mail = new PHPMailer;
    
    $mail->IsSMTP();
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = 'html';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
    $mail->Username = "miqserjoe@inspedralbes.cat";
    $mail->Password = "ausias12";
    


    $mail->setFrom("miqserjoe@gmail.com", "MiqSerJoe"); //remitente
    $mail->addAddress($_POST["correo"]);
    $mail->Subject = $_POST["nombre"];
    $mail->Body = "Su pedido ha sido recibido";

    $mail -> isHTML(true);

    if ($mail->Send()) {
        echo'<script type="text/javascript">
            alert("Enviado Correctamente");
            </script>';
        
    } else {
        echo'<script type="text/javascript">
            alert("NO ENVIADO, intentar de nuevo");
            </script>';
    }

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