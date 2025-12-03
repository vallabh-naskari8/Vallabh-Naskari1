function countMultiples(arr) {
    let result = {};
    for (let i = 1; i <= 9; i++) {
        result[i] = arr.filter(num => num % i === 0).length;
    }
    return result;
}

let numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20];
console.log(countMultiples(numbers));
