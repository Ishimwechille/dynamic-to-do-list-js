// ✅ Run code after HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // ✅ Select DOM Elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // ✅ Function to add a new task
    function addTask() {
        // Get input value and trim whitespace
        const taskText = taskInput.value.trim();

        // If input is empty, alert user
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // ✅ Create new task item
        const li = document.createElement("li");
        li.textContent = taskText;

        // ✅ Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // ✅ Remove task when button is clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // ✅ Append remove button and task to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // ✅ Clear input field
        taskInput.value = "";
    }

    // ✅ Attach event listeners
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // (Optional) Can call addTask() on DOM load if preloaded tasks exist
    // addTask(); // only if you want an initial task
});
