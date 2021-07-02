let list = document.querySelector('.list')
let textArea = document.getElementById('new-item')
let addButton = document.querySelector('.add-item-button')
let allDone = document.querySelector('.all-done-button')
let DeleteAll = document.querySelector('.delete-all-button')

addButton.addEventListener("click", add)
allDone.addEventListener("click", allTasksDone)
DeleteAll.addEventListener("click", deleteAllItems)

function add() {
    list.innerHTML += textArea.value
    console.log(textArea.value)
}

function allTasksDone() {
    list.innerHTML = "";
}

function deleteAllItems() {
    list.innerHTML = "";
}