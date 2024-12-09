function calculateBill() {
    // Get dish costs and number of people
    const dishCostsInput = document.getElementById('dishCosts').value;
    const people = parseInt(document.getElementById('people').value);

    // Validate input
    if (!dishCostsInput || isNaN(people) || people <= 0) {
        document.getElementById('result').textContent = "Please enter valid input.";
        return;
    }

    // Convert dish costs to an array of numbers
    const dishCosts = dishCostsInput.split(',').map(cost => parseFloat(cost.trim()));

    // Check for invalid dish costs
    if (dishCosts.some(isNaN)) {
        document.getElementById('result').textContent = "Please enter valid numbers for dish costs.";
        return;
    }

    // Calculate total bill
    const totalBill = dishCosts.reduce((acc, cost) => acc + cost, 0);

    // Calculate per-person bill
    const perPersonBill = totalBill / people;

    // Create result object
    const result = {
        totalBill: totalBill.toFixed(2),
        perPersonBill: perPersonBill.toFixed(2),
    };

    // Display the result
    document.getElementById('result').textContent = `Total Bill: Rs. ${result.totalBill}, Bill Per Person: Rs. ${result.perPersonBill}`;
}