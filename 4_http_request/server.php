<!doctype html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <title>PHP & MariaDB</title>
</head>

<body>
    <?php
    $q = intval($_GET['q']);;
    $jb_connect = mysqli_connect('113.10.19.27:4235', 'jbs', 'jbs4235v', 'db_fmp_laptop');
    ?>
</body>

</html>