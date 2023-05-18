//Snack 1:
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.


let numbers = [];
let result = 0;

for ( let i = 0; i < 10; i++ ){
    let userNumbers = prompt('please enter a number');
    numbers.push(userNumbers);
}

if ( numbers.length == 10 ){
    console.log(numbers);
}

for ( let i = 0; i < numbers.length; i++){
    result += parseInt(numbers[i]);
}

console.log(result); 







