function primo(num) {                              //loop para verificar se o resto é 0
    for (var divisor = 2; divisor < num; divisor++) {
        if (num % divisor == 0){    //EX: se 10 dividir por 2 returna falso porque já não é primo
            return false;
            }
    }
    return true;
}

let determinadoNumero = prompt("Numero");

for (var i = 2; i < determinadoNumero; i++){        //loop dos numero
    if (primo(i)){  //só se for True
        console.log(i);
    }
}