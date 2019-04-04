// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
var joeInfo = {             // Tableau associatif ou Objet joeInfo
    name: "Joe's house",    // littéral = name : variable chaîne de caractères = "Joe's house"
    rooms: 5,               // littéral = rooms : variable int = 5
    garage: false,          // littéral = garage : variable boléen = false
    bathrooms: 1 + 2,       // littéral = bathrooms : variable int = 1 + 2
    cars: ['Clio', 'Van'],  // littéral = cars : variable tableau avec 2 index = Clio et Van
};
// afficher le nombre de voitures de Joe

// changer le nombre de salle de bains de Joe : il n'en possède au'une.

// Joe vient d'acquérir un garage changer la structure pour le refléter.

var team = {
    _players: [
        {
            firstName: "Carl",
            lastName: "Boinon",
            age: 44
        },
        {
            firstName: "Tom",
            lastName: "Bozon",
            age: 33
        },
        {
            firstName: "Pablo",
            lastName: "Callejo",
            age: 45
        },
    ],

    _games: [
        {
            opponent: "Olympique Campus",
            teamPoints: 69,
            opponentPoints: 10
        },
        {
            opponent: "FC Numérique",
            teamPoints: 74,
            opponentPoints: 10
        },
    ]
};

function addPlayer(first, last, agePlayer) {
    let player = {
        firstName: "",           // 1ère façon
        lastName: "",
        age: ""
    };
    player.firstName = first;
    player.lastName = last;
    player.age = agePlayer;

    team._players.push(
        player
    );
}

function addGame(opponentAdd, teamPointAdd, opponentPointAdd) {
    let game = {};
    game.opponent = opponentAdd;
    game.teamPoints = teamPointAdd;              // 2ème = Mieux
    game.opponentPoints = opponentPointAdd;

    team._games.push(
        game
    );
}

addPlayer("Flo", "Ta", 34);
addPlayer("Alex", "Debuire", 21);

addGame("St-Etienne", 65, 10);
addGame("St-Etienne", 65, 10);

// console.log(team); Pour vérifier si tout à été rentré dans le tableau team //
var totalT = 0;
var totalOp = 0;
var nbOp = 0;
for (let game in team._games) {        //
    var totalTeam = team._games[game].teamPoints;  // = au total des points de ma team //
    var totalOpponent = team._games[game].opponentPoints; // = total des adversaires //
    totalT = totalT + totalTeam;             // à chaque game, on ajoute les points de team //
    totalOp = totalOp + totalOpponent;       // idem pour les adversaires //
    //console.log("totalOp = " + totalOp); Pour vérifier si le calcul est bon //
    nbOp++;              // On compte le nombre de game en incrémentant à chaque game //
    //console.log("nbOp = " + nbOp);
    var moyenneOp = totalOp / nbOp;          // Calcul de la moyenne de points //
}
;

console.log("les points de la Team : " + totalT);
console.log("les points des Adverses : " + moyenneOp);


var older = 0;
var olderName = "";
team._players.forEach(function (element) {
    if (element.age > older) {          //
        older = element.age;
        olderName = element.firstName;
    }
});

var alphaOrder = [];
team._players.forEach(function (element) {           // Tri alphabétique avec forEach //
    console.log(element.firstName);
    alphaOrder.push(element.firstName);
});

console.log("The older age is : " + older);
console.log("And his name is : " + olderName);
console.log("Ordre alphabétique : " + alphaOrder.sort());