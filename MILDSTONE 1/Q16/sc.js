 // Self-invoking arrow function to generate a random number between 1 and 100
 const randomNumber = (() => Math.floor(Math.random() * 100) + 1)();

 // Display the random number
 document.getElementById('randomNumber').textContent = `Generated Random Number: ${randomNumber}`;