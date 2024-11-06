/*********************************************************************************************************************************************************************************
 * Objetivo: desenvolver um sistema que calcule juros composto                                                                                                                *
 * Data:07/08/2024                                                                                                                                                               *
 * Autor: Eduardo                                                                                                                                                                *
 * Versão: 1.0                                                                                                                                                                   *
 *                                                                                                                                                                               *
**********************************************************************************************************************************************************************************/

var readline = require('readline')
const { isNumberObject } = require('util/types')

var CalcularMontante = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

CalcularMontante.question(' Digite seu capital inicial:', function(capital){
    var capitalinicial = capital
    CalcularMontante.question(' Digite a taxa de juros anual (decimal):', function(taxa){
        var jurostaxa = taxa
         CalcularMontante.question(' Digite quantas vezes o juros e composto por ano:', function (n){
            var jurosanual = n
            CalcularMontante.question(' Digite quanto tempo em ano:', function (t){
                var tempoanual = t
                var montante = Number(capitalinicial) * (1 + Number(jurostaxa) / Number(jurosanual))** Number(jurosanual) * Number(tempoanual)
                console.log (montante)

            CalcularMontante.close()
           
            })
        })
    })
})














