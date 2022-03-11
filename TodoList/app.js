const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

function addTodo(event) {
    event.preventDefault()
    const $div = document.createElement('div')
    $div.classList.add("todo")
    const $li = document.createElement('li')
    $li.classList.add("todo-item")
    $li.innerText = todoInput.value;
    $div.appendChild($li)

    // Check mark button
    const completedButton = document.createElement("button")
    completedButton.innerText = "Completed"
    completedButton.classList.add("complete-btn")
    $div.appendChild(completedButton)

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    deleteButton.classList.add("delete-btn")
    $div.appendChild(deleteButton)

    // Append to List
    todoList.appendChild($div)
    todoInput.value = ''

}

function deleteCheck(event) {
    const item = event.target
    console.log(item)
    // Delete Todo
    if (item.classList[0] === 'delete-btn'){
        const todo = item.parentElement
        todo.remove()
    }
    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    console.log(todos)
    todos.forEach( todo => {
        switch(e.target.value){
            case "all":
                todo.style.display = "flex"
                break
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
                break
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
                break
        }
    })
}