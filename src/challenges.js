// Desafio 1 FEITOOOOOOOOO
  function compareTrue(a, b) {
    let x = 'true'
    let y = 'false'
    if (a === true && b === true){
      return x;
    } else {
      return y;
    }
   
  }
  /*console.log(compareTrue(girafa = true, elefante = false));*/


// Desafio 2 FEITOOOOOOO
function calcArea(base, height) {
  let altura = (base * height) / 2;
  return altura;
  
}

/*console.log(calcArea(10, 5));
console.log(calcArea(50, 5));*/

// Desafio 3 FEITOOOOOOOOOOO
function splitSentence(sentence) {
    let arrayNovo = [];
    arrayNovo = sentence.split(" ");
    return arrayNovo;
    
}
/*console.log(splitSentence('go Trybe'));*/


// Desafio 4  
function concatName(array) {
  let arrayNovo = [];
  for (index = 0; index < array.length; index+=1){
    arrayNovo.push = array[]
  }
  // seu código aqui
}

// Desafio 5 FEITOOOOOOO
function footballPoints(wins, ties) {
  let somaPontos = 0;
  somaPontos = (wins * 3) + ties;
  return somaPontos;
}
/*console.log(footballPoints(14, 8));*/

// Desafio 6 FEITOOOOOOOO
function highestCount(arrayNumeros) {
  var contador = 0;
  arrayNumeros.sort();
  
  for (index = 0; index < arrayNumeros.length; index += 1){
    
    if (arrayNumeros[index] === arrayNumeros[arrayNumeros.length - 1]){
      
    contador = contador + 1;
   
  } 
  
  }
  /*console.log(contador);*/
  return contador;
  
}
/*console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));*/




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
