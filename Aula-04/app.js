/******************************************************************************************************************
 * Objetivo: Realizar calculos matematicos das 4 operações basicas
 * Data: 28/08/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/
//Import do arquivo de funções (arquivo criado pelos programador)
var calculos = require("./modulo/calculos.js")

//import da biblioteca para realizar entrada de dados pelo terminal
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o valor 1: ', function(valor1){
    //String() -> converte uma variavel para o tipo de dados String
    //replace() -> permite localizar um caracter e substituir por outro
    let numero1 = String(valor1).replace(',','.')

    entradaDeDados.question('Digite o valor 2: ', function(valor2){
        let numero2 = String(valor2).replace(',','.')

        entradaDeDados.question('Digite a operação de calculo[SOMAR, SUBTRAIR, DIVIDIR, MULTIPLICAR]: ', function(operacao){
            let tipoCalculo = operacao
            let resultado

            if(numero1 == '' || numero2 == '' || tipoCalculo == ''){
                console.log('ERRO: É obrigatório todas as entradas de dados.')
            }else if(isNaN(numero1) || isNaN(numero2)){
                console.log('ERRO: É obrigatória a entrada de dados apenas numéricos nos valores')
            }else{

                //Processamneto dos calculos
                resultado = calculos.calculadora(numero1, numero2, tipoCalculo)
               

                // validação para tratar o erro de variavel indefinida
                if(resultado){
                    console.log(resultado)
                }
                
            
            }
        })
    })
})