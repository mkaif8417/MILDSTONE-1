function calculate() {
    // Get values from the form
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let result;

    // Switch statement to operate  operations
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = "Error: Division by zero is not allowed.";
                document.getElementById("result").textContent = result;
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
            document.getElementById("result").textContent = result;
            return;
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}