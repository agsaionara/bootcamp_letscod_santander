 let vetor = [10,20,30,40,50, 60, 70,80,90];
// vetor[2]='30'

// console.log(vetor[2])
//-------------------------------------------------------------------------------------------------
// let vetor = [];

// for(let i=0; i<10; i++){
//     vetor.push(i);
// }
// console.log(vetor)

// for(let i = 0; i<vetor.length; i++){
//     console.log(vetor[i])
// }
//---------------------------------------------------------
//FOR OF
// for(let numero of vetor){
//     console.log(numero)
// }
//---------------------------------------------------------
//FOR IN
// for(let indice in vetor){
//     console.log(vetor[indice])
// }
//---------------------------------------------------------
//MATRIZ
let matriz=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// for(let linha of matriz){
//     for(let elemento of linha){
//         console.log(elemento)
//     }
// }

let maisComando =['https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array']

for(let caracter in maisComando){
    console.log(caracter)
}