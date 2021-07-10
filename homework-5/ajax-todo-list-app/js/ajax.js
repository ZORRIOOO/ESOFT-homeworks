$(document).ready(function() {

    const load_tasks = () => {
        $.ajax({
            url: '../php/show-tasks.php',
            type: 'POST',
            success: function(data) {
                $('#tasks').html(data);
            }
        });
    }

    load_tasks();

    $('#add_btn').on('click', () => {
        const task = $('#task_value').val();

        $.ajax({
            url: '../php/add-task.php',
            type: 'POST',
            data: {task: task},
            success: function(data) {
                load_tasks();
                if (data == 0) {
                    alert('Что-то пошло не так. Попробуйте снова.');
                }
            }
        });
    });

    $(document).on('click', '#remove_btn', function(e){
        e.preventDefault();
        const id = $(this).data('id');

        $.ajax({
            url: '../php/remove-task.php',
            type: 'POST',
            data: {id: id},
            success: function(data) {
                load_tasks();
                if (data == 0) {
                    alert('Что-то пошло не так. Попробуйте снова.')
                }
            }
        });
    });
}); 