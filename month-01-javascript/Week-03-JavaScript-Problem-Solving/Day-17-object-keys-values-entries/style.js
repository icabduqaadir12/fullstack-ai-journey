const totals = {
    IT: 2000,
    Finance: 2050,
    HR: 700
};


// get departments 
const getDepartments = (totals) => Object.keys(totals);

console.log(getDepartments(totals));

// get salary totals

const getSalaryTotals = (totals) => Object.values(totals);

console.log(getSalaryTotals(totals));


// Get Highest Paid Department

const getHighestPaidDept = (totals) => {
    let result = Object.entries(totals).reduce((highest, total) => {
        if (highest.salary < total[1]) return {department: total[0], salary: total[1]}

        return highest
    }, {department: null, salary: 0});

    return result.department
}


console.log(getHighestPaidDept(totals))