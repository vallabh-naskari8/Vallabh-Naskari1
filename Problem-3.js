function conditionalOddSeries(a) {
    let n = a % 2 === 0 ? a - 1 : a;
    let result = [];
    for (let i = 1; result.length < n; i += 2) {
        result.push(i);
    }
    return result;
}


console.log(conditionalOddSeries(1)); 
console.log(conditionalOddSeries(2)); 
console.log(conditionalOddSeries(3)); 
console.log(conditionalOddSeries(4));
console.log(conditionalOddSeries(5)); 
console.log(conditionalOddSeries(6)); 
console.log(conditionalOddSeries(7)); 
