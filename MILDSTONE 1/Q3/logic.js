function mixColors() {
    // Get user input
    const color1 = document.getElementById("color1").value.toLowerCase();
    const color2 = document.getElementById("color2").value.toLowerCase();

    let result;

    // Determine the resulting color using a switch statement
    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            result = "purple";
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            result = "orange";
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            result = "green";
            break;
        default:
            result = "Invalid color combination";
            break;
    }

    // Display the result
    document.getElementById("result").textContent = `Resulting color: ${result}`;
}