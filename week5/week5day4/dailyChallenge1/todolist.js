const tasks = [];
let taskIdCounter = 0;

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const listTasks = document.querySelector(".listTasks");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const task = {
        task_id: taskIdCounter++,
        text: taskText,
        done: false
    };

    tasks.push(task);
    updateTasksInDOM();

    taskInput.focus();
}

function updateTasksInDOM() {
    listTasks.innerHTML = "";
    
    tasks.forEach(function(task) {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", function() {
            task.done = this.checked;
            updateTasksInDOM();
        });
        
        const taskLabel = document.createElement("label");
        taskLabel.textContent = task.text;
        taskLabel.style.textDecoration = task.done ? "line-through" : "none";
        
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            tasks.splice(tasks.findIndex(item => item.task_id === task.task_id), 1);
            updateTasksInDOM();
        });

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskLabel);
        taskDiv.appendChild(deleteButton);

        listTasks.appendChild(taskDiv);
    });
}