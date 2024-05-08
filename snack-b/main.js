'use strict';

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 'ciao', 10];

const elementToFind = prompt('Inserisci l\'elemento da cercare');

console.log(trovaIndice(testArray, elementToFind));


// ---------
// FUNCTIONS
// ---------

function trovaIndice(array, element) {

    for (let i = 0; i < contaElementi(array); i++) {
        if (array[i] == element) {
            return i;
        }
    }
    return -1;
}

function contaElementi(array) {
    let count = 0;

    while (array[count] != undefined) {
        count++;
    }

    return count;
}