'use strict';

// Global Variables
const toDoContainer = document.querySelector('.toDoContainer');
const inputBox = document.querySelector('.inputBox');
const submitBtn = document.querySelector('.submitBtn');
const resetBtn = document.querySelector('.resetBtn');
const tasks = document.querySelector('.tasks');

// A blank array to hold onto the to-do items
let toDoItems = JSON.parse(localStorage.getItem('toDoItems')) || [];
console.log(toDoItems);

// Getting local storgae to the to-do list
if (localStorage.getItem('toDoItems')) {
    const storedToDoItems = JSON.parse(localStorage.getItem('toDoItems'));
    if (Array.isArray(storedToDoItems)) {
        toDoItems = storedToDoItems;
        toDoItems.forEach((toDoItem) => {
            const newToDoEl = document.createElement('li');
            newToDoEl.innerText = toDoItem.text;
            tasks.appendChild(newToDoEl);
        });
    }
}

// Get's the current date
const date = new Date();

const addItem = function () {
    const inputBoxValue = inputBox.value.trim();

    // Checks to see if a value has been inputted
    if (inputBoxValue !== '') {

        // Create a new to-do item and add it to the array
        const toDo = {
            text: inputBoxValue,
            completed: false
        };

        // Push the to-do items to the toDoItems array to be posted
        toDoItems.push(toDo);

        settingLocalStorage();

        // Add a new HTML item in the form of a list(li) when
        // the "Submit" button has been pressed
        const newToDoEl = document.createElement('li');
        newToDoEl.innerText = inputBoxValue;
        tasks.appendChild(newToDoEl);
    }

    // If the entry is empty do not post this to-do item
    if (inputBoxValue == '') {
        return
    }
}

// Setting local storage for the to-do list
submitBtn.addEventListener('click', addItem);

// Resets the list of all entries
resetBtn.addEventListener('click', function () {
    localStorage.clear();
    location.reload();
});

// Setting the local storage
const settingLocalStorage = function () {
    localStorage.setItem('toDoItems', JSON.stringify(toDoItems));
}
