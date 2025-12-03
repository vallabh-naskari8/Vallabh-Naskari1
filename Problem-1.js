class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    calculate() {
        switch (this.operation) {
            case "add":
                return this.a + this.b;

            case "sub":
                return this.a - this.b;

            case "mul":
                return this.a * this.b;

            case "div":
                if (this.b === 0) {
                    return "Error: Cannot divide by zero";
                }
                return this.a / this.b;

            case "mod":
                if (this.b === 0) {
                    return "Error: Cannot modulo by zero";
                }
                return this.a % this.b;

            default:
                return "Invalid operation";
        }
    }
}

let calc1 = new Calculator(10, 5, "add");
console.log("Addition:", calc1.calculate());

let calc2 = new Calculator(10, 5, "sub");
console.log("Subtraction:", calc2.calculate());

let calc3 = new Calculator(10, 5, "mul");
console.log("Multiplication:", calc3.calculate());

let calc4 = new Calculator(10, 5, "div");
console.log("Division:", calc4.calculate());

let calc5 = new Calculator(10, 0, "div");
console.log("Division by zero:", calc5.calculate());

let calc6 = new Calculator(10, 3, "mod");
console.log("Modulo:", calc6.calculate());

let calc7 = new Calculator(10, 0, "mod");
console.log("Modulo by zero:", calc7.calculate());
