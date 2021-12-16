/*
    Author: Will Corkill
    Name: navigation.js
    Last Accessed: 24/11/2021
    Description: Manipulate the DOM to toggle the menu display
*/
  
function onMenuMouseDown() {
    console.log('pressed');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('title').style.color = "#" + randomColor;
}