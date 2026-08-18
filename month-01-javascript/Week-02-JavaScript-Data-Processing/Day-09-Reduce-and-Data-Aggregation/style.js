const salaries = [800, 950, 1200, 700, 1100];


// calculate total salary

const calculateTotalSalary = (salaries) => {
    return salaries.reduce((totalSalary, salary) => {
        return totalSalary + salary;
    }, 0);
}

console.log("Total Salaries: $" + calculateTotalSalary(salaries));


// calculate average salary
const calculateAverageSalary = (salaries) => {
    const totalSalary = calculateTotalSalary(salaries);
    const average = totalSalary / salaries.length;
    return average;
}

console.log("Average Salary: $" + calculateAverageSalary(salaries));



const expenses = [
    { amount: 500, category: "Food" },
    { amount: 200, category: "Transportation" },
    { amount: 800, category: "Food" },
    { amount: 150, category: "Groceries" },
    { amount: 1000, category: "Transportation" },
    { amount: 300, category: "Entertainment" }
];


// calculate total expenses

const calculateTotalExpenses = (expenses) => {
    return expenses.reduce((totalExpenses, expense) => {
        return totalExpenses + expense.amount;
    }, 0);
}

console.log("Total Expenses: $" + calculateTotalExpenses(expenses));



console.log(0+2*2)