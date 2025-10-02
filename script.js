document.addEventListener("DOMContentLoaded", () => {
    // ✅ Select DOM Elements
    const addButton = document.getElementById("add-task"); // matches HTML button ID
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // ✅ Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // get input and trim spaces

        if (taskText === "") { // check for empty input
            alert("Please enter a task!");
            return;
        }

        // ✅ Create task item
        const li = document.createElement("li");
        li.textContent = taskText;

        // ✅ Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // ✅ Remove task on click
        removeBtn.onclick = () => taskList.removeChild(li);

        // ✅ Append remove button to li, then li to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // ✅ Clear input field
        taskInput.value = "";
    }

    // ✅ Attach event listeners
    addButton.addEventListener("click", addTask); // click button
    taskInput.addEventListener("keypress", (event) => { // enter key
        if (event.key === "Enter") addTask();
    });
});
