display();

let add = document.getElementById("add");

add.addEventListener("click", () => {
  let heading = document.getElementById("todoHeading").value;
  let description = document.getElementById("tododisc").value;

  let data = localStorage.getItem("todo");
  if (!data) {
    localStorage.setItem("todo", JSON.stringify([{heading,description}]));
    display();
  } else {
  let result = JSON.parse(data);
  let arr=[...result,{heading,description}];

  console.log(arr);
  
  localStorage.setItem("todo", JSON.stringify(arr));
    console.log("aman");
    
  display();}
});

function display() {
  
  let data = localStorage.getItem("todo");

  if (!data) {
    return;
  } else {
    let todoList = document.getElementById("todoList");
    let result = JSON.parse(data);

    todoList.innerHTML = "";
    result.map((item,index)=>{
        let div = document.createElement("div");
        
        div.innerHTML = `
        <div class="todo" id=todo${index}>
        <h2>${item.heading}</h2>
        <p>${item.description}</p>
        <button onClick=btnDelete(${index}) >Delete</button>
        </div>
        `;
        todoList.appendChild(div);
    })
    

    return;
  }
}


function btnDelete(index){
  console.log(index);
  let div= document.getElementById(`todo${index}`);
  div.remove();
  let data = localStorage.getItem("todo");
  let result = JSON.parse(data);
  result.splice(index,1);
  localStorage.setItem("todo", JSON.stringify(result));
  display();
  
}