//your code here

var todo=document.getElementById("newTodoInput");
var btn=document.getElementById("addTodoBtn");
var ol=document.getElementById("todoList");

function addTodo(){
	 
	if(todo.value){
		var li=document.createElement("li");
		li.textContent=todo.value;
		ol.appendChild(li);
		todo.value="";
	}
}

btn.addEventListener('click',addTodo);