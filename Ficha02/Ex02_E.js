let s = prompt("Qual o seu texto?")
let n = prompt("Quantas vezes quer escrever?")

function echo(s, n) {
    let result = '';
    for (let i = 0; i < n; i += 1) {
        result += s;
    }
    alert(result);
}


echo(s, n);