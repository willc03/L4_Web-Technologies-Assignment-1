/*
    Author: Will Corkill
    Name: loadCart.js
    Last Accessed: 18/12/2021
    Description: Manipulate the DOM to display all products in the cart.
*/
const prices = {Hoodie: "£39.99", Jumper: "£29.99", Tshirt: "£19.99"}
var rowId = 0;
var tableContainer; // A variable made to be updated, as the page needs to be loaded before using document based functions.
function parseValue(localStorageValue) { // Used to split the value up into different elements in an array.
    return localStorageValue.split(',');
}

function removeFromCart(containerId, itemIdentifier) {
    localStorage.removeItem(itemIdentifier);
    const container = document.getElementById(containerId);
    container.remove();
}

function createRow(itemKey, localStorageValue) {
    // Gather all information needed to create the row in the list.
    const productInfo = parseValue(localStorageValue);
    const productType = productInfo[0];
    const productColour = productInfo[1];
    // Create the container for the row
    const rowContainer = document.createElement("div");
    rowContainer.className = "row";
    rowContainer.setAttribute("id", `row${rowId}`)
    // Create item identifier to be presented to the user
    const itemIdentifier = document.createElement("p");
    itemIdentifier.textContent = itemKey.slice(-1);
    rowContainer.appendChild(itemIdentifier);
    // Show the user an image
    const itemImage = document.createElement("img");
    itemImage.src = `../Images/${productType}/${productColour}.jpg`;
    rowContainer.appendChild(itemImage);
    // Show the product name
    const itemName = document.createElement("p");
    itemName.textContent = `${productColour} ${productType}`;
    rowContainer.appendChild(itemName);
    // Show the product price
    const itemPrice = document.createElement("p");
    itemPrice.textContent = `${prices[productType]}`;
    rowContainer.appendChild(itemPrice);
    // Create a remove button
    const removeContainer = document.createElement("div");
    removeContainer.className = "removeContainer";
    rowContainer.appendChild(removeContainer);
    const removeItem = document.createElement("button");
    removeItem.textContent = "Remove";
    removeItem.setAttribute(`onclick` ,`removeFromCart("row${rowId}", "${itemKey}")`);
    removeContainer.appendChild(removeItem);
    // Add the container to the table
    rowId++;
    tableContainer.appendChild(rowContainer);
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