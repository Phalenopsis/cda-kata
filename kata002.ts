/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];

// your code here
function sumOfEvenNumbers(numbers: number[]): number {
    return numbers.reduce((sum: number, current: number) => current % 2 ? sum : sum + current, 0);
}

console.log(sumOfEvenNumbers(numbers));



/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];

// your code here

function maxNumber(numbers: number[]): number {
    return numbers.reduce((max: number, current: number) => current > max ? current : max, 0);
}

console.log(maxNumber(numbers));
console.log(maxNumber(numbers2));
