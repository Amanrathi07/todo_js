displayTodo();

document.getElementById("addBtn").addEventListener("click", () => {
  let input = document.getElementById("inputTodo");

  if (input.value === "") {
    alert("Please enter a todo");
    return;
  } else {
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    data.push(input.value);
    localStorage.setItem("todos", JSON.stringify(data));
    displayTodo();
    input.value = "";
  }
});

function deletTodo(index) {
  let data = JSON.parse(localStorage.getItem("todos")) || [];
  data.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(data));
  displayTodo();
}

function displayTodo() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  let myNode = document.getElementById("showTodo");

  myNode.innerHTML = "";
  todos.map((todo, index) => {
    let div = document.createElement("div");
    div.className = "singelTodo";
    div.id = `box${index}`;
    div.innerHTML = `
    <h3>${index + 1}</h3>
    <h2>${todo}</h2>
    <input type="checkbox" class="inputCheck">
    <button onclick=deletTodo(${index}) >delete</button>
    `;
    myNode.appendChild(div);
  });
}


function checkBox(index){
  let box=document.getElementById(`inputCheck${index}`).value;
  console.log(box);
  
}