let value = "45.67";

// Convert string to number
let num = parseFloat(value);

// Print converted number
console.log("Converted Number:", num);

// Check if valid
if (isNaN(num)) {
    console.log("Invalid number");
} else {
    console.log("Valid number");
}
