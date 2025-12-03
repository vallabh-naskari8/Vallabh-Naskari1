const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function conditionalOddSeries(a) {
    let n = a % 2 === 0 ? a - 1 : a; 
    let result = [];
    
    for (let i = 1; result.length < n; i += 2) {
        result.push(i);
    }
    return result;
}

function start() {
    rl.question("\nEnter a number (0 to exit): ", function(input) {
        let a = parseInt(input);

        if (a === 0) {
            console.log("Program terminated.");
            rl.close();
            return;
        }

        console.log("Output:", conditionalOddSeries(a).join(", "));
        
        start();   
    });
}

start();
