// script.js
// Persists tasks to localStorage, loads them on start, and updates on add/remove.

document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // In-memory tasks array (keeps in sync with localStorage)
    let tasks = [];

    // Save current tasks array to localStorage
    function saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Add a task to the DOM and optionally save it.
    // If taskTextParam is null, read from input (user action).
    // If save === true, push into tasks array and persist.
    function addTask(taskTextParam = null, save = true) {
        const taskText = taskTextParam !== null ? taskTextParam : taskInput.value.trim();

        // If user attempted to add an empty task, show alert (don't alert when loading).
        if (taskText === "") {
            if (taskTextParam === null) alert("Please enter a task!");
            return;
        }

        // Create <li> with a text span and a remove button
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;
        li.appendChild(span);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn"); // using classList.add as required

        // Remove handler: remove from DOM and from tasks array (by index), then persist
        removeBtn.addEventListener("click", () => {
            // Find index of this <li> among siblings to match tasks array order
            const liArray = Array.from(taskList.children);
            const index = liArray.indexOf(li);

            if (index > -1) {
                // Remove from DOM
                taskList.removeChild(li);

                // Remove from tasks array and persist
                tasks.splice(index, 1);
                saveTasksToLocalStorage();
            }
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // If this addition should be saved, update tasks array and persist
        if (save) {
            tasks.push(taskText);
            saveTasksToLocalStorage();
        }

        // Clear input only when user added (not when loading)
        if (taskTextParam === null) {
            taskInput.value = "";
        }
    }

    // Load tasks from localStorage and render them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks = storedTasks; // set in-memory array to stored list
        tasks.forEach(task => addTask(task, false)); // addTask(..., false) won't save again
    }

    // Attach listeners (inside DOMContentLoaded)
    addButton.addEventListener("click", () => addTask());
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") addTask();
    });

    // Initialize
    loadTasks();
});
