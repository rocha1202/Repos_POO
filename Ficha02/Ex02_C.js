function calculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        alert(`O resultado é ${num1 + num2}`);
        break;
      case '-':
        alert(`O resultado é ${num1 - num2}`);
        break;
      case '*':
        alert(`O resultado é ${num1 * num2}`);
        break;
      case '/':
        if (num2 === 0) {
          alert('Não é possível dividir por zero');
        } else {
          alert(`O resultado é ${num1 / num2}`);
        }
        break;
      default:
        alert('Operador Invalido!');
    }
  }
  
  const num1 = +prompt('Primeiro numero');
  const num2 = +prompt('Segundo numero');
  const operator = prompt('Operador(+,-,*,/)');
  
  calculator(num1, num2, operator);