type Student = {
    name: string,
    hasReviewed: boolean
}

let tsEleves: Student[] = [
    { name: 'Alice', hasReviewed: false },
    { name: 'Bob', hasReviewed: false },
    { name: 'Charlie', hasReviewed: false },
    { name: 'David', hasReviewed: false }
];

function tsResetPicker(students: Student[]): Student[] {
    for (let student of students) {
        student.hasReviewed = false;
    }
    return students;
}

function tsRetRandomStudent(freeStudents: Student[]): Student {
    const nbStudents = freeStudents.length;
    const n = Math.floor(Math.random() * nbStudents);
    const studentPicked = freeStudents[n];

    studentPicked.hasReviewed = true;
    return studentPicked;
}

function tsPickReviewer(students: Student[]): Student {
    let freeStudents: Student[] = students.filter(student => !student.hasReviewed);
    const nbStudents: number = freeStudents.length;
    if (nbStudents === 0) {
        freeStudents = tsResetPicker(students);
    }
    return tsRetRandomStudent(freeStudents);
}

console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);
console.log(tsPickReviewer(tsEleves).name);


