/******************************************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de funções 
    e utilização de estruturas de repetição
 * Data: 25/09/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/
function calculoDeFatorial(numero){
    let fatorial = valor1
    let contador = fatorial
    let numFatorial = 1
    let status = false

    if(validarDados(fatorial)){

        while(contador >= 2){
            numFatorial *= contador
            contador -= 1
            status = true
        }
        console.log(`${fatorial}! = ${numFatorial}`)
    }

    return status
}

function validarDados(valor1){
    let fatorial = valor1
    let status = true

    if( fatorial === '' ){
        console.log('* ERRO --> Todos os campos devem ser prenchidos')
        status = false

    }else if( isNaN(fatorial)){
        console.log('* ERRO --> É apenaas permitido o uso de Numeros')
        status = false

    }else if(fatorial === 0){
        console.log('ERRO --> Não existe fatorial de 0')
        status = false      

    }else if(fatorial == 1){
        console.log('ERRO --> Não existe fatorial de 1')
        status = false
    }
    return status
}
console.log(calculoDeFatorial(6))