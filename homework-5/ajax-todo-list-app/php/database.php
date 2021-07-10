<?PHP 
    $server = 'localhost';
    $username = 'root';
    $password = 'root';
    $database = 'todo-app';

    $connection = mysqli_connect($server, $username, $password, $database);
    
    if (!$connection) {
        die('<script>alert("Соединение отсутствует!")</script>');
    }
?>