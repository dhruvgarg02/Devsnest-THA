let list = document.querySelector('.list');
let textArea = document.getElementById('new-item');
let addButton = document.querySelector('.add-item-button');
let allDone = document.querySelector('.all-done-button');
let DeleteAll = document.querySelector('.delete-all-button');

listItems = JSON.parse(localStorage.getItem('listitems'));
if (listItems === null) listItems = [];
doneOrNot = JSON.parse(localStorage.getItem('doneornot'));
if (doneOrNot === null) doneOrNot = [];

addButton.addEventListener("click", add);
document.addEventListener("keydown", addEnter);
allDone.addEventListener("click", allTasksDone);
DeleteAll.addEventListener("click", deleteAllItems);

function deleteitem() {
    listItems.splice(this.id, 1);
    doneOrNot.splice(this.id, 1);
    localStorage.setItem('listitems', JSON.stringify(listItems));
    localStorage.setItem('doneornot', JSON.stringify(doneOrNot));
    showList();
}

function taskDone() {
    if (doneOrNot[this.id] === "1") {
        doneOrNot[this.id] = "0";
        this.classList.remove('strike-through')
    } else {
        doneOrNot[this.id] = "1";
        this.classList.add('strike-through')
    }
    localStorage.setItem('doneornot', JSON.stringify(doneOrNot))
    showList()
}

function showList() {
    list.innerHTML = "";
    for (i in listItems) {
        let deleteButton = document.createElement('div');
        deleteButton.id = i;
        deleteButton.classList.add("delete-item-button")
        let item = document.createElement('span')
        item.id = i;
        item.classList.add("item");
        item.innerHTML = listItems[i];
        if (doneOrNot[i] === "0") {
            item.classList.remove('strike-through')
        } else {
            item.classList.add('strike-through')
        }
        list.append(item);
        list.append(deleteButton)
        list.append(document.createElement('br'))
        item.addEventListener("click", taskDone)
        deleteButton.addEventListener("click", deleteitem)
    }
}

function addEnter(key) {
    if (key.keyCode === 13) {
        listItems.push(textArea.value);
        doneOrNot.push("0");
        textArea.value = null;
        localStorage.setItem('listitems', JSON.stringify(listItems))
        localStorage.setItem('doneornot', JSON.stringify(doneOrNot))

        showList();
    }
}

function add() {
    if (!textArea.value) return;
    listItems.push(textArea.value);
    doneOrNot.push("0");
    textArea.value = null;
    localStorage.setItem('listitems', JSON.stringify(listItems))
    localStorage.setItem('doneornot', JSON.stringify(doneOrNot))

    showList();
}

function allTasksDone() {
    for (let i in doneOrNot) {
        doneOrNot[i] = "1";
    }
    localStorage.setItem('doneornot', JSON.stringify(doneOrNot))

    showList();
}

function deleteAllItems() {
    listItems.splice(0, listItems.length)
    doneOrNot.splice(0, doneOrNot.length)
    localStorage.setItem('listitems', JSON.stringify(listItems))
    localStorage.setItem('doneornot', JSON.stringify(doneOrNot))

    showList();
}

showList()