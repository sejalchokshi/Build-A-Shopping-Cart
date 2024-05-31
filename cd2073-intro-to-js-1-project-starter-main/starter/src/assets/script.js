/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

//Creating an empty array first
// const products = [];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

// Now Creating product1 = cherry with 5 properties, product2 = orange with 5 properties and product3 = strawberry with 5 properties
//Now put all 3 products (cherry, orange and straweberry in the empty array)
// push each product to the products array 

const products = [

    { name: "cherry", price: 1, quantity: 0, productId: 1000, image: "images/cherry.jpg" },

    { name: "orange", price: 3, quantity: 0, productId: 3000, image: "images/orange.jpg" },

    { name: "strawberry", price: 5, quantity: 0, productId: 5000, image: "images/strawberry.jpg" }
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

// This is my empty array

const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

//by using function() method
// create function that find the right product with ID from the productList

function findProduct(productId, productList) {
    return productList.find((product) => {
        return product.productId === productId;
    });
}
// creat function addProductToCart that takes in the the product productId as an argument
//
function addProductToCart(productId) {
    let product = findProduct(productId, products)

    //if product is not already in the cart then returns false,
    //product push/add to the cart
    if (!cart.includes(product)) {
        cart.push(product)
    }
    //if product push to the cart, increse the quantity
    increaseQuantity(productId)
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

// to increrase product quantity in the cart

function increaseQuantity(productId) {
    let product = findProduct(productId, cart)
        //increase the quantity
    product.quantity = product.quantity + 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

// to decrease product quantity in the cart

function decreaseQuantity(productId) {

    //find the product in the cart by productId
    const index = cart.findIndex(product => product.productId === productId);

    // If the product is in the cart

    if (index !== -1) {

        // Decrease the quantity of the product
        cart[index].quantity -= 1;

        // If the quantity is <=0 , remove the product from the cart

        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
            // Remove 1 item at the found index
        }
    }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
    let product = findProduct(productId, cart)

    //remove product from the cart fully that makes it 0
    product.quantity = 0;
    cart.splice(cart.indexOf(product), 1);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal() {
    let totalCost = 0;

    //calculate the total cost that returns
    for (i = 0; i < cart.length; i++) {
        totalCost = totalCost + (cart[i].quantity * cart[i].price);
    }
    return totalCost;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {

    //empty the whole cart/quantity = 0
    for (let item of cart) {
        item.quantity = 0;
    }
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

//before even customer paid anything , totalpaid = 0

let totalPaid = 0;

function pay(amount) {
    //totalPaid + the amount paid by customer
    totalPaid += amount;
    //remainingBalance = totalPaid - cartTotal
    let remainingBalance = totalPaid - cartTotal();

    if (remainingBalance >= 0) {

        totalPaid = 0;
        // transcartion has been suceesful. No amount to return to customer,also empty cart for new transaction
        emptyCart();
    }
    //Give back the remaining amout to the customer
    return remainingBalance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
    products,
    cart,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    cartTotal,
    pay,
    emptyCart,
    /* Uncomment the following line if completing the currency converter bonus */
    // currency
}