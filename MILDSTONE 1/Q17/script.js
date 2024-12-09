  // Customer object
  const customer = {
    name: "John Doe",
    balance: 5000.00,

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposit successful. New balance: Rs. ${this.balance.toFixed(2)}`;
        } else {
            return "Invalid deposit amount.";
        }
    },

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrawal successful. New balance: Rs. ${this.balance.toFixed(2)}`;
        } else if (amount > this.balance) {
            return "Insufficient balance.";
        } else {
            return "Invalid withdrawal amount.";
        }
    },

    // Method to display user info
    displayInfo() {
        return `Name: ${this.name}, Balance: Rs. ${this.balance.toFixed(2)}`;
    }
};

// Display initial user info
document.getElementById('userInfo').textContent = customer.displayInfo();

// Perform transaction based on user input
function performTransaction() {
    const transactionType = document.getElementById('transactionType').value;
    const amount = parseFloat(document.getElementById('amount').value);

    let result;
    if (transactionType === "deposit") {
        result = customer.deposit(amount);
    } else if (transactionType === "withdraw") {
        result = customer.withdraw(amount);
    }

    // Update status and user info
    document.getElementById('status').textContent = result;
    document.getElementById('userInfo').textContent = customer.displayInfo();
}