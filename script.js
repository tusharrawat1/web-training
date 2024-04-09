let tasks = [];

const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML=''

    taskList.foreach(()=>{

    const li = document.createElement('li');
    li.textContent = task.name;
    const btn document.createElement('button');
    btn.innerHTML='<div>delete</div>';
    btn.className='delete-button';

    li.appendChild(btn)
    taskList.appendChild(li);
    renderTasks();
    })
}

const addtask = ()=> {
    const name = document.getElementById('taskInput');
    if(name!==''){
        const task = {
            name:name.value,
            date:Date{}
        }
        tasks.push(task);
    }
        
        
    
