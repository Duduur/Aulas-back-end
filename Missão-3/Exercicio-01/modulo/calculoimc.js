/******************************************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de funções 
    e utilização de estruturas de repetição
 * Data: 11/09/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/

function validarDados(valorpeso, valoraltura){
    // fazer validacao negativo, 0 e vazio
    let peso = valorpeso
    let altura = valoraltura
    let status = false 

    if(peso == "" || altura == ""){
        status =  true
        console.log('ERRO --> Preenchimento dos dados são obrigatórios.')
    }else if (isNaN(peso) || isNaN(altura)){
        status = true
        console.log('ERRO --> Não é permitido a entrada de letras.')
    }else if(peso == 0 || altura == 0){
        status = true
        console.log('ERRO --> Não é possivel calcular com o 0 ')

    }return status

   
}

function calcularIMC(valor_peso, valor_altura){
    let peso = valor_peso
    let altura = valor_altura
    let resultado
    
    if(!validarDados(peso, altura)){
        resultado = peso / (altura * altura)
    }else{
        console.log('ERRO --> Tente novamente a conta')
    }
     
    if(resultado != undefined){
        return resultado
    }else{
        return false
    }

}

function classificacaoIMC(total){
    // fazer validacao negativo, 0 e vazio
    let resultado = total
    let classificacao

    if(resultado < 18.5){
        classificacao = ("Abaixo do peso")
    }else if(resultado >= 18.5 && resultado <= 24.9 ){
        classificacao = ('Classificação: Peso normal')
    }else if (resultado >= 25 && resultado <= 29.9){
        classificacao = ('Classificação: Acima do peso (sobrepeso)')
    }else if (resultado >= 30 && resultado <= 34.9){
        classificacao = ('Classificação: Obesidade I')
    }else if (resultado >= 35 && resultado <= 39.9){
        classificacao = ('Classificação: Obesidade II')
    }else if (resultado >= 40){
        classificacao = ('Classificação: Obesidade III')
    }
    return classificacao


}


module.exports = {
    classificacaoIMC,
    calcularIMC
}