'use strict';

// Global Variables
const inputBox = document.querySelector('.inputBox');
const submitBtn = document.querySelector('.submitBtn');
const tasks = document.querySelector('.tasks');

const toDoItems = [];

submitBtn.addEventListener('click', function () {
    console.log(`hello`);
})

const noTasks = function () {
    if (!toDoItems) {
        document.getElementsByClassName('.tasks').style.display = "none";
    }
}