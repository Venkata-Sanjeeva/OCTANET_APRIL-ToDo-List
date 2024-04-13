let todoArray = [];

// Load tasks from localStorage or initialize todoArray if it doesn't exist
if (JSON.parse(localStorage.getItem('list')) === null) {
    todoArray = [];
} else {
    todoArray = JSON.parse(localStorage.getItem('list'));
    display();
}

function todoFun() {
    let task = document.querySelector('#input-ele');
    let taskValue = task.value;
    let dateInputElement = document.querySelector('.date-input-element');
    let dueDate = dateInputElement.value;
    todoArray.push({
        taskName: taskValue,
        dueDate: dueDate
    });
    localStorage.setItem('list', JSON.stringify(todoArray));
    task.value = '';
    dateInputElement.value = '';
    display();
}
function display() {
    let screenStr = '';
    if (todoArray.length === 0) {
        screenStr = "<p>No tasks found.</p>"; // Display a message when no tasks are found
    } else {
        for (let i = 0; i < todoArray.length; i++) {
            let todo = todoArray[i];
            const { taskName, dueDate } = todo;
            let str = `
            <div class='task${i} div-ele'>
                <p id='task${i}-name'>${taskName} ${dueDate}</p>
                <p class='btn-container'> 
                    <button class='completed-btn' onclick='completeTask(${i})'>Completed</button>
                    <button class='delete-btn' onclick='deleteTask(${i})'>Delete</button>
                </p>
            </div>`;
            screenStr += str;
        }
    }
    document.querySelector('.container').innerHTML = screenStr;
}


function completeTask(index) {
    alert("Congratulations! You Have Completed This Task.It Will be Deleted After you click OK!");
    todoArray.splice(index, 1);
    updateLocalStorage();
    display();
    // let cl = document.getElementById(`task${index}-name`);
    // cl.classList.add('completed');  
}

function deleteTask(index) {
    todoArray.splice(index, 1);
    updateLocalStorage();
    display();
}

function updateLocalStorage() {
    localStorage.setItem('list', JSON.stringify(todoArray));
}
