var taskInput = document.getElementById("new-task"),
    addButton = document.getElementsByTagName("button")[0],
    incompleteTaskHolder = document.getElementById("incomplete-tasks"),
    completedTaskHolder = document.getElementById("completed-tasks");

function createNewTaskElement(taskString) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var editInput = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    editInput.type = "text";
    label.innerHTML = taskString;

    editButton.className = "edit";
    editButton.innerHTML = "Edit";

    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

function addTask() {
    console.log("Add task");
    var listItem = createNewTaskElement(taskInput.value);
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value = "...new task";
}

function editTask() {
    console.log("Edit task");
    var listItem = this.parentNode,
        editInput = listItem.querySelector("input[type=text]"),
        label = listItem.querySelector("label"),
        editMode = listItem.classList.contains("editMode");

    if (editMode) {
        label.innerHTML = editInput.value;
        editInput.focus();
    } else {
        editInput.value = label.innerHTML;
    }

    listItem.classList.toggle("editMode");

    listItem.addEventListener("keyup", function(event) {
        if (event.keyCode == 13) {
            var editButton = listItem.querySelector("button.edit");
            editButton.click();
        }
    });
}

function deleteTask() {
    console.log("Delete task");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}

function taskCompleted() {
    console.log("Complete task");
    var listItem = this.parentNode;
    completedTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

function taskIncomplete() {
    console.log("Incomplete task");
    var listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

function bindTaskEvents(taskListItem, checkBoxEventHandler) {
    var checkBox = taskListItem.querySelector("input[type=checkbox]"),
        editButton = taskListItem.querySelector("button.edit"),
        deleteButton = taskListItem.querySelector("button.delete"),
        label = taskListItem.querySelector("label"),
        input = taskListItem.querySelector("input[type=text]");

    editButton.addEventListener("click", editTask);
    deleteButton.addEventListener("click", deleteTask);
    checkBox.onchange = checkBoxEventHandler;
    label.addEventListener("dblclick", editTask);
    input.addEventListener("dblclick", editTask);
}

taskInput.addEventListener("focus", function() {
    if ( this.value === '...new task' ) {
        this.value = '';
    }
});

taskInput.addEventListener("blur", function() {
    if ( this.value === '' ) {
        this.value = '...new task';
    }
});

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        console.log("Pressed Enter");
        addTask();
    }
});


for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}


for (var i = 0; i < completedTaskHolder.children.length; i++) {
    bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}