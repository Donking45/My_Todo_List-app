const taskInput = document.getElementById('taskInput');
taskInput.innerHTML = '';

const taskList = document.getElementById('taskList');
taskList.innerHTML = '';

function addTask() {
    if (taskInput.value === '') {
        alert('Write New Task')
    }
    else {
        let li = document.createElement('Li')
        li.innerHTML = taskInput.value
        taskList.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        
        let spanEdit = document.createElement('span');
        spanEdit.innerHTML = '&#9998;'; // Edit icon
        li.appendChild(spanEdit);

        // Attach click event for editing task
        spanEdit.addEventListener('click', function () {
            let updatedTask = prompt('Edit task:', li.innerHTML);
            if (updatedTask !== null) {
                li.innerHTML = updatedTask;
                saveData();
            }
        });
    }
    taskInput.value = ''
    saveData()
}

taskList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === 'SPAN' && e.target.innerHTML === '&#9998;') {
        let updatedTask = prompt('Edit task:', e.target.parentElement.innerHTML);
        if (updatedTask !== null) {
            e.target.parentElement.innerHTML = updatedTask;
            saveData();
        }
    }

}, false);

function saveData() {
    localStorage.setItem('data', taskList.innerHTML)
} 

function showTask() {
    taskList.innerHTML = localStorage.getItem('data')
}
showTask()

