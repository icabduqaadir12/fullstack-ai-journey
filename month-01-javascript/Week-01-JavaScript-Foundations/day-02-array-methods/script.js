// foreach keyword
const expenses = [50, 800, 125, 430, 75, 1000];

// show Expenses
// function showExpenses(expenses) {
//     return expenses.forEach(function(expense) {
//         console.log(expense);
//     })
// }

// showExpenses(expenses);

// // map keyword
// const prices = [100, 200, 300, 500];

// function getTaxedExpenses(expenses) {
//     return expenses.map(function(expense) {
//         let tax = expense * 0.1;
//         return expense + tax;
//     });
// }

// const taxedExpenses = getTaxedExpenses(expenses);
// console.log("Taxed Expenses: " + taxedExpenses);


// // filter keyword
// function getLargeExpenses(expenses) {
//     return expenses.filter(function(expense) {
//         return expense > 300;
//     });
// }

// const largeExpenses = getLargeExpenses(expenses);
// console.log("Large Expenses: " + largeExpenses);



// Day 2 Final Challange
// printExpenses
function printExpenses(expenses) {
    expenses.forEach((expense) => {
        console.log("Expense: $" + expense);
    })
}

printExpenses(expenses);


// getExpensiveExpenses
function getExpensiveExpenses(expenses) {
    return expenses.filter((expense) => {
        return expense > 500;
    })
}

const expensiveExpenses = getExpensiveExpenses(expenses);
console.log("Expensive Expenses: " + expensiveExpenses);


// getDiscountedExpenses
function getDiscountedExpenses(expenses) {
    return expenses.map((expense) => {
        return expense - (expense * 0.2) ;
    })
}

const discoutedExpenses = getDiscountedExpenses(expenses);
console.log("Discounted Expenses: " + discoutedExpenses);