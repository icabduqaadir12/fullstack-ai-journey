const expense = {
    amount: 800,
    category: "Food",
    description: "Restaurant",
    date: "2026-08-13"
};

// object Destructuring
const {amount, category, description} = expense;
console.log("Amount:",amount);
console.log("Category:",category);
console.log("Description:",description);


// array Destructuring
const expenses = [500, 200, 100, 150, 250];
const [firstExpense, secondExpense, thirdExpense] = expenses;
console.log("First Expense:", firstExpense);
console.log("Second Expense:", secondExpense);
console.log("Third Expense:", thirdExpense);

// Spread Operator
const qarashaad = [500, 200, 100];
const qarashaadCusub = [...qarashaad, 150, 250];
console.log("Qarashaad Cusub:", qarashaadCusub);
console.log("Qarashaadka Asalka:", qarashaad);

const qarash = {
    amount: 500,
    category: "Food",
    description: "Dinner"
};

const qarashCusub = {...qarash, amount: 700}
console.log("Qarash Cusub:", qarashCusub);
console.log("Qarash Asalka:", qarash);


// rest operator
function calculateTotal(...expenses) {
    let total = 0;
    expenses.forEach(expense => {
        total += expense;
    });
    return total;
}

console.log(calculateTotal(100, 200, 300));