// Creating function for validating the password
function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
      console.log("Password Matched. Password validation Successful.");
    } else {
      console.log("Password didn't match. Password validation unsuccessful.");
    }
  }
  
  // for user to type password
  let password = prompt("Enter your password:");
  let confirmPassword = prompt("Confirm your password:");
  
  //calling the function
  validatePassword(password, confirmPassword);
  