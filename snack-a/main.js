'use strict';

const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 'ciao', 10];

console.log(contaElementi(arrayTest));

function contaElementi(array) {
    let count = 0;

    while (array[count] != undefined) {
        count++;
    }

    return count;
}