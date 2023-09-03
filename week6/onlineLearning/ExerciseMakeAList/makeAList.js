const taskForm = document.getElementById('task-form');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const startDateTimeInput = document.getElementById('start-date-time');
const endDateTimeInput = document.getElementById('end-date-time');
const taskList = document.getElementById('task-list');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function createTask(name, description, startDateTime, endDateTime) {
  return {
    name,
    description,
    startDateTime,
    endDateTime,
    isCompleted: false,
  };
}


function displayTasks() {
  taskList.innerHTML = '';


  tasks.sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime));

  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

   
    const currentDate = new Date();
    const endDate = new Date(task.endDateTime);
    if (endDate < currentDate && !task.isCompleted) {
      taskElement.classList.add('overdue');
    }


    if (task.isCompleted) {
      taskElement.classList.add('completed');
    }

    taskElement.innerHTML = `
      <h3>${task.name}</h3>
      <p>Start Date: ${task.startDateTime}</p>
      <p>Days Left: ${calculateDaysLeft(task.startDateTime, task.endDateTime)}</p>
      <button class="edit-button">Edit</button>
      <button class="delete-button">X</button>
      <div class="description">${task.description}</div>
    `;


    taskElement.querySelector('.edit-button').addEventListener('click', () => {
      taskElement.querySelector('.description').classList.toggle('show');
    });


    taskElement.addEventListener('click', () => {
      task.isCompleted = !task.isCompleted;
      displayTasks();
      saveTasks();
    });


    taskElement.querySelector('.delete-button').addEventListener('click', () => {
      if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(t => t !== task);
        displayTasks();
        saveTasks();
      }
    });

    taskList.appendChild(taskElement);
  });
}


function calculateDaysLeft(startDateTime, endDateTime) {
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);
  const currentDate = new Date();
  const daysLeft = Math.max(0, Math.ceil((endDate - currentDate) / (24 * 60 * 60 * 1000)));
  return daysLeft;
}


taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const description = descriptionInput.value;
  const startDateTime = startDateTimeInput.value;
  const endDateTime = endDateTimeInput.value;

  const task = createTask(name, description, startDateTime, endDateTime);
  tasks.push(task);

  saveTasks();
  displayTasks();

 
  nameInput.value = '';
  descriptionInput.value = '';
  startDateTimeInput.value = '';
  endDateTimeInput.value = '';
});


displayTasks();