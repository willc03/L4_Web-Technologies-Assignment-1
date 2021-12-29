/*
    Author: Will Corkill
    Name: navigation.js
    Last Accessed: 24/11/2021
    Description: Manipulate the DOM to toggle the menu display
*/
var isVisible = false; // The menu will not be visible by default.
function onMenuMouseDown() 
{
    if (!isVisible)
    {
        document.getElementById('navigation').style.display = "flex";
        // Flexbox is used to allow the space-around content justification to be used.
    }
    else
    {
        document.getElementById('navigation').removeAttribute("style"); /*
        All styling is removed as DOM-based CSS manipulations are placed inline, as opposed to inside the
        external stylesheet. Inline CSS takes priority over external sheets, so this must be removed such
        that the display is not affected by the value when the screen is larger than a mobile device.
        */
    }
    isVisible = !isVisible; // The equivalent of using a NOT gate to flip the value of a Boolean.
}