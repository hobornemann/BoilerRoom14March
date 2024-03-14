

function containsSubset(mainArray, subsetArray) {
    return subsetArray.every(number => mainArray.includes(number));
}

// Example usage:
const mainArray = [1, 2, 3, 4, 5, 6, 7];
const subsetArray1 = [2, 4, 6];
const subsetArray2 = [2, 4, 8];

console.log(containsSubset(mainArray, subsetArray1)); // Output: true
console.log(containsSubset(mainArray, subsetArray2)); // Output: false


