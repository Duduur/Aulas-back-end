/***********************************************************************************************************************
 * Objetivo: arquivo responsável pelas funções de calculos matemáticos
 * Data: 28/08/2024
 * Autor: Eduardo
 * versão:1.0
 ***********************************************************************************************************************/
function calculadora(valor1, valor2, operacao){
    //Recebendo os dados dis argumentos da função
    let numero1 = valor1
    let numero2 = valor2
    let tipoCalculo = operacao
    let resultado

    //toUpperCase() -> Converter uma String para MAIUSCULO
    //toLowerCase() -> Converter uma String para mnusculoi
    if(tipoCalculo.toUpperCase() == 'SOMAR'){
    resultado = Number(numero1) + Number(numero2)
    }else if( tipoCalculo.toUpperCase()== 'SUBTRAIR'){
        resultado = Number(numero1) - Number(numero2)  
    }else if(tipoCalculo.toUpperCase()== 'MULTIPLICAR'){
        resultado = Number(numero1) * Number(numero2)
    }else if(tipoCalculo.toUpperCase()== 'DIVIDIR'){
        if(numero2 == 0){
         console.log('ERRO: Não é possivel realizar divisão por 0')
    }else{
        resultado = Number(numero1) / Number(numero2)
    }
    }else{
        console.log('ERRO: Escolha uma das operações disponibilizadas acima')

    }
    // Validação para validar se o retorno da função será um numero ou sera um boolean(false) caso não consiga processar
    // Sempre que se tem uma função é necessario retornar boolean
    if(resultado != undefined){
        return resultado
    }else{
        return false
    }
    
}

module.exports = {
    calculadora
}