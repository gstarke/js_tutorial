// Reverses a string.
function reverse(string) {
    return string.split("").reverse().join("");
}

// Return true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}