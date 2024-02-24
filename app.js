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
    }
}, false);

function saveData() {
    localStorage.setItem('data', taskList.innerHTML)
} 

function showTask() {
    taskList.innerHTML = localStorage.getItem('data')
}
showTask()