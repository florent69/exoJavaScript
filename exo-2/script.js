// you can write js here
console.log('exo-2');
var age = 10;
var raceNumber = 0;
var name = 'Tom';
var register = name || 'non-register';

if (register === 'non-register'){
    raceNumber = Math.floor(Math.random()*1000);
    console.log(raceNumber);
} else {                             // if else normal //
    raceNumber ++;
    console.log(name + ' has the race n° ' + raceNumber);
}

// register !== 'non-register' ? console.log(name + ' has the race n° ' + raceNumber ++) : console.log(Math.floor(Math.random() * 1000));
// Le raceNumber s'affiche et s'incrémente APRES !! L'utilisation d'un Ternary se fait uniquement pour un if else simple.

if (age > 18 && register !== 'non-register') {
    console.log('You will race at 9:30am');
} else if (age >= 18 || register !== 'non-register') {
    console.log('You will race at 11:00 am : ' + raceNumber);
} else if (age < 18 || register == 'non-register') {
    console.log('You will race at 12:30 pm : ' + raceNumber);
} else {
    console.log('Go to see the registration desk');
}
