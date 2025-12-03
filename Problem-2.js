const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(a) {
    a = parseInt(a);
    let result = [];

    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }

    console.log("Output:", result.join(", "));
    rl.close();
});
