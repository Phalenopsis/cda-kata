/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];

// your code here
function sumOfEvenNumbers(numbers: number[]): number {
    return numbers.reduce((sum: number, current: number) => current % 2 ? sum : sum + current, 0);
    // fonctionnement pas à pas :
    // reduce : methode de l'object Array de js
    //      Elle permet de boucler sur le contenu d'un tableau et d'en sortir une seule valeur de retour.
    //      En gros, elle réduit un tableau de multiples valeurs à une seule valeur
    //      Reduce prend 2 paramètres : une callback et la valeur initiale
    // la callback : (sum: number, current: number) => current % 2 ? sum : sum + current
    // elle prend 2 paramètres : 
    //         - sum, la somme, qui est égale au deuxième paramètre de reduce au début 
    //         - current, qui est le nombre sur lequel la boucle se trouve
    // la ternaire de la callback : 
    //      current % 2 ? sum : sum + current
    // cela équivaut à :
    //  if(current % 2 == 1) { //dans ce cas, comme le modulo n'est pas égale à 0, le nombre n'est pas pair
    //      sum = sum;
    //  } else {
    //      sum = sum + current;
    //  }
}

console.log(sumOfEvenNumbers(numbers));



/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];

// your code here

function maxNumber(numbers: number[]): number {
    return numbers.reduce((max: number, current: number) => current > max ? current : max, Number.NEGATIVE_INFINITY);
    // je ne fais pas le détail ici, je vous laisse comprendre de vous même.
    // le principe est le même
}

console.log(maxNumber(numbers));
console.log(maxNumber(numbers2));
