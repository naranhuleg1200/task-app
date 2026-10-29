const button = document.querySelector(".button");
const inputField = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const countElement = document.querySelector(".count");

function updateTaskCount() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let count = 0;

    checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
        count++;
        }
    });
    countElement.textContent = count;
}

button.addEventListener('click', () => {
if (inputField.value.trim() !== '') {
    const task = document.createElement('p');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const taskName = document.createElement('span');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    task.appendChild(checkbox);
    task.appendChild(taskName);
    task.appendChild(deleteButton);
    taskName.textContent = inputField.value;
    taskList.appendChild(task);
    inputField.value = '';
    updateTaskCount();

    checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        taskName.style.textDecoration = 'line-through';
        }
         else {
        taskName.style.textDecoration = 'none';
        }

        updateTaskCount();
    });

    deleteButton.addEventListener('click', () => {
        task.remove();
        updateTaskCount();
    });

}
});

