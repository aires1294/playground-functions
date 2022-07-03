// Desafio 1 FEITOOOOOOOOO
function compareTrue(a, b) {
  let x = true;
  let y = false;
  if (a === true && b === true) {
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
  arrayNovo = sentence.split(' ');
  return arrayNovo;
}
/*console.log(splitSentence('go Trybe'));*/

// Desafio 4 FEITOOOOOOO

function concatName(array) {
  let arrayNovo = [];
  arrayNovo = array[array.length -1] + ', '+array[0];

  return arrayNovo;
}
/*console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));*/

// Desafio 5 FEITOOOOOOO
function footballPoints(wins, ties) {
  let somaPontos = 0;
  somaPontos = wins * 3 + ties;
  return somaPontos;
}
/*console.log(footballPoints(14, 8));*/

// Desafio 6 RESOLVIDO 
function highestCount(arrayNumeros) {
  var contador = 0;
  arrayNumeros.sort();
  /*console.log(arrayNumeros);*/

  for (index = 0; index < arrayNumeros.length; index += 1) {
      if (arrayNumeros[index] === arrayNumeros[0]  && arrayNumeros[arrayNumeros.length -1] <= 0){
         /* console.log('oi '+arrayNumeros[0]);*/
          contador = contador + 1;
          

      } else if (arrayNumeros[index] === arrayNumeros[arrayNumeros.length - 1] && arrayNumeros[arrayNumeros.length -1] > 0) {
          /*console.log('ola '+arrayNumeros[arrayNumeros.length -1]);*/
      contador = contador + 1;
    }
  }
  
  return contador;
}
/*console.log(highestCount([0, 0, 0]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([-2, -2, -1]));
console.log(highestCount([-1, -2, -1, -8, -8, -8]));*/

// Desafio 7 FEITOOOOO
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2) ){
      return 'cat2';
  } if (Math.abs(mouse - cat2) > Math.abs(mouse - cat1) ){
      return 'cat1';

  } else {
      return 'os gatos trombam e o rato foge';
  }
}
 /* console.log(catAndMouse(25, 20, 30)); */

// Desafio 8 FEITOOOOOOOOOO
function fizzBuzz(array) {
  novoArray = [];
  for (index = 0; index < array.length; index += 1){
      if (array[index] % 3 === 0 && array[index] % 5 === 0){
          novoArray.push('fizzBuzz');
          console.log('1');
          
      } else if (array[index] % 3 === 0){
          novoArray.push('fizz');
          console.log('2');
          
  } else if (array[index] % 5 === 0){
      novoArray.push('buzz');
      console.log('3');
      
  }  else {
      novoArray.push('bug!');
      console.log('4');
      
  } 
  
}
return novoArray;
}
/*console.log(fizzBuzz([2, 15, 7, 9, 45]));*/

// Desafio 9
function encode(senha) {
  var array = senha.split('');
  
  var senhaNova = [];
  for (index = 0; index < array.length; index +=1) {
     
  if(array[index] === 'a'){
      senhaNova.push('1');
  }  else if (array[index] === 'e'){
      senhaNova.push('2');
  } else if (array[index] === 'i'){
      senhaNova.push('3');
  } else if (array[index] === 'o'){
      senhaNova.push('4');
  }  else if (array[index] === 'u'){
      senhaNova.push('5');
  } else {
      senhaNova.push(array[index]);
  }
  }
  var arrayFrase = senhaNova.join([separator = '']);
  return arrayFrase;
}
console.log(encode("This is an?"));

function decode(senhaDecode) {
  var arraySegundo = senhaDecode.split('');
  
  var senhaSegundo = [];
  for (index = 0; index < arraySegundo.length; index +=1) {
     
  if(arraySegundo[index] === '1'){
      senhaSegundo.push('a');
  }  else if (arraySegundo[index] === '2'){
      senhaSegundo.push('e');
  } else if (arraySegundo[index] === '3'){
      senhaSegundo.push('i');
  } else if (arraySegundo[index] === '4'){
      senhaSegundo.push('o');
  }  else if (arraySegundo[index] === '5'){
      senhaSegundo.push('u');
  } else {
      senhaSegundo.push(arraySegundo[index]);
  }
  }
  var arraySegundo = senhaSegundo.join([separator = '']);
  return arraySegundo;
}
console.log(decode("H4w 1r2 y45 t4d1y?"));

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
