'use strict';

const testArray = [1, 2, 3, 4, 5, 6, 7, 'ciao', 10];

const element = prompt('Inserisci un elemento da aggiungere in testa all\'array')

console.log(inserisciInTesta(testArray, element));

// ---------
// FUNCTIONS
// ---------

function inserisciInTesta(arrayA, E) {
    //aggiungo subito l'elemento in testa all'array B
    let arrayB = [E];
    //copio l'arrayA nell'arrayB shiftando di una posizione
    for (let i = 1; i < contaElementi(arrayA); i++) {
        arrayB[i] = arrayA[i - 1];
    }
    //aggiungo l'ultimo elemento all'array B
    arrayB[contaElementi(arrayB)] = arrayA[contaElementi(arrayA) - 1];
    return arrayB;
}


function rimuoviDallaTesta(arrayA) {
    let arrayB = [];
    for (let i = 1; i < contaElementi(arrayA); i++) {
        arrayB[i - 1] = arrayA[i];
    }
    return arrayB;
}

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