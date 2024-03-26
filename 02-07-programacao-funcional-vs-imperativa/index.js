var pessoa1 = {
    nome: "Lucas",
    idade: 17
}
 // função pura - função que gera outros dados mas mantem os valores originais
function tempoRestanteParaMaior(pessoa){
    return 18 - pessoa.idade
}

// função que altera os dados
function alteraIdade(pessoa){
    pessoa.idade += 1
}

alteraIdade(pessoa1)
var anosRestante = tempoRestanteParaMaior(pessoa1)

console.log(anosRestante)