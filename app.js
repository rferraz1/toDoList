const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Adiciona nova tarefa
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTask(taskText);
    taskInput.value = "";
    taskInput.focus();
  }
});

// Permite adicionar tarefa ao pressionar Enter
taskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

function createTask(text) {
  const taskItem = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = text;

  // Marcar como concluída ao clicar no texto
  taskSpan.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Botão de deletar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Excluir";
  deleteBtn.className = "delete";
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}
