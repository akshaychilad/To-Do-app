const todoList = []
const completedList = [];

// Deletes x
function deleteItem (arg){
    const index = todoList.indexOf(arg)
    const indexOfCompleted = todoList.indexOf(arg)
    todoList.splice(index, 1);
    completedList.splice(indexOfCompleted, 1)
    displayItems()

}

// Completion of TODO
const markChecked = (itemName) => {
    const index = todoList.indexOf(itemName) 
    const indexOfCompleted = completedList.indexOf(itemName)
    if(indexOfCompleted < 0) {
    completedList.push(itemName)
    displayItems()
    }
}

// Add new TODO Task
function addItemToList() {
    const itemListView = document.getElementById('itemList')
    const itemName = itemListView.value
    const isDuplicate = todoList.indexOf(itemName)
    if(isDuplicate > -1 || itemName === '') {
        alert("Please Enter new task")
    } else {
        todoList.push(itemName)
        displayItems()
    }
    itemListView.value = ''
}

// Change header based on list of items
function displayHeader() {
    const elementHeader = document.getElementById('header-task')
    if(!todoList.length) {
        elementHeader.innerHTML = 'Please add your entries'
    } else {
        elementHeader.innerHTML = 'List of TODO Tasks'
    }
}


// List of TODO List
function displayItems() {
    displayHeader()
    document.getElementById("displayList").innerHTML = '';
    todoList.forEach((itemName) =>{
    const index = completedList.indexOf(itemName)
    const className = index > -1 ? 'checked' : 'unChecked'
    var listItem = document.createElement('li');
    const closeText = 'x'
    listItem.className = "list-group-item";
    listItem.innerHTML = `<span class="span-item"> <a id='${itemName}' class='${className}' onclick="markChecked('${itemName}')">${itemName} </a> <a class='close-icon' onclick="deleteItem('${itemName}')">${closeText}</a> </span>`
    document.getElementById("displayList").appendChild(listItem);
})
}
  

