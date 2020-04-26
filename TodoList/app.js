
//selector
const todoInputs  = document.querySelector(".todo-inputs");
const todobtn  = document.querySelector(".todo-btn");
const todoList  = document.querySelector(".todo-list");


//event

todobtn.addEventListener("click",addTodo);
todoList.addEventListener("click",dltchck);

//function
function addTodo(){
  //prevent form from submitting;
  event.preventDefault();

  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText =todoInputs.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //checkmark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //delete button
  const dltButton = document.createElement("button");
  dltButton.innerHTML = '<i class="fas fa-trash"></i>';
  dltButton.classList.add("delete-btn");
  todoDiv.appendChild(dltButton);

  //append to list
  todoList.appendChild(todoDiv);
  //clear inputs
  todoInputs.value = "";
}

function dltchck(e){
  const item = e.target;
  console.log(item);
  //dlt todo
  if (item.classList[0] === "delete-btn") {
      const todo = item.parentElement;
      todo.remove();
  }

  //chck todo
  if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
  }
}
