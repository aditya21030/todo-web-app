const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
clearBtn.addEventListener('click', clearTasks);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => editTask(span, editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => li.remove();

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);

    taskInput.value = '';
}

function editTask(span, editBtn) {
    if (editBtn.textContent === 'Edit') {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        input.className = 'task-text';
        span.replaceWith(input);
        editBtn.textContent = 'Save';
        editBtn.classList.remove('edit');
        editBtn.classList.add('save');
    } else {
        const input = document.querySelector('.task-text');
        if (input.value.trim() === '') {
            alert('Task cannot be empty!');
            return;
        }
        const newSpan = document.createElement('span');
        newSpan.className = 'task-text';
        newSpan.textContent = input.value;
        input.replaceWith(newSpan);
        editBtn.textContent = 'Edit';
        editBtn.classList.remove('save');
        editBtn.classList.add('edit');
    }
}

function clearTasks() {
    if (confirm('Are you sure you want to clear all tasks?')) {
        taskList.innerHTML = '';
    }
}
