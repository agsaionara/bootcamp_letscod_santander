const vetor = ['10', "20", "30"];
console.log(vetor);
const stringToInt = (x) => parseInt(x);
const vetor2 = vetor.map(stringToInt);
console.log(vetor2);

const vetor3 = vetor2.map(x => x*x);
console.log(vetor3)