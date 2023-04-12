let n = prompt("Qual o numero");

let isPalindromo = number =>{
    let number1 =String(number);
    let reversed="";
    for(let i=number1.length-1;i>=0;i--){
        reversed+=number1[i]
    }
    if (number1 ==reversed){
        return true;
    }else{
        return false;
    }
}

alert(isPalindromo(n));