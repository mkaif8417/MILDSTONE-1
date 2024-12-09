function countVowels() {
    // Get the user's input name
    const name = document.getElementById("nameInput").value.toLowerCase();

    // Define the vowels
    const vowels = "aeiou";

    // Initialize vowel count to 0
    let vowelCount = 0;

    // Loop through each character in the name
    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    // Display the result
    document.getElementById("result").textContent = `Number of vowels: ${vowelCount}`;
}