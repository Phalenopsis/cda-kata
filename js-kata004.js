let eleves = [
    { name: 'Alice', hasReviewed: false },
    { name: 'Bob', hasReviewed: false },
    { name: 'Charlie', hasReviewed: false },
    { name: 'David', hasReviewed: false }
];

function resetPicker(students) {
    for (let student of students) {
        student.hasReviewed = false;
    }
    return students;
}

function getRandomStudent(freeStudents) {
    const nbStudents = freeStudents.length;
    const n = Math.floor(Math.random() * nbStudents);
    const studentPicked = freeStudents[n];

    studentPicked.hasReviewed = true;
    return studentPicked;
}

function pickReviewer(students) {
    let freeStudents = students.filter(student => !student.hasReviewed);
    let nbStudents = freeStudents.length;
    if (nbStudents === 0) {
        freeStudents = resetPicker(students);
    }
    return getRandomStudent(freeStudents);
}

console.log(pickReviewer(eleves).name);
console.log(pickReviewer(eleves).name);
console.log(pickReviewer(eleves).name);
console.log(pickReviewer(eleves).name);
console.log(pickReviewer(eleves).name);
console.log(pickReviewer(eleves).name);
console.log(pickReviewer(eleves).name);
console.log(pickReviewer(eleves).name);
console.log(pickReviewer(eleves).name);
console.log(pickReviewer(eleves).name);
