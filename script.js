// ✅ Run only after page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // ✅ Select DOM Elements
    const addButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // ✅ Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // remove extra spaces

        // If input is empty → alert user
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // ✅ Create <li> for the task
        const li = document.createElement("li");
        li.textContent = taskText;

        // ✅ Create "Remove" button
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

        // ✅ Clear input field after adding
        taskInput.value = "";
    }

    // ✅ Add button click event
    addButton.addEventListener("click", addTask);

    // ✅ Add Enter key event
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
