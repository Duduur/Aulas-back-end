/******************************************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de funções 
    e utilização de estruturas de repetição
 * Data: 18/09/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/

function validarDados(primeiraTabu, ultimaTabu, contadorInicial, contadorFinal){
    
    let tabuadaI = primeiraTabu
    let tabuadaF = ultimaTabu
    let inicial = contadorInicial
    let final = contadorFinal
    let status = false

    if(tabuadaI == '' || tabuadaF == '' || inicial == '' || final == ''){
        console.log('ERRO --> OBRIGATÓRIO O PREENCHIMENTO DE TODOS OS CAMPOS ')
        status = true
    }else if( isNaN(tabuadaI) || isNaN(tabuadaF) || isNaN(inicial) || isNaN(final)){
        console.log('ERRO --> É apenas permitido o uso de números')
        status= true
    }else if(tabuadaI <= 2 || tabuadaI >= 100 || tabuadaF <= 2 || tabuadaF >= 100){
        console.log('ERRO --> É apenas perimitido números entre 2 e 100')
        status = true
    }else if(inicial <=1 || inicial >= 50 && final <= 1 || final >= 50){
        console.log('ERRO --> A tabuada só pode ser calculada entre 1 e 50')
    }
    return status
}

function calculotabuada(primeiraTabu, ultimaTabu,contadorInicial, contadorFinal){
    let tabuadaI = primeiraTabu
    let tabuadaF = ultimaTabu
    let inicial = contadorInicial
    let final = contadorFinal
    let status = false
    let resultado


   if(!validarDados(tabuadaI,tabuadaF,inicial,final)){

    while(tabuadaI <= tabuadaF){
        console.log(`Tabuada do ${tabuadaI}`)

        inicial = contadorInicial
        while(inicial <= final){
            status = true
            resultado = Number(tabuadaI) * Number(inicial)
            console.log(`${tabuadaI} X ${inicial} = ${resultado}`)
            inicial += 1
        }
        console.log('')
        tabuadaI += 1
    }

}
return status
}


console.log(calculotabuada(3,9, 8, 10))