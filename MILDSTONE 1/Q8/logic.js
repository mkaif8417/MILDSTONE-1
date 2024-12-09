function printTriangle() {
    // Get the value of input
    const i = parseInt(document.getElementById('input').value);

    // Get the reference to the pattern display area
    const patternArea = document.getElementById('pattern');

    // Clear previous output
    patternArea.textContent = "";

    // Loop to generate the inverted triangle
    for (let row = i; row >= 1; row--) {
        // Create a row with 'row' number of asterisks
        let stars = '*'.repeat(row);
        patternArea.textContent += stars + '\n';
    }
}