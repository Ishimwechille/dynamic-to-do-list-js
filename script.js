// Wait for the DOM to fully load before running JS
document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn"); // Add Task button
    const taskInput = document.getElementById("task-input");   // Input field
    const taskList = document.getElementById("task-list");     // UL for tasks

    // Function to add a new task
    function addTask() {
        // Get and trim input value
        const taskText = taskInput.value.trim();

        // If empty, alert and stop
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create <li> element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove <li> when button clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append remove button to <li>
        li.appendChild(removeBtn);

        // Append <li> to task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add task when button clicked
    addButton.addEventListener("click", addTask);

    // Add task when pressing Enter
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
