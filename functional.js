let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota", "Indiana", "Illinois", "Arizona"];

// Returns a URL-friendly version of a string
//  Example:
//      Kansas -> kansas
//      North Dakota -> north-dakota
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-")
}

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(element => {
        urls.push(urlify(element));
    });
    return urls;
}

console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));

// singles: Imperative version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(element => {
        if(element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}

console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative version
function imperativeSum(elements) {
    let total = 0;
    numbers.forEach(n => total += n);
    return total;
}

console.log(imperativeSum(numbers));

// sum: Functional version
function functionalSum(numbers) {
    return numbers.reduce((total, n) => total += n);
}

console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(element => {
        lengths[element] = element.length;
    });
    return lengths;
}

console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    },{});
}

console.log(functionalLengths(states));
