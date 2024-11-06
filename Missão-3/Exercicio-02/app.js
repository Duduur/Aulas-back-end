
var readline = require('readline')
var calculoIMC =  require('./modulo/calculoimc')


var entradaDeDados= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Digite o nome do Aluno')