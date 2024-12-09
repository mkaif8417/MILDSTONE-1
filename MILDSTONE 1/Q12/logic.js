function calculateRentalCost() {
    // Get the selected car type and number of days rented
    const carType = document.getElementById('carType').value;
    const daysRented = parseInt(document.getElementById('daysRented').value);

    // Check if input is valid
    if (isNaN(daysRented) || daysRented <= 0) {
        document.getElementById('result').textContent = "Please enter a valid number of days.";
        return;
    }

    // Define rental costs per day for each car type
    let costPerDay;
    switch (carType) {
        case 'Economy':
            costPerDay = 4000;
            break;
        case 'Midsize':
            costPerDay = 10000;
            break;
        case 'Luxury':
            costPerDay = 20000;
            break;
        default:
            document.getElementById('result').textContent = "Invalid car type selected.";
            return;
    }

    // Calculate total cost
    const totalCost = costPerDay * daysRented;

    // Display the result
    document.getElementById('result').textContent = `The total rental cost for a ${carType} car for ${daysRented} days is Rs. ${totalCost}.`;
}