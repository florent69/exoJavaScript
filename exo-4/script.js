// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
// Utiliser une méthode pour enlever le dernier éléments du tableau `secretMessage`
var last = secretMessage.pop();
// Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
var newLenght = secretMessage.push('to');
// Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
var newLenght = secretMessage.push('program');
// Changer le mot 'easily' par 'right' en accédant au bon index du tableau.
var removedItem = secretMessage.splice(6, 1, 'right');
// Utiliser une méthode pour supprimer le premier éléments du tableau.
var first = secretMessage.shift();
// Utiliser une méthode pour ajouter la chaine "Programming" en début de tableau.
var newLength = secretMessage.unshift('Programming');
// Utiliser une méthode pour remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'.
var removedItems = secretMessage.splice(5, 5, 'know');

console.log(secretMessage.join(' '));