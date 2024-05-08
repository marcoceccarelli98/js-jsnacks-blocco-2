'use strict';

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 'ciao', 10, 98];

console.log(rimuoviDallaCoda(testArray));

// ---------
// FUNCTIONS
// ---------

function rimuoviDallaCoda(arrayA) {
    let arrayB = [];
    for (let i = 0; i < contaElementi(arrayA) - 1; i++) {
        arrayB[i] = arrayA[i];
    }
    return arrayB;
}

function stampa(array) {
    let string = '';
    for (let i = 0; i < contaElementi(array); i++) {
        //Se non è l'ultimo elemento concatena anche una virgola nella stringa
        if (i < contaElementi(array) - 1) {
            string += array[i] + ',';
        } else {
            string += array[i];
        }
    }
    return string;
}

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