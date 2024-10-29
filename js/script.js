'use strict'

const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
const todoData = []
const returnData = function() {
    const returnToDo = {}
    let myData = localStorage.getItem("todoData")
    let returnMyData  = JSON.parse(myData) 
    console.log(returnMyData);
    
    if (returnMyData = null) {
        render()
    } else {
        returnMyData.forEach(function() {
            todoData.push(returnToDo)
        })
        render()
    }
}
returnData()
const render = function() {

    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    todoData.forEach(function(item) {
        const li = document.createElement('li')

        localStorage.setItem("todoData", JSON.stringify(todoData))
        
        li.classList.add('todo-item')
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
        '<div class="todo-buttons">' +
        '<button class="todo-remove"></button>' +
        '<button class="todo-complete"></button>' +
        '</div>'
            if (item.completed) {
                todoCompleted.append(li)
            } else {
                todoList.append(li)
            }
            li.querySelector('.todo-remove').addEventListener('click', function() {
                li.remove()
                todoData.splice(li, 1)
            })
            li.querySelector('.todo-complete').addEventListener('click', function () { 
                item.completed = !item.completed
            render()
         })
    })
}

todoControl.addEventListener('submit', function(event) {
    event.preventDefault()

    const newToDo = {
        text: headerInput.value,
        completed: false
    }
    if (headerInput.value !== '') {
        todoData.push(newToDo)
        headerInput.value = ''
        render()
    } else {
        render()
    }
})