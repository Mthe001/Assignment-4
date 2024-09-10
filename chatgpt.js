function checkDigitsInName(name) {
    // Check if the input is a string
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    // Loop through each character in the string
    for (var i = 0; i < name.length; i++) {
        // Check if the character is a digit using isNaN() function
        if (!isNaN(name[i]) && name[i] !== ' ') {
            return true;
        }
    }

    // If no digit is found, return false
    return false;
}

// Test cases
console.log(checkDigitsInName("Raj123"));  // true
console.log(checkDigitsInName("Suman"));   // false
console.log(checkDigitsInName("Name2024")); // true
console.log(checkDigitsInName("!@#"));     // false
console.log(checkDigitsInName(["Raj"]));   // Invalid Input
