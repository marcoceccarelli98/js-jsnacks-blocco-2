'use strict'

/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

let array1 = [0, 1, 2, 3, 4];
let array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let array1Minore = false;
let lenghtDifference = 0;

//Stabilisco l'array più corto
if (array1.length < array2.length) {
    array1Minore = true;
    lenghtDifference = array2.length - array1.length;
} else if (array2.length < array1.length) {
    array1Minore = false;
    lenghtDifference = array1.length - array2.length;
}

for (let i = 0; i < lenghtDifference; i++) {
    if (array1Minore) {
        array1.push(Math.floor(Math.random() * 100));
    } else {
        array2.push(Math.floor(Math.random() * 100));
    }
}

console.log(array1);
console.log(array2);