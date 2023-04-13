'use strict';

// Global Variables
const inputBox = document.querySelector('.inputBox');
const submitBtn = document.querySelector('.submitBtn');
const tasks = document.querySelector('.tasks');

// A blank array to hold onto the to-do items
const toDoItems = [];




const addItem = function () {
    const inputBoxValue = inputBox.value

    // Checks to see if a value has been inputted
    if (inputBoxValue !== '') {

        // Create a new to-do item and add it to the array
        const toDo = {
            text: inputBoxValue,
            completed: false
        };

        // Push the to-do items to the toDoItems array to be posted
        toDoItems.push(toDo);

        // Add a new HTML item in the form of a list (li) when
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
addItem();