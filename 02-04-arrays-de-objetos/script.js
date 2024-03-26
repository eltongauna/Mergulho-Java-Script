var pessoa1 = {
    nome: "Elton",
    idade: 41
}

var pessoa2 = {
    nome: "Melissa",
    idade: 5
}

var pessoa3 = {
    nome: "Azeilde",
    idade: 40
}

//lista(array) de strings
var array1 = [ "Elton", "Gaúna", "Galera"]
console.log(array1)

//lista de objetos
var array2 = [pessoa1, pessoa2, pessoa3]
console.log(array2)

//iteração sobre array, informando o indice e o atributo
console.log(array2[0].nome)

//iteração sobre uma lista com "for"
for (var pessoa of array2) {
    console.log(pessoa.nome);
    
}