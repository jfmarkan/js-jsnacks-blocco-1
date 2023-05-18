//Snack 3:
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.

let oddNumbersOnly = [];

for (let i = 0; i < 6; i++){
    let numbersTyped = prompt('please insert a number');
    if (numbersTyped % 2 !== 0){
        console.log('Odd Number');
        oddNumbersOnly.push(numbersTyped);
    }
}
console.log(oddNumbersOnly);