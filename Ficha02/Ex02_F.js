function showNumbers(a, b) {
    let result = '';
    for (let i = a; i < b; i += 1) {
      result += i;
    }
    alert(result);
  }
  
  const a = +prompt('Qual o primeiro numero');
  const b = +prompt('Qual o segundo numero');
  
  showNumbers(a, b);