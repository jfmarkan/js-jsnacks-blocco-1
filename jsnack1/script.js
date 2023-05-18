//Snack 1:
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.


let numbers = [];

for ( let i = 0; i < 10; i++ ){
    let userNumbers = prompt('please enter a number');
    numbers.push(userNumbers);
}

if (numbers.length == 10){
    console.log(numbers);
}








