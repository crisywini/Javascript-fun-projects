const FORM = document.getElementById("form");
const INPUT = document.getElementById("input");
const TODOS = document.getElementById("todos");

const data = JSON.parse(localStorage.getItem('todo'));

if(data){
  data.forEach(todo => {
    addToDo(todo);
  });

}

FORM.addEventListener("submit", (e) =>{
  e.preventDefault();//Cancels the default actions that belongs to the action that is being programming
  addToDo();
});

function addToDo(todo){

  let text = INPUT.value;
  if(todo){
    text = todo.text;
  }

  if(text){
    const TODOE1 = document.createElement("li");

    if(todo&&todo.completed){
        TODOE1.classList.toggle("completed");
    }

    TODOE1.innerText = text;

    TODOE1.addEventListener("click", (e)=>{
      e.preventDefault();
      TODOE1.classList.toggle("completed");
      updateData();
    });

    TODOE1.addEventListener("contextmenu", (e)=>{
      e.preventDefault();
      TODOE1.remove();
      updateData();
    });

    TODOS.appendChild(TODOE1);
    INPUT.value = '';
    updateData();
  }
};
function updateData() {
  const TODOS_TO_SAVE = document.querySelectorAll('li');
  const todos = [];
  TODOS_TO_SAVE.forEach(todo => {
    todos.push({
      text : todo.innerText,
      completed : todo.classList.contains('completed')
    });
  });
  localStorage.setItem("todo", JSON.stringify(todos));
}
