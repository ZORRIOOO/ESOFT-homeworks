<?PHP 
    include '../php/database.php';

    $sql = 'SELECT * FROM tasks';
    $result = mysqli_query($connection, $sql);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {

        ?>
            <li>
                <span class="text"><?PHP echo $row['title']?></span>
                <i id='remove_btn' class="icon fa fa-trash" data-id="<?php echo $row['id']; ?>"></i>
            </li>
        <?PHP

        }
        echo '<div class="pending-text">У вас ' . mysqli_num_rows($result).' не выполненные задачи.</div>';
    } else {
        echo '<li><span class="text">Не найдено ни одной записи.</span></li>';
    }
?>