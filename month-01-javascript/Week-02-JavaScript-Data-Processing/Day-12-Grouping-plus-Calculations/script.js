// Dataset
const expenses = [
    { amount: 500, category: "Food" },
    { amount: 200, category: "Transportation" },
    { amount: 800, category: "Food" },
    { amount: 150, category: "Groceries" },
    { amount: 1000, category: "Transportation" },
    { amount: 300, category: "Entertainment" }
];

// getTotalByCategory

const getTotalByCategory = (expenses) => {
    return expenses.reduce((total, expense) => {
        let category = expense.category;

        if (total[category])
            total[category] += expense.amount;
        else
            total[category] = expense.amount;

        return total;
    }, {});
}

// console.log("Total By Category:", getTotalByCategory(expenses));



// getAverageByCategory

const getAverageByCategory = (expenses) => {
    let result = expenses.reduce((count, expense) => {
        let category = expense.category;

        if (count[category]) {
            count[category].Total += expense.amount;
            count[category].Count += 1;
        }

        else {  
            count[category] = {
                Total: expense.amount,
                Count: 1,
            }
        }

        return count;
    }, {});

    let properties = Object.keys(result);

    return properties.reduce((getAverage, property) => {
        getAverage[property] = result[property].Total / result[property].Count;

        return getAverage;
    }, {});
}

console.log(getAverageByCategory(expenses))