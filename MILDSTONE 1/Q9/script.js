function findNumbers() {
    // Get the input value and split it into an array
    const input = document.getElementById("inputArray").value;
    const numbers = input.split(',').map(num => parseInt(num.trim())); // Convert to integers
    
    // Prepare to display results
    let result = '';

    // Loop through the array and check the condition
    for (let i = 0; i < numbers.length; i++) {
        // Continue to the next iteration if the number is divisible by 2
        if (numbers[i] % 2 === 0) {
            continue;
        }
        
        // Check if the number is divisible by 3 but not by 2
        if (numbers[i] % 3 === 0) {
            result += numbers[i] + ' ';
        }
    }

    // Display the result
    document.getElementById("result").textContent = result.trim() || "No numbers found.";
}