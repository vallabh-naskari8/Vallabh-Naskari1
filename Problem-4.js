const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function getMultiplesCount(numbers) {
    const result = {};
    for (let i = 1; i <= 9; i++) {
        result[i] = numbers.filter(num => num % i === 0).length;
    }
    return result;
}

function start() {
    rl.question("\nEnter numbers separated by comma (0 to exit): ", function(input) {
        if (input.trim() === "0") {
            console.log("Program terminated.");
            rl.close();
            return;
        }

        const numbers = input.split(",").map(Number);
        const multiplesCount = getMultiplesCount(numbers);
        console.log("Output:", multiplesCount);

        start(); 
    });
}

start();
