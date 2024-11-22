const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask()
{
    if(inputBox.value.trim() === '')
    {
        alert('You must write something!');
        return;
    }
    else{
        let newTask = document.createElement('li');
        newTask.textContent = inputBox.value;
        listContainer.appendChild(newTask);
        inputBox.value = '';
        let deleteElement = document.createElement("span");
        deleteElement.innerHTML = '\u00D7';
        newTask.appendChild(deleteElement);
    }
    saveData();
}
listContainer.addEventListener('click', function(event){
    if(event.target.tagName === 'LI')
    {
        event.target.classList.toggle('checked');
        saveData()
    }
    else if(event.target.tagName === 'SPAN')
    {

        event.target.parentElement.remove();
        saveData()
    }
});

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTasks();