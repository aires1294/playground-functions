// Desafio 10
function techList(arrayTech, arrayPessoa) {
    let result = {};
    for (index = 0; index < arrayTech.length; index +=1){
        result[arrayTech[index]] = arrayPessoa;
        }
    return result;
   
  }
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));







// Desafio 10
function techList(arrayTech, nome) {
    let novoArray = [];
    arrayTech.sort();
    for (let i of arrayTech) {
      novoArray.push({ tech: i, name: nome });
    }
    if (arrayTech.length === 0) {
      return 'Vazio!';
    }
    return novoArray;
  }
  console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));