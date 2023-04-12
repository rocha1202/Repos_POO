function showMultiples(a, b) {
  let result = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % 3 === 0) result += i;
  }
  alert(result);
}

const a = +prompt('Primeiro Numero');
const b = +prompt('Segundo Numero');

showMultiples(a, b);