let cart = [];

function addItem() {
    // Get the item input from the user
    const item = document.getElementById("itemInput").value.trim();

    // Check if the item is already in the cart (case insensitive)
    if (item && !cart.some(cartItem => cartItem.toLowerCase() === item.toLowerCase())) {
        // Add the item to the cart if not a duplicate
        cart.push(item);
        // Update the cart display
        displayCart();
        // Clear any previous alert
        document.getElementById("alert").textContent = "";
    } else if(item) {
        // Show an alert for duplicate items
        document.getElementById("alert").textContent = "This item is already in your cart!";
    }

    // Clear the input field
    document.getElementById("itemInput").value = "";
}

function displayCart() {
    // Get the list element to display cart items
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";  // Clear the existing list

    // Display each unique item in the cart
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        cartList.appendChild(listItem);
    });
}