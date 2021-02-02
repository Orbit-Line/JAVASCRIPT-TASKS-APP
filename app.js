
document.getElementById('formTask').addEventListener("submit", saveTask);

         /*GUARDAR TAREAS*/
function  saveTask (e) {

    let title = document.getElementById('title').value;      /*recabar datos ELEMENTOs*/
    let description = document.getElementById('description').value;

 const task = {   /*OBJETO*/
    title,
    description
 };
 
 /*localStorage.setItem('tasks', JSON.stringity(task));   /*guardar datos y almacenarlo 2 parametros*/
 /*localStorage.getItem('tasks')         //obtener datos//
 JSON.parse(localStorage.getItem('tasks'))  /* para crear datos objetos js*/
 
 if(localStorage.getItem('tasks') === null) {    
       let tasks = [];
       tasks.push(task);                                      /*CREAR*/
       localStorage.setItem('tasks', JSON.stringify(tasks));

    } else {
      let tasks = JSON.parse(localStorage.getItem('tasks'));   /*ALMACENAR*/
      tasks.push(task);     /*ingresar un dato al arreglo*/                                    /*ACTUALIZAR*/
      localStorage.setItem('tasks', JSON.stringify(tasks));   /*GUARDAR*/
    } 

    getTasks();
    document.getElementById('formTasks').requestFullscreen();
    e.preventDefault()
 }

       /* OBTENER TAREAS*/
  function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');

  tasksView.innerHTML = '';

  for(let i = 0; i < tasks.length; i ++) {
let title = tasks[i].title;
let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card mb-3">
    <div class="card-body">
      <p>${title} - ${description}</p>
     <a class="btn btn-danger" onClick="deleteTask('${title}')">
       Borrar
       </a>
     </div>

  </div>`

  }
  
}

       /*ELIMINAR TAREAS*/
     function deleteTask(title) {
        let tasks = JSON.parse(localStorage.getItem('tasks'));  /*obtuve datos*/
        for(let i = 0; i < tasks.length; i ++) {
          
          if (tasks[i].title == title) {              /*quite datos*/
          tasks.splice(i, 1);    /*QUITAR UNO*/
          }
        }
       localStorage.setItem('tasks', JSON.stringify(tasks));  /*volvi almacenar*/
       getTasks();
     }


getTasks();