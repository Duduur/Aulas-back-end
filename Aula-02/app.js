/*********************************************************************************************************************************************************************************
 * Objetivo: Manipular a entrada e saida de dados pelo Node.js                                                                                                                   *
 * Data:31/07/2024                                                                                                                                                               *
 * Autor: Eduardo                                                                                                                                                                *
 * Versão: 1.0                                                                                                                                                                   *
 *                                                                                                                                                                               *
**********************************************************************************************************************************************************************************/

//Import da biblioteca readline que será responsavel or manipular entradad de dados
    //via telado pelo terminal

var readline = require('readline')


//Cri uma interface para entrada de dados via teclado no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Permite retornar a entrada de dados fornecda pelo usuario no terminal.Isso acontece atrav´s de uma função de CallBack
entradaDeDados.question(' Digite seu nome:', function(nome){
    var nomeUsuario = nome
    entradaDeDados.question(' Digite seu e-mail:', function(email){
        var emailUsuario = email
         entradaDeDados.question(' Digite o nome do seu curso:', function (curso){
            var cursoUsuario = curso 
             console.log(` O email do usuario ${nomeUsuario} é ${emailUsuario} \n Ele é do curso de: ${cursoUsuario}`)
            entradaDeDados.close()
         })
    })
})


























