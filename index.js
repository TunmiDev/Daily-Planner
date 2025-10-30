const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const msg = document.getElementById("msg");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    msg.textContent = "Please enter a task.";
    return;
  }

  // Clear message and input
  msg.textContent = "";
  taskInput.value = "";

  // Create a new list item for the task
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");

  // When delete button is clicked, remove the task
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  // Add delete button to task item
  taskItem.appendChild(deleteBtn);

  // Add task item to the list
  taskList.appendChild(taskItem);
});
