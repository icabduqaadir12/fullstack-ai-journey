// calculateTotal function in different styles

// function declaration
function calculateTotalA(a, b) {
    return a + b;
}

// function expression
const calculateTotalB = function(a, b) {
    return a + b;
}

// arrow function
const calculateTotalC = (a, b) => {
    return a + b;
}

console.log("A: " + calculateTotalA(100, 200));
console.log("B: " + calculateTotalB(100, 200));
console.log("C: " + calculateTotalC(100, 200));


// callback function
const printExpense = (expense) => {
    console.log(`Expense: $${expense}`);
}

function processExpense(expense, callback) {
    callback(expense);
}

processExpense(500, printExpense);


