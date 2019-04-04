// you can write js here

console.log('exo-5');

var input = prompt('La baleine répetera en aeie !');
//var input = input.split(''); // Met tous les caractères dans un tableau //
console.log(input);
var voyels = ['a', 'e', 'i', 'o', 'u', 'y'];
var resultArray = [];

for (i=0 ; i < input.length ; i++) {
    // console.log(input[i]);
    var indexOfInput = voyels.indexOf(input[i]);
    // console.log(indexOfInput);
    voyels.forEach(function(voyel){
        if (voyel === input[i]) {
            resultArray.push(input[i]);
        }
    });
    // if (indexOfInput > -1) {
    //     resultArray.push(input[i]);
       // resultArray.toUpperCase();
    // }
}
console.log(resultArray.join(' ').toUpperCase());