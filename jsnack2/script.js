//Snack 2:
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let invetees = ['Antonio Sagoleo', 'Elisabetta Dahò', 'Riccardo Petricca', 'Stefano Capellini', 'Juan Francisco Markan'];
let checkInvitation = prompt('Please enter yout name');
let invited = false;

for ( let i = 0; i < invetees.length; i++){
    if (checkInvitation === invetees[i]){
        invited = true
    }
}

if (invited){
    console.log('Wlecome, we were expecting you!');
} else {
    console.log('Sorry, your name is not on the list');
}