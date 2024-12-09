function convertToFahrenheit() {
    // Get the Celsius value from the input field
    const celsius = parseFloat(document.getElementById('celsiusInput').value);

    // Check if the input is valid
    if (isNaN(celsius)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
    }

    // Convert Celsius to Fahrenheit
    const fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    document.getElementById('result').textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
}