  // Function to highlight words greater than 8 characters
  function highlightLongWords() {
    // Get the paragraph element by its ID
    const paragraph = document.getElementById('paragraph');

    // Get the text content of the paragraph
    const text = paragraph.innerHTML;

    // Split the text into individual words using spaces as a separator
    const words = text.split(' ');

    // Loop through each word
    const highlightedText = words.map(word => {
        // If the word length is greater than 8 characters, wrap it in a <span> with the highlight class
        if (word.length > 8) {
            return `<span class="highlight">${word}</span>`;
        }
        // Otherwise, return the word as it is
        return word;
    });

    // Join the words back into a single string and set it as the innerHTML of the paragraph
    paragraph.innerHTML = highlightedText.join(' ');
}

// Call the function to highlight long words when the page loads
window.onload = highlightLongWords;