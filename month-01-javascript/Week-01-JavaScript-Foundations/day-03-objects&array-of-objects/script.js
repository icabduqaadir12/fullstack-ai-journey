// Object

const expense = {
    amount: 300,
    category: "Food",
    description: "Lunch at a restaurant",
    date: "2026-08-12"
};

console.log(expense);
console.log("Amount: " + expense.amount);
console.log("Category: " + expense.category);
expense.amount = 400;
console.log("Updated Amount: " + expense.amount);


const expenses = [
    {
        amount: 500,
        category: "Food",
        description: "Dinner at a restaurant",
        date: "2026-08-10"
    },
    {
        amount: 200,
        category: "Transportation",
        description: "Taxi fare",
        date: "2026-08-11"
    },
    {
        amount: 100,
        category: "Entertainment",
        description: "Movie ticket",
        date: "2026-08-12"
    },
    {
        amount: 150,
        category: "Groceries",
        description: "Weekly grocery shopping",
        date: "2026-08-13"
    },
    {
        amount: 250,
        category: "Utilities",
        description: "Electricity bill",
        date: "2026-08-14"
    }
];

expenses.forEach(function (expense) {
    console.log(expense.category + " - $" + expense.amount)
});



// getExpensiveExpenses function

function getExpensiveExpenses(expenses) {
    return expenses.filter((expense) => {
        return expense.amount > 200;
    });
}

const expensiveExpenses = getExpensiveExpenses(expenses);
console.log("Expensive Expenses:", expensiveExpenses);

// getExpenseCategories function

function getExpenseCategories(expenses) {
    return expenses.map((expense) => {
        return expense.category;
    });
}

const expenseCategories = getExpenseCategories(expenses);
console.log("Expense Categories:", expenseCategories);


// getLargeExpensiveCategories function

function getLargeExpensiveCategories(expenses) {
    return expenses.filter((expense) => {
        return expense.amount > 200;
    }).map((expense) => {
        return expense.category;
    })
}

const largeExpensiveCategories = getLargeExpensiveCategories(expenses);
console.log("Large Expensive Categories:", largeExpensiveCategories);


