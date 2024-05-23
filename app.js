function addTodo() {
    var todoInput = document.getElementById('todo-input');
    var todoText = todoInput.value.trim();
    if (todoText) {
        var listItem = document.createElement('li');
        listItem.className = 'todo-item';
        var label = document.createElement('label');
        label.textContent = todoText;
        listItem.appendChild(label);
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () { editTodoItem(label); };
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () { deleteTodoItem(listItem); };
        var buttonContainer = document.createElement('div');
        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);
        listItem.appendChild(buttonContainer);
        document.getElementById('todo-list').appendChild(listItem);
        todoInput.value = '';
    }
}

function editTodoItem(label) {
    var newText = prompt('Edit task:', label.textContent);
    if (newText !== null && newText.trim() !== '') {
        label.textContent = newText.trim();
    }
}

function deleteTodoItem(listItem) {
    listItem.parentNode.removeChild(listItem);
}

function deleteAll() {
    document.getElementById('todo-list').innerHTML = '';
}
