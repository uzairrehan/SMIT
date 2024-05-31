// to do without array

let todoInput = document.querySelectorAll(".new-todo")[0];
let todoListDiv = document.querySelectorAll(".todo-list")[0];
function add() {
  let todoVal = todoInput.value;
  printAllTodos(todoVal);
  todoInput.value = "";
}

function printAllTodos(newTodoText) {
  let newTodoList = makeTodoListEl(newTodoText);
  todoListDiv.appendChild(newTodoList);
}

function makeTodoListEl(newTodoText) {
  let pEl = document.createElement("P");
  let textNode = document.createTextNode(newTodoText);
  pEl.appendChild(textNode);

  let delBtn = document.createElement("BUTTON");
  let delText = document.createTextNode("Delete");
  delBtn.appendChild(delText);
  delBtn.setAttribute("onclick", "deleteTodo(this)");

  pEl.appendChild(delBtn);

  return pEl;
}

function deleteTodo(pEl) {
    console.log(pEl);
}