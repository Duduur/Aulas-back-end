/******************************************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de funções 
    e utilização de estruturas de repetição
 * Data: 04/09/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/

//Função tradicional
function gerarNumerosSequenciais(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let contador
    let status = false

    //Chama a função de validação de dados
    if(!validarDados(numeroI, numeroF)){
        contador  = parseInt(numeroI)

        while(contador <= parseInt(numeroF)){
            status = true
            console.log(contador)
            //contador = contador + 1 
            //contador ++
            contador += 1 
        }
    }
    return status
}

//Arrow function
const gerarNovosNumerosSequencias = (numeroInicial, numeroFinal) => {
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = false

    if(!validarDados(numeroI, numeroF)){
        for(let contador = parseInt(numeroI); contador <= parseInt(numeroF); contador += 1){
            status = true
            console.log(contador)
        }
    }
    return status
}

//Função anonima
const validarDados = function(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = false

    //Validação de entrada de dados em branco
    if(numeroI == '' || numeroF == ''){
        status = true
        console.log('ERRO --> Preenchimento dos dados são obrigatórios.')
    // Validação de entrada de caraceres inválidos
    }else if(isNaN(numeroI) || isNaN (numeroF)){
        status = true
        console.log('ERRO --> Não é permitido a entrada de letras.')
    }

    return status 
}


//console.log(validarDados(4,'a'))
//console.log(gerarNovosNumerosSequencias(9, 10))

module.exports = {
    gerarNovosNumerosSequencias,
    gerarNumerosSequenciais
}