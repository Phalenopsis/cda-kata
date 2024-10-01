var tsEleves = [
    { name: 'Alice', hasReviewed: false },
    { name: 'Bob', hasReviewed: false },
    { name: 'Charlie', hasReviewed: false },
    { name: 'David', hasReviewed: false }
];
function tsResetPicker(students) {
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        student.hasReviewed = false;
    }
    return students;
}
function tsRetRandomStudent(freeStudents) {
    var nbStudents = freeStudents.length;
    var n = Math.floor(Math.random() * nbStudents);
    var studentPicked = freeStudents[n];
    studentPicked.hasReviewed = true;
    return studentPicked;
}
function tsPickReviewer(students) {
    var freeStudents = students.filter(function (student) { return !student.hasReviewed; });
    var nbStudents = freeStudents.length;
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
