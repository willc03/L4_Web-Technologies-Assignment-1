/*
    Author: Will Corkill
    Name: loadCart.js
    Last Accessed: 18/12/2021
    Description: Manipulate the DOM to display all products in the cart.
*/
var tableContainer; // A variable made to be updated, as the page needs to be loaded before using document based functions.
function parseValue(localStorageValue) { // Used to split the value up into different elements in an array.
    return localStorageValue.split(',');
}

function createRow(itemKey, localStorageValue) {
    // Gather all information needed to create the row in the list.
    const productInfo = parseValue(localStorageValue);
    const productType = productInfo[0];
    const productColour = productInfo[1];
}

window.onload = function() {
    tableContainer = document.getElementById("table");
    const storageKeys = Object.keys(localStorage);
    for (const key in storageKeys) {
        const itemKey = storageKeys[key];
        const itemValue = localStorage.getItem(itemKey);
        createRow(itemKey, itemValue);
    }
};