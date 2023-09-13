    const taskForm = document.getElementById('task-form');
        const taskInput = document.getElementById('task-input');
        const taskList = document.getElementById('task-list');

        function addTask(event) {
            event.preventDefault();
            const taskText = taskInput.value.trim();

            if (taskText !== '') {
                const listItem = document.createElement('li');
                listItem.textContent = taskText;

                listItem.addEventListener('click', () => {
                    listItem.classList.toggle('completed');
                });

                taskList.appendChild(listItem);
                taskInput.value = '';
            }
        }

        taskForm.addEventListener('submit', addTask);