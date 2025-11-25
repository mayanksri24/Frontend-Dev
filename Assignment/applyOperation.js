function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

function double(n) {
    return n * 2;
}

function square(n) {
    return n * n;
}

const nums = [1, 2, 3, 4];

console.log(applyOperation(nums, double)); 
console.log(applyOperation(nums, square));
