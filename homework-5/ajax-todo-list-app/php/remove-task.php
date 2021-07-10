<?PHP 
    include '../php/database.php';

    $id = $_POST['id'];

    $sql = "DELETE FROM tasks WHERE id='$id'";
    $result = mysqli_query($connection, $sql);

    if ($result) {
        echo 1;
    } else {
        echo 0;
    } 
?>