function oddSeries(a) {
    let result = [];
    for (let i = 0; result.length < a; i++) {
        if (i % 2 !== 0) result.push(i);
    }
    return result;
}


console.log(oddSeries(1)); 
console.log(oddSeries(2)); 
console.log(oddSeries(3)); 
console.log(oddSeries(4)); 
console.log(oddSeries(7)); 
