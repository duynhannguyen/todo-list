const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
document.addEventListener("DOMContentLoaded", getTodosFromLocalStorage);
function addTodo(e) {
  e.preventDefault();
  if (todoInput.value === "") return;
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const todo = document.createElement("li");
  todo.classList.add("todo-item");
  todo.innerText = todoInput.value;
  todoDiv.appendChild(todo);
  saveToLocalStorage(todoInput.value);
  const completedbutton = document.createElement("button");
  completedbutton.innerHTML = '<i class="fas fa-check"> </i>';
  completedbutton.classList.add("complete-btn");
  todoDiv.appendChild(completedbutton);
  const unCompletedbutton = document.createElement("button");
  unCompletedbutton.innerHTML = '<i class="fas fa-trash"> </i>';
  unCompletedbutton.classList.add("trash-btn");
  todoDiv.appendChild(unCompletedbutton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        console.log("todo", todo.style);
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
function saveToLocalStorage(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosFromLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const Newtodo = document.createElement("li");
    Newtodo.classList.add("todo-item");
    Newtodo.innerText = todo;
    todoDiv.appendChild(Newtodo);
    const completedbutton = document.createElement("button");
    completedbutton.innerHTML = '<i class="fas fa-check"> </i>';
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);
    const unCompletedbutton = document.createElement("button");
    unCompletedbutton.innerHTML = '<i class="fas fa-trash"> </i>';
    unCompletedbutton.classList.add("trash-btn");
    todoDiv.appendChild(unCompletedbutton);
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
