function cumprimentar(nome = "mergulhador"){
    console.log("Boa Noite, " + nome + "!")
}

cumprimentar("Elton")
cumprimentar()

function beijar(nome = 'mergulhador'){
    return 'Um grande beijo, ' + nome
}

var beijando = beijar()
console.log(beijando)

var beijando = beijar("Melissa")
console.log(beijando)