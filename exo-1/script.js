// you can write js here
console.log('hello from file');
var kelvin = prompt('Quelle est la température en Kelvin aujourd\'hui ?');
var celsius = kelvin - 273; // la variable celsius est égale à 294 - 273
console.log(celsius); // Dans ce cas 21
var fahrenheit = celsius * (9/2) +32; // fahrenheit = celsius multiplié par 9 divisé par 2 plus 32
console.log(fahrenheit); // Affiche la variable fahrenheit
console.log(Math.floor(fahrenheit)); // Arrondi la variable fahrenheit