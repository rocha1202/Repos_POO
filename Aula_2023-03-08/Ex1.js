let n = prompt("Qual tabuada deseja");

n=Number(n);
function showtabuada(){
    for(let i=1;i<11;i++){
       tab += n + " * " + i + " = "+ n*i +"\n";
    } 
    return tab
}
alert(showtabuada());