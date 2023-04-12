function checkPrime(num) {
    let isPrime = true;
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

const num = +prompt('Digite o número para verificar se é primo');

if (checkPrime(num)) {
    alert(`O numero ${num} é primo!`);
} else {
    alert(`O numero ${num} não é primo!`);
}