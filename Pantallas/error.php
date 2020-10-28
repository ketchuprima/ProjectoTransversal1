<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <h1>ERROR: Ja has fet una comanda avui</h1>
    <form method="post" action="error.php">
        <input type="submit" name="inici" value="inici"/>
    </form>

    <?php
        if(isset($_POST['inici'])){
            header("Location: principal.php");
        }
    ?>

</body>
</html>