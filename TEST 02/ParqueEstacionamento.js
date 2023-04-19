gessList = ['00-CC-00', '01-CC-01', '02-CC-02', '03-CC-03', '04-CC-04', '05-CC-05', '06-CC-06', '07-CC-07', '08-CC-08', '09-CC-09']
parkList = []

let lotPark = parseInt(prompt(`Qual a lotação máxima?`))

function parkValidator(matricula, movimento) {

    if (movimento == "E") {
        if (gessList.includes(matricula) === true) {
            if (parkList.includes(matricula) == false) {
                if (lotPark > 0) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
    if (movimento == "S") {
        if (parkList.includes(matricula) == false) {
            return false
        }
    }
}
while (true) {
    let matricula = prompt(`Matricula:`);
    let movimento = prompt(`Movimento \n E - para entrada, S - para saída`).toUpperCase();
    
    if (parkValidator(matricula, movimento) === true) {
        alert("Movimento Concedido")
    } else {
        alert("Movimento NÂO Concedido")
    }

}