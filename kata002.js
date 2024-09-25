/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */
var numbers = [1, 2, 3, 4, 5, 6];
// your code here
function sumOfEvenNumbers(numbers) {
    return numbers.reduce(function (sum, current) { return current % 2 ? sum : sum + current; }, 0);
}
console.log(sumOfEvenNumbers(numbers));
/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */
var numbers2 = [12, 21, 67, 36, 49, 51];
// your code here
function maxNumber(numbers) {
    return numbers.reduce(function (max, current) { return current > max ? current : max; }, 0);
}
function maxNumberByBit(numbers) {
    return numbers.reduce(function (max, current) { return current ^ max; }, 0);
}
console.log(maxNumber(numbers));
console.log(maxNumber(numbers2));
console.log(maxNumberByBit(numbers2));
