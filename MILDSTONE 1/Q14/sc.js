 // Arrow function to calculate total cost
 const calculateCartTotal = (cart) => 
    cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);

function calculateTotal() {
    const cartInput = document.getElementById('cartInput').value;

    try {
        // Parse the input into a JavaScript array
        const cart = JSON.parse(cartInput);

        // Validate the cart structure
        if (!Array.isArray(cart) || cart.some(item => !item.unitPrice || !item.quantity)) {
            throw new Error("Invalid cart format.");
        }

        // Calculate total cost
        const total = calculateCartTotal(cart);

        // Display the result
        document.getElementById('result').textContent = `Total Cost: Rs. ${total.toFixed(2)}`;
    } catch (error) {
        // Handle parsing or validation errors
        document.getElementById('result').textContent = "Invalid input. Please enter cart items in the correct JSON format.";
    }
}