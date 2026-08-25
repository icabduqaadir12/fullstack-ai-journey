import students from "./data.js"


// Level 1: Basic Analysis

// Student Names

const getStudentNames = (students) => {
    return students.map((student) => {
        return student.name;
    });
}

console.log("Student Names:", getStudentNames(students));


// Getting Students By Class

const getStudentByClass = (students, stdClass) => {
    return students.filter((student) => {
        return student.class === stdClass;
    });
}

console.log("Students Class A:", getStudentByClass(students, 'A'));


// Get Student

const getStudent = (students, name) => {
    return students.find((student) => {
        return student.name === name;
    });
}

console.log("Info Student:", getStudent(students, 'Hassan'));


// Level 2: Scores


// Get Students Totals

const getStudentTotals = (students) => {
    return students.map((student) => {
        let [first, second, third] = student.scores;
        return {
            name: student.name,
            total: (first + second + third)
        }
        
    })
}

console.log(getStudentTotals(students))


// Get \Student Averages

const getStudentAverage = (students) => {
    let totals = students.map((student) => {
        let [first, second, third] = student.scores;
        return Number(((first + second + third) / student.scores.length).toFixed(2));
    });


    return totals;
}

console.log(getStudentAverage(students));