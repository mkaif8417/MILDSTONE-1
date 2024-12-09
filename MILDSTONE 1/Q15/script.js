  // Arrow function to calculate discount percentage
  const calculateDiscountPercentage = (originalPrice, discountedPrice) => 
    ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(2);

function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const discountedPrice = parseFloat(document.getElementById('discountedPrice').value);

    // Validate inputs
    if (isNaN(originalPrice) || isNaN(discountedPrice) || originalPrice <= 0 || discountedPrice < 0 || discountedPrice > originalPrice) {
        document.getElementById('result').textContent = "Please enter valid prices.";
        return;
    }

    // Calculate discount percentage
    const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

    // Display the result
    document.getElementById('result').textContent = `The discount percentage is ${discountPercentage}%.`;
}