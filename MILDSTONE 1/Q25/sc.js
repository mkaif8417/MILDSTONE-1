  // Initial position of the image
  let xPosition = 0;
  let yPosition = 0;

  // Get the image element
  const image = document.getElementById('image');

  // Function to move the image
  function moveImage(event) {
      // Arrow key codes
      const key = event.keyCode;

      // Check which arrow key is pressed and update the position
      if (key === 37) { // Left Arrow
          xPosition -= 10;
      } else if (key === 38) { // Up Arrow
          yPosition -= 10;
      } else if (key === 39) { // Right Arrow
          xPosition += 10;
      } else if (key === 40) { // Down Arrow
          yPosition += 10;
      }

      // Update the image's position on the screen
      image.style.left = xPosition + 'px';
      image.style.top = yPosition + 'px';
  }

  // Add event listener for keydown event
  window.addEventListener('keydown', moveImage);