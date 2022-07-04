// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB && lineA > Math.abs(lineB) - Math.abs(lineC) && lineB > Math.abs(lineA) - Math.abs(lineC) && lineC > Math.abs(lineB) - Math.abs(lineA)){
        return 'true';
    } else {
        return 'false';
    }
  }
  console.log(triangleCheck(10, 14, 8));