document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskDatetime = document.getElementById("task-datetime");
  const taskList = document.getElementById("task-list");

  // Add task
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    const taskDateTime = taskDatetime.value;

    if (!taskText) return;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span>
        ${taskText} ${taskDateTime ? `- <small>${taskDateTime}</small>` : ""}
      </span>
      <div class="task-actions">
        <button class="complete">Complete</button>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
    taskList.appendChild(taskItem);

    taskInput.value = "";
    taskDatetime.value = "";
  });

  // Handle task actions
  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      e.target.closest("li").remove();
    } else if (e.target.classList.contains("complete")) {
      e.target.closest("li").classList.toggle("completed");
    } else if (e.target.classList.contains("edit")) {
      const taskItem = e.target.closest("li");
      const span = taskItem.querySelector("span");
      const [taskText] = span.innerHTML.split(" - ");
      taskInput.value = taskText.trim();
      taskDatetime.value = "";
      taskItem.remove();
    }
  });
});
