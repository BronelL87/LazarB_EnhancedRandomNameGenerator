 import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localStorage.js";
// Define variables to store the list of names, the number of people per group, and the number of groups.


// Implement functions to add names to the list, delete specific names, pick a random person, and generate random groups.

// Incorporate functionality to store the list of names in localStorage and retrieve it when the page is revisited.

// Ensure error handling and validation for user inputs, such as checking for empty inputs or invalid values.

// Write code to ensure that no groups of one person are formed unintentionally, especially when there's an odd number of people.
let addBtn = document.getElementById("addBtn");
let theNames = document.getElementById("theNames");
let addNameInput = document.getElementById("addNameInput");

let names = "";

// addBtn.addEventListener('click', async () => {
// saveToLocalStorage(addNameInput.value);
// addNameInput.value = "";

// })

