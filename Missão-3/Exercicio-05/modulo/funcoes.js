
/******************************************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de funções 
    e utilização de estruturas de repetição
 * Data: 25/09/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/
function ListasImparPar(numeroI, numeroF) {

    let inicio = numeroI
    let final = numeroF
    let Par = 0
    let Impar = 0
    let status = false

    if (validarDados(inicio, final)) {
        status = true
        console.log('Números PARES')

        for (let contador = inicio; contador <= final; contador += 1) {
            if (contador % 2 === 0) {

                console.log(contador)
                Par += 1

            }
        }

        console.log(`Quantidade de números pares --> ${Par}`)

        console.log('')

        console.log('Números IMPARES')

        for (let contador = inicio; contador <= final; contador += 1) {
            if (contador % 2 !== 0) {

                console.log(contador)
                Impar += 1

            }
        }

        console.log(`Qtde de numeros impares encontrados --> ${Impar}`)


    }

    return status
}

function validarDados(numeroI, numeroF) {
    
    let inicio = numeroI
    let final = numeroF
    let status = true

    if (inicio == final) {
        console.log('ERRO --> Não é permitido a entrada de valores iguais')
        status = false
    } else if (inicio > final) {
        console.log('ERRO --> Numero inicial não pode ser maior que o final')
        status = false
    } else if (inicio < 0 && inicio > 500) {
        console.log('ERRO --> Valor incial deve estar entre 0 e 500')
        status = false
    } else if (final < 100 && final > 100) {
        console.log('ERR5 --> Valor final deve estra entre 100 e 1000')
        status = false
    } else if (inicio === '' || final === '') {
        console.log('ERRO --> É obrigatório o preenchimento das variaveis')
        status = false
    }

    return status
}

function calculoPares(numeroI, numeroF) {
    let inicio = numeroI
    let final = numeroF
    let Par = 0
    let status = false

    if (validarDados(inicio, final)) {
        status = true
        console.log('Lista de números PARES')

        for (let contador = inicio; contador <= final; contador += 1) {
            if (contador % 2 === 0) {

                console.log(contador)
                Par += 1

            }
        }

        console.log(`Qtde de números pares encontrados --> ${Par}`)
    }

    return false


}

function calculoimpares(numeroInicial, numeroFinal) {
    let inicio = numeroInicial
    let final = numeroFinal
    let Impar = 0
    let status = false

    if (validarDados(inicio, final)) {
        console.log('')

        console.log('Lista de números IMPARES')

        for (let contador = inicio; contador <= final; contador += 1) {
            if (contador % 2 !== 0) {
                console.log(contador)
                Impar += 1
                status = true

            }
        }

        console.log(`Qtde de números impares encontrados --> ${Impar}`)
    }
}

console.log(calculoPares(2, 100))