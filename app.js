const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const todo = document.createElement("li");
  todo.classList.add("todo-item");
  todo.innerText = "mew to do";
  todoDiv.appendChild(todo);

  const completedbutton = document.createElement("button");
  completedbutton.innerHTML = '<i class="fas fa-check"> </i>';
  completedbutton.classList.add = "complete-btn";
  todoDiv.appendChild(completedbutton);
  const unCompletedbutton = document.createElement("button");
  unCompletedbutton.innerHTML = '<i class="fas fa-trash"> </i>';
  unCompletedbutton.classList.add = "uncomplete-btn";
  todoDiv.appendChild(unCompletedbutton);
  todoList.appendChild(todoDiv);
}
