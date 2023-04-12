function pow(x, n) {
    if (Number.isNaN(x)) {
        return 'A base deve ser um número';
    } else if (Number.isNaN(n) || !Number.isInteger(n) || n <= 1) {
        return 'O expoente deve ser um número inteiro acima de 1';
    } else {
        return x ** n;
    }
}

const base = +prompt('Base');
const exponent = +prompt('Expoente');

alert(pow(base, exponent));