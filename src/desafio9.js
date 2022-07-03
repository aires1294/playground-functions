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
    
  


let array = 'Hoje tem loucura';
let arrayNovo = array.split('');
console.log(arrayNovo);
let arrayAgora = arrayNovo.join([separator = ' ']);
console.log(arrayAgora);
