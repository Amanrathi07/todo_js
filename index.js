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
        let li = document.createElement("li");
        li.innerHTML = `
        <div index=${index}>
        <h2>${item.heading}</h2>
        <p>${item.description}</p>
        <button onclick="deleteBtn(index)">Delete</button>
        </div>
        `;
        todoList.appendChild(li);
    })
    

    return;
  }
}


function deleteBtn(index){
    console.log(index);
} 
