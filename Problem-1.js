const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Calculator {
  calculate(a, b, op) {
    op = op.toLowerCase();

    if (op === "add") return a + b;
    if (op === "sub") return a - b;
    if (op === "mul") return a * b;
    if (op === "div") return b !== 0 ? a / b : "Error: Cannot divide by 0";
    if (op === "mod") return a % b;

    return "Invalid Operation!";
  }
}

// Taking dynamic input
rl.question("Enter value of a: ", (x) => {
  rl.question("Enter value of b: ", (y) => {
    rl.question("Enter operation (add/sub/mul/div/mod): ", (op) => {

      let calc = new Calculator();
      console.log(`Result = ${calc.calculate(parseFloat(x), parseFloat(y), op)}`);

      rl.close();
    });
  });
});
