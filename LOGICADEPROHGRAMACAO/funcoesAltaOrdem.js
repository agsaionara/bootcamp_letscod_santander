// const subtrair = (a,b) => a-b;
// const aplicaOperacao = (a,b, operacao)=> operacao(a,b);
// let resultado = aplicaOperacao(4, 2, subtrair);
// console.log(resultado)

const somarX = (x) => (y) => x+y;
const somarDois = somarX(2);
const somarTres = somarX(3);
console.log(somarTres(5));