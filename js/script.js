'use strict'

const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
let todoData
if (localStorage.getItem('todoData')) {
    todoData = JSON.parse(localStorage.getItem('todoData'))
} else {
    todoData = []
}

const setData = function() {
    localStorage.setItem('todoData', JSON.stringify(todoData))
} 
const getData = JSON.parse(localStorage.getItem('todoData'))

const render = function() {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    todoData.forEach(function(item) {
        const li = document.createElement('li')
        console.log(todoData);
        setData()
       
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
                setData()
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

getData.forEach(item => {
    render(item)
})