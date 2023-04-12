function calcFactorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i += 1) {
      product *= i;
    }
    return product;
  }
  
  alert(calcFactorial(0));
  alert(calcFactorial(5));
  alert(calcFactorial(6));