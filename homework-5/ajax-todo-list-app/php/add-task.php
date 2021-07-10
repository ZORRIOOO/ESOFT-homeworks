<?PHP 
    include '../php/database.php';

    $task = $_POST['task'];

    $sql = "INSERT INTO tasks (title) VALUES ('$task')";
    $result = mysqli_query($connection, $sql);

    if ($result) {
        echo 1;
    } else {
        echo 0;
    }
?>