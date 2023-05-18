//Snack 4:
//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.

let fourFigureNumber = prompt('Please enter a 4 figure number');
// let separateFigures = fourFigureNumber.split('');
let result = 0;

// for ( let i = 0; i < separateFigures.length; i++){
//     result += parseInt(separateFigures[i]); 
// }

// console.log(result);


for ( let i = 0; i < fourFigureNumber.length; i++){
    let number = parseInt(fourFigureNumber.charAt(i));
    result += number; 
}

console.log(result);