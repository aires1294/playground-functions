// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > Math.abs(lineB) - Math.abs(lineC) && lineB > Math.abs(lineA) - Math.abs(lineC) && lineC > Math.abs(lineB) - Math.abs(lineA)){
      return true;
  } else {
      return false;
  }
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let numbers = /\d+/g;
  let final = string.match(numbers);   
  let agua = 0;
  for (index = 0; index < final.length; index +=1){
      agua += Number(final[index]);
  }
  if (agua === 1) {
      return agua + ' copo de água';
    }
    if (agua > 1) {
      return agua + ' copos de água';
    }
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));


module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
