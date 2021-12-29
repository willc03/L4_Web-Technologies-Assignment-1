/*
    Author: Will Corkill
    Name: loadProducts.js
    Last Accessed: 17/12/2021
    Description: Manipulate the DOM to display all products in divs.
*/
// A collection of JavaScript "Objects" are used to store information based on the provided CSV list
const products = {
    Hoodie: {
        description: "cotton authentic character and practicality are combined in this comfy warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99",
        colors: [
            "Allure Blue",
            "Atlantic",
            "Black Melangee",
            "Black",
            "Blush Pink",
            "Bordeaux",
            "Bottle Green",
            "Caribbean Blue",
            "Cerisee",
            "Coral Rose",
            "Dusty Black",
            "Dusty Grey",
            "Dusty Red",
            "Flint Grey",
            "Graphite",
            "Grey Melange",
            "Gumdrop Green",
            "Honeysuckle",
            "Insignia Blue",
            "Lava",
            "Lisa",
            "Maroon",
            "Midnight Blue",
            "Midnight",
            "Mustard",
            "Not White",
            "Peapod",
            "Sage",
            "Stone Blue",
            "Vintage Royal"
        ]
    },
    Jumper: {
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99",
        colors: [
            "Antique Cherry Red",
            "Antique Sapphire",
            "Ash",
            "Azalea",
            "Black",
            "Carolina Blue",
            "Charcoal",
            "Cherry Red",
            "Dark Chocolate",
            "Forest Green",
            "Garnet",
            "Gold",
            "Heather Sport Dark Green",
            "Heather Sport Dark Maroon",
            "Heather Sport Dark Navy",
            "Heather Sport Graphite",
            "Heather Sport Royal",
            "Heather Sport Scarlet Red",
            "Heliconia",
            "Indigo Blue",
            "Irish Green",
            "Legion Blue",
            "Light Blue",
            "Light Pink",
            "Maroon",
            "Military Green",
            "Mint Green",
            "Navy",
            "Old Gold",
            "Orange",
            "Orchid",
            "Paprika",
            "Plum",
            "Purple",
            "Red",
            "Royal",
            "Sand",
            "Sapphire",
            "Sports Grey",
            "Violet"
        ]
    },
    Tshirt: {
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99",
        colors: [
            "Antique Cherry Red",
            "Antique Heliconia",
            "Antique Sapphire",
            "Black",
            "Cardinal Red",
            "Charcoal",
            "Cherry Red",
            "Cheshnut",
            "Cobalt",
            "Daisy",
            "Dark Chocolate",
            "Dark Heather",
            "Forest Green",
            "Heather Irish Green",
            "Heather Military Green",
            "Heather Navy",
            "Heather Orange",
            "Heather Purple",
            "Heather Royal",
            "Heliconia",
            "Irish Green",
            "Kiwi",
            "Light Blue",
            "Maroon",
            "Military Green",
            "Navy",
            "Orange",
            "Purple",
            "Red",
            "Royal",
            "Sand",
            "Sapphire",
            "White"
        ]
    }
}

function generateProductDiv(productContainer, productType, productColour, showReadMore) {
    // Create a div to store the product information in
    var productDiv = document.createElement("div");
    productDiv.setAttribute("class", "productContainer");
    // Create an image tag to show the corresponding image for the colour
    var productImage = document.createElement("img");
    productImage.src = `../Images/${productType}/${productColour}.jpg`;
    productDiv.appendChild(productImage);
    // Add a heading for the product type
    var productTypeHeading = document.createElement("h2");
    productTypeHeading.textContent = productType;
    productDiv.appendChild(productTypeHeading);
    // Add a heading for the product colour
    var productColourHeading = document.createElement("h2");
    productColourHeading.textContent = productColour;
    productDiv.appendChild(productColourHeading);
    // Add a paragraph to contain the description
    var productDescription = document.createElement("p");
    productDescription.setAttribute("class", "productDescription");
    productDescription.textContent = products[productType].description;
    productDiv.appendChild(productDescription);
    // Add an anchor tag to 'read more' about the item
    if (showReadMore) {
        var productReadMore = document.createElement("a");
        productReadMore.innerHTML = "Read more...";
        productReadMore.href = "./item.html";
        productReadMore.setAttribute("onclick", `readMore("${productType}", "${productColour}")`);
        productReadMore.setAttribute("class", "new_line");
        productDiv.appendChild(productReadMore);
    }
    // Add a strong tag to emphasise the price of the item
    var productPrice = document.createElement("strong");
    productPrice.setAttribute("class", "productPrice");
    productPrice.textContent = products[productType].price;
    productDiv.appendChild(productPrice);
    // Add a button to add the product to the cart
    var purchaseButton = document.createElement("input");
    purchaseButton.type = "button";
    purchaseButton.value = "Buy";
    purchaseButton.className = "purchaseButton";
    purchaseButton.setAttribute("onclick", `addToCart("${productType}", "${productColour}")`); // Temporarily use readMore here instead of addToCart
    productDiv.appendChild(purchaseButton);
    // Place the div on the page
    productContainer.appendChild(productDiv);
}

function readMore(productType, productColour) { // Function to allow the user to access item.html through a read more button.
    sessionStorage.setItem(`UCLAN_STORE_PRODUCT_TYPE`, productType);
    sessionStorage.setItem(`UCLAN_STORE_PRODUCT_COLOUR`, productColour);
    window.location.href = `../Pages/item.html`;
}
function addToCart(productType, productColour) {
    // Function to be written for adding to the cart
    const numberOfKeys = Object.keys(localStorage).length;
    localStorage.setItem(`item${numberOfKeys}`, `${productType},${productColour}`);
    alert(`${productColour} ${productType} has been added to your cart.`);
}

window.onload = function() {
    /*
    The script will be used on multiple pages,  the start behaviour will
    be  different  on  the  products  and item pages, so an if statement
    will  be  used  to  change  the  behaviour based on the page's name.
    */
    var currentPageName = location.href.split("/").slice(-1);
    if (currentPageName[0].search("products.html") != -1)
    {
        for (const productType in products) {
            products[productType].colors.forEach(function(colour) {
                const productContainer = document.getElementById(productType);
                generateProductDiv(productContainer, productType, colour, true);
            });
        };
    }
    else
    {
        const productContainer = document.getElementById("main");
        generateProductDiv(productContainer, sessionStorage.getItem("UCLAN_STORE_PRODUCT_TYPE"), sessionStorage.getItem("UCLAN_STORE_PRODUCT_COLOUR"), false);
    }
};