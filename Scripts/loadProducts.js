/*
    Author: Will Corkill
    Name: navigation.js
    Last Accessed: 24/11/2021
    Description: Manipulate the DOM to toggle the menu display
*/
// An array is used as JavaScript cannot access the file system when running from the browser.
const products = [
    {
        productType: "Hoodie",
        color: "Allure Blue",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Atlantic",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Black Melangee",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Black",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Blush Pink",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Bordeaux",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Bottle Green",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Caribbean Blue",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Cerisee",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Coral Rose",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Dusty Black",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Dusty Grey",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Dusty Red",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Flint Grey",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Graphite",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Grey Melange",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Gumdrop Green",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Honeysuckle",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Insignia Blue",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Lava",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Lisa",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Maroon",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Midnight Blue",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Midnight",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Mustard",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Not White",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Peapod",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Sage",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Stone Blue",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Hoodie",
        color: "Vintage Royal",
        description: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
        price: "£39.99"
    },
    {
        productType: "Jumper",
        color: "Antique Cherry Red",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Antique Sapphire",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Ash",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Azalea",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Black",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Carolina Blue",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Charcoal",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Cherry Red",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Dark Chocolate",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Forest Green",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Garnet",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Gold",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Heather Sport Dark Green",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Heather Sport Dark Maroon",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Heather Sport Dark Navy",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Heather Sport Graphite",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Heather Sport Royal",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Heather Sport Scarlet Red",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Heliconia",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Indigo Blue",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Irish Green",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Legion Blue",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Light Blue",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Light Pink",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Maroon",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Military Green",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Mint Green",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Navy",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Old Gold",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Orange",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Orchid",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Paprika",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Plum",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Purple",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Red",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Royal",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Sand",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Sapphire",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Sports Grey",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Jumper",
        color: "Violet",
        description: "cotton authentic character and practicality are combined in this winter jumper for students that goes with everything to create casual looks",
        price: "£29.99"
    },
    {
        productType: "Tshirt",
        color: "Antique Cherry Red",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Antique Heliconia",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Antique Sapphire",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Black",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Cardinal Red",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Charcoal",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Cherry Red",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Cheshnut",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Cobalt",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Daisy",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Dark Chocolate",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Dark Heather",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Forest Green",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Heather Irish Green",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Heather Military Green",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Heather Navy",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Heather Orange",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Heather Purple",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Heather Royal",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Heliconia",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Irish Green",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Kiwi",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Light Blue",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Maroon",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Military Green",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Navy",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Orange",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Purple",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Red",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Royal",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Sand",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "Sapphire",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    },
    {
        productType: "Tshirt",
        color: "White",
        description: "cotton authentic character and practicality are combined in this summery t-shirt for students that goes with everything to create casual looks. Perfect for those summer days",
        price: "£19.99"
    }
]

window.onload = function() {
    products.forEach(product => {
        var container = document.getElementById(product.productType);
        // Create a div to store all the necessary content in
        var div = document.createElement('div');
        div.setAttribute('class', 'productContainer');
        // Create an image tag with the source of the corresponding image to the colour name.
        var productImage = document.createElement('img');
        productImage.src = `../Images/${product.productType}/${product.color}.jpg`;
        div.appendChild(productImage);
        // Add a heading for the type of product
        var productType = document.createElement('h2');
        productType.textContent = `${product.productType}:`;
        div.appendChild(productType);
        // Add a heading as the colour of the product
        var productColor = document.createElement('h2');
        productColor.textContent = `${product.color}`;
        div.appendChild(productColor);
        // Add a paragraph to contain the description
        var productDescription = document.createElement('p');
        productDescription.setAttribute('class', 'productDescription')
        productDescription.textContent = product.description;
        div.appendChild(productDescription);
        // Add a strong tag to emphasise the price of the item
        var productPrice = document.createElement('strong');
        productPrice.setAttribute('class', 'productPrice');
        productPrice.textContent = product.price;
        div.appendChild(productPrice);
        // Create a button to add the element to the cart.
        var buyButton = document.createElement('input');
        buyButton.type = "button";
        buyButton.value = "Buy";
        buyButton.setAttribute("id", "purchase_input")
        buyButton.setAttribute("onclick", "alert(\"Added to cart\")")
        div.appendChild(buyButton);
        // Place the div and all interior content on the page.
        container.appendChild(div);
    });
};