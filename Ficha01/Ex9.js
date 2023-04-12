function convertToBinary1 (num) {
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    return (binary);
}
let num=prompt("Numero")
console.log(convertToBinary1(num));