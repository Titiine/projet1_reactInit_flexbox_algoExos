// TP1 : Refaire l'exemple d'import export du cours

// TP2 : Compter le nombre de A

// let inputString = "totoa";

// function countNumberOfAs(str) {
//     let num = 0;
//     let strTab = str.toLowerCase().split("");
//     strTab.forEach(element => {
//         if (element === "a") {
//             num++;
//         }
//     });
//     return num;
// }

// console.log("Number of a: " + countNumberOfAs(inputString));

///////////////

// Correction : avec la syntaxe de es6, en arrowfunction

const myName = 'pierre'; // Conseil 1 : bien noter en const les trucs qui changent pas

// Conseil 2 : Utiliser les arrow functions (syntaxe es6) [y'a un argument pour les privilegier aux fonctions habituelles ?]
// Conseil 3 : Utilitation de const pour déclarer les fonctions [permet de les considerer comme des objets comme les autres]

// function countLetters = () => {};                // C'est bon comme syntaxe ?
const countLetters = (myWord) => {
    const myWordArr = myWord.split("");
    for(let i=0;i<myWord.length;i++){
        console.log(myWordArr[i]);
    }
};

countLetters("brocoli");

// TP3 : Faire cette page pour réviser le flex

