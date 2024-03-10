document.addEventListener("DOMContentLoaded", function() {
    // Check for saved tasks in localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Display existing tasks
    const taskList = document.getElementById("taskList");
    displayTasks(tasks, taskList);

    // Function to add a task
    window.addTask = function() {
        const taskInput = document.getElementById("taskInput");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            tasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            displayTasks(tasks, taskList); // Save data after updating tasks
            saveData(taskList);
        }
    };

    // Function to delete a task
    window.deleteTask = function(index) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks(tasks, taskList); // Save data after updating tasks
        saveData(taskList);
    };

    // Function to update a task
    window.updateTask = function(index) {
        const updatedText = prompt("Update task:", tasks[index]);
        if (updatedText !== null) {
            tasks[index] = updatedText.trim();
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks(tasks, taskList); // Save data after updating tasks
            saveData(taskList);
        }
    };

});

function displayTasks(tasks, taskList) {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
            <button onclick="updateTask(${index})">Update</button>
        `;
        taskList.appendChild(li);
    });
}


function saveData(taskList) {
    localStorage.setItem('data', taskList.innerHTML);
}

function showTask(taskList) {
    taskList.innerHTML = localStorage.getItem('data');
}
