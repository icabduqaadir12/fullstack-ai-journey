// Dataset
const expenses = [
    {
        amount: 500,
        category: "Food",
        description: "Dinner",
        date: "2026-08-10"
    },
    {
        amount: 200,
        category: "Transportation",
        description: "Taxi",
        date: "2026-08-11"
    },
    {
        amount: 800,
        category: "Food",
        description: "Restaurant",
        date: "2026-08-12"
    },
    {
        amount: 150,
        category: "Groceries",
        description: "Weekly shopping",
        date: "2026-08-13"
    },
    {
        amount: 1000,
        category: "Transportation",
        description: "Flight",
        date: "2026-08-14"
    },
    {
        amount: 300,
        category: "Entertainment",
        description: "Movie",
        date: "2026-08-15"
    }
];



// Challenge 1 — Find expensive expenses
const getExpensiveExpenses = (expenses) => {
    return expenses.filter((expense) => {
        return expense.amount >= 500;
    })
}

console.log("Expensive Expenses: ", getExpensiveExpenses(expenses));


// Challenge 2 — Get categories

const getCategories = (expenses) => {
    return expenses.map((expense) => {
        return expense.category
    })
}

console.log("Categories: " + getCategories(expenses));


// Challenge 3 — Calculate total

const calculateTotal = (expenses) => {
    let total = 0;
    expenses.forEach((expense) => {
        total += expense.amount;
    });
    return total;
}

console.log("Total Expenses: $" + calculateTotal(expenses));



// Challenge 4 — Find the highest expense

const findHighestExpense = (expenses) => {
    let highestExpense = expenses[0]
    expenses.forEach((expense) => {
        if (highestExpense.amount < expense.amount) {
            highestExpense = expense;
        }
    })
    return highestExpense
}

console.log('Highest Expense: ' + findHighestExpense(expenses));



// Challenge 5 — Get Food expenses

const getFoodExpenses = (expenses) => {
    return expenses.filter((expense) => {
        return expense.category === 'Food'
    })
}

console.log("Food Expenses: ", getFoodExpenses(expenses));



// Challenge 6 — Discount

// const getDiscountedExpense = function(expenses) {
//     return expenses.map(function(expense) {
//         return expense.amount - (expense.amount * 0.1);
//     });
// }


// console.log("Discounted Expenses: " + getDiscountedExpense(expenses));

const getDiscountedExpense = (expense) => {
    return {
        ...expense,
        amount: expense.amount - (expense.amount * 0.1)
    };
};

const processExpenses = (expenses, callback) => {
    return expenses.map(callback);
}

let result = processExpenses(expenses, getDiscountedExpense);
console.log("Result: ", result)