var eu = {
    nome: "Elton",
    idade: 17
}

function verificaIdade (pessoa){
    console.log("A idade de " + pessoa.nome + " é " + pessoa.idade)

    if(pessoa.idade >= 18){
        console.log(pessoa.nome + " é maior de idade!")
    }
    else{
        console.log(pessoa.nome + " é menor de idade!")
    }
}

verificaIdade(eu)