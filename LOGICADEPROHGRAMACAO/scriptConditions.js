// let estaSol = false;
// if(estaSol){
//     console.log('vou para praia!')
// }
// else{
//     console.log("vou pro campo!")
// }
//---------------------------------------------------------------------
// let numero = -1;

// if(numero > 0){
//     console.log("numero positivo")
// }
// else if(numero == 0){
//     console.log("Numero é zero!")
// }
// else{
//     console.log("Numero negativo")
// }
//-------------------------------------------------------------------
// let numero = 4;
// let paridade = numero % 2 == 0 ? 'par':'impar';
// console.log(paridade);

let sinal = 'vermelh';

switch(sinal){
    case 'verde':
        console.log('pode passar');
        break;
    case 'amarelo':
        console.log('prestes a fechar, cuidado');
        break;
    case 'vermelho':
        console.log('fechado, não passe');
        break;
    default:
        console.log('sinal invalido');
        break;
}
