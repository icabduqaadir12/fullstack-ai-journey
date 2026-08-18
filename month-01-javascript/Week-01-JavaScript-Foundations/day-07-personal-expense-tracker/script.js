// dataset

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


// Total amount of expenses
const calculateTotal = (expenses) => {
    let totalAmount = 0;
    expenses.forEach((expense) => {
        totalAmount += expense.amount
    });
    return totalAmount;
};

console.log("Total Amounts: $" + calculateTotal(expenses));


// Finding Highest Expense

const findHighestExpense = (expenses) => {
    let highestExpense = expenses[0];
    expenses.forEach((expense) => {
        if (highestExpense.amount < expense.amount)
            highestExpense = expense;
    });
    return highestExpense;
}

console.log("Highest Expense Object:", findHighestExpense(expenses));


// Finding Lowest Expense

const findLowestExpense = (expenses) => {
    let lowestExpense = expenses[0];
    expenses.forEach((expense) => {
        if (lowestExpense.amount > expense.amount)
            lowestExpense = expense;
    });
    return lowestExpense;
}

console.log("Lowest Expense Object:", findLowestExpense(expenses));



// get food expenses

const getFoodExpenses = (expenses) => {
    return expenses.filter((expense) => {
        return expense.category === 'Food';
    });
}

console.log("Food Expense Objects:", getFoodExpenses(expenses));

// get expensive expenses

const getExpensiveExpenses = (expenses) => {
    return expenses.filter((expense) => {
        return expense.amount >= 500;
    });
}

console.log("Expensive Expenses:", getExpensiveExpenses(expenses));


// get total by category

const getTotalByCategory = (expenses, category) => {
    let totalByCategory = 0;
    expenses.filter((expense) => {
        return expense.category === category;
    }).forEach((expense) => {
        totalByCategory += expense.amount;
    });

    return totalByCategory;
}

console.log("Total By Category: $"+getTotalByCategory(expenses, "Food"));



// get discounted expenses

const discountedExpenses = (expense) => {
    return {
        ...expense,
        amount: expense.amount - (expense.amount * 0.1)
    };
}

const processExpense = (expenses, callback) => {
    return expenses.map(callback)
}


console.log("Discounted Expenses:", processExpense(expenses, discountedExpenses));



// getTotalFoodExpense
const getTotalFoodExpenses = (expenses, category) => {
    let totalFoodExpenses = 0;
    expenses.filter((expense) => {
        return expense.category === category && expense.amount > 400;
    }).forEach((expense) => {
        totalFoodExpenses += expense.amount;
    });

    return totalFoodExpenses;
}

console.log("Total Food Expenses: $", getTotalFoodExpenses(expenses, 'Food'));