const checkPerfect = function (num) {
    let temp = 0;
    for (let i = 1; i <= num / 2; i += 1) {
        if (num % i === 0) {
            temp += i;
        }
    }

    if (temp === num && temp !== 0) {
        return true;
    }
    return false;
};

let result;
do {
    const num = +prompt('Digite o número para verificar se é perfeito');
    result = checkPerfect(num);
} while (!result);

alert('O número é perfeito!');