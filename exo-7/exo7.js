console.log("exo-7");

var trad = {
    "car": "Voiture",
    "house": "Maison",
    "game": "Jeux",
    "videoGame": "Jeux Videos",
    "show": "Spectacle"
}
// Object.keys pour mettre les clés dans un tableau
var tradKeys = Object.keys(trad);
// On rajoute une propriété à chaque objet de jsonDatas
jsonDatas.forEach(function (data) {  // on parcourt le tableau jsonData, on nomme les objets data
    for (i = 0; i < tradKeys.length; i++) {    // on parcourt le tableau tradKeys sur sa longueur
        if (tradKeys[i] === data.type) {       // si l'index i de tradKeys === au type d'une data
            data.typeTrad = trad[tradKeys[i]]; // on crée une nouvelle propriété dans l'objet qui prend la valeur de tradKeys
        }
    }
});

console.log(jsonDatas);

function show() {
    var getSelect = document.getElementById("typeJsD").value;
    console.log( getSelect);
}