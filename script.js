function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button class="delete" onclick="deleteTask(this)">❌</button>`;

    // Add to list
    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    let li = button.parentElement;
    li.remove();
}
