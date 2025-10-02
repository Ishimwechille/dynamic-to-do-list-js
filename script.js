// ✅ Run after DOM fully loads
document.addEventListener("DOMContentLoaded", () => {
    // ✅ Select DOM elements
    const addButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // ✅ Create addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new task item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // ✅ Removal logic
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append button to task
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // ✅ Attach event listeners
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
