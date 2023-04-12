function numberCity(...args){
    let cidades ="";
    for (cidade of args){
        cidades += " "+ cidade;
    }
    alert("Visitou estas: "+cidades+" cidades.")
}
numberCity("Braga","Madrid","Aveiro","Funchal")