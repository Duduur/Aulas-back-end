/******************************************************************************************************************
 * Objetivo: Desenvolver as funções para a empresa S.A
 * Data: 11/09/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/

var readline = require('readline')
var calculoIMC =  require('./modulo/calculoimc')


var entradaDeDados= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o seu peso: ", function(valor_peso){
    let peso = valor_peso
    entradaDeDados.question("Digite a sua altura: ", function(valor_altura){
        let altura =  valor_altura
        let conteudo

        conteudo = calculoIMC.calcularIMC(peso, altura)

        console.log(conteudo)

        if(conteudo != false){
            console.log(calculoIMC.classificacaoIMC(conteudo))
        }else{
            console.log('Não foi possivel calcular o IMC, Digite novamente')
        }
    })
})



