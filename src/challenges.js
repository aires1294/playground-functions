// Desafio 1
  function compareTrue(a, b) {
    if (a === true && b === true){
      return compareTrue;
    console.log('true');
    } else {
      return compareTrue;
      console.log('false');
    }
    
  }

// Desafio 2
function calcArea(base, height) {
  let altura = (base * height) / 2;
  return altura;
  
}

console.log(calcArea(10, 5));
console.log(calcArea(50, 5));

// Desafio 3
function splitSentence(sentence) {
    let arrayNovo = [];
    arrayNovo.push = sentence.split(" ");
    return splitSentence;
    console.log(arrayNovo);
}

// Desafio 4
function concatName(array) {
  let arrayNovo = [];
  for (index = 0; index < array.length; index+=1){
    arrayNovo.push = array[]
  }
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let somaPontos = 0;
  somaPontos = (wins * 3) + ties;
  return footballPoints;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
