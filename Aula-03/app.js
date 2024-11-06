/******************************************************************************************************************
 * Objetivo: Manipular tratamento de entrada de dados, conversão de tipos de dados, 
    através de um exercicio para
    calcular medias escolares e utilizar estuturas condicionais
 * Data: 07/08/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/
// necessario para a entrada de dados funcionar
var readline = require('readline')
//  Criar um objeto para receber a entrada de dados do usuario

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})
entradaDeDados.question('Digite o Nome do Aluno: ' , function(nome){
    // LET -> cria uma variavel local dentro de uma função

    let nomeAluno = nome
    entradaDeDados.question('Digite o nome do Curso: ', function (curso){
        let cursoAluno = curso
        entradaDeDados.question('Digite a nota 1: ', function(valor1){
            let nota1 = valor1
            entradaDeDados.question('Digite a nota 2: ', function(valor2){
                let nota2 = valor2
                entradaDeDados.question('Digite a nota 3: ', function(valor3){
                    let nota3 = valor3
                    entradaDeDados.question('Digite a nota 4: ', function(valor4){
                        let nota4 = valor4
                        let resultado
                        let situacao

                        /**
                          == 'verificar a igualdade entre dois conteudos'
                          === 'verificar a igualdade entre dois conteudos e a igualdade entre os tipos de dados'
                          ==! 'verificar a igualdade entre dois conteudos e a diferença entre os tipo de dados'
                          !== 'verificar a diferença entre dois conteudos e a igualdade dos tipos de dados'
                          != 'Verificar a diferença  entre dois conteudos
                          !=! 'verificar a diferença entre dois conteudos e a diferença entre dois tipos de dados (variavel)'
                          < 'Verificar se o valor é menor
                          > Verficar se o valor é maior
                          <= Verificar se o valor é menor ou se é igual
                          >= Verificar se o valor é maior ou se é igual 
                         */

                            /*  
                            Operadores Lógicos
                                E && AND 
                                OU || (pipe) OR
                                Não ! NOT
                             */

                            /**
                             Logica E:
                             V + F = F
                             V + V = V
                             F + F = F
                             */

                        // Validação de entrada de dados vazio
                        if(nomeAluno == '' || cursoAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){
                            console.log('ERRO, É obrigatório prencher todas as entadas.')
                        }else{ 
                            //isNaN  -> Serve para verificar se a variavel é um Numero (Obs: se não for numero retorna false)
                            
                            //Validação de caracteres inválidos
                            if(isNaN(nota1) == true || isNaN (nota2) || isNaN(nota3) || isNaN(nota4) ){
                                console.log('ERRO: É obrigatório a entrada de notas apenas com números')
                            }else{
                                // Valiação de entrada de valores somente de 0 a 10
                                if(nota1 < 0 || nota1> 10 || nota2 < 0 || nota2> 10  || nota3 < 0 || nota3> 10  || nota4 < 0 || nota4> 10  ) {
                                    console.log('ERRO: Não é permitido a entrada de valores menores que 10 e menores que 0. ')
                                }else{
                                    //calculo de media
                                    resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                                    //Processamento para encontar a situação final de um aluno
                                    if (resultado >= 7 ){
                                        situacao = 'Aprovado'
                                    }else{
                                        if (resultado >= 5 && resultado < 7){
                                        situacao = 'Recuperação'
                                    }else{
                                        if (resultado < 5 ){
                                       situacao = 'Reprovado'
                                        }
                                    }
                                    //Impressão de dados do aluno
                                } console.log(`*********Boletim do Aluno********* \n Nome : ${nomeAluno} \n Curso : ${cursoAluno} \n Notas da etapa: \n Nota 1 : ${nota1}\n Nota 2 : ${nota2} \n Nota 3 : ${nota3} \n Nota 4 : ${nota4} \n Media final ${resultado.toFixed(1)} \n  Situação: ${situacao}`)
                                entradaDeDados.close()
                            }   
                        }    
                    }
                })
            })
        })
     })
 })
})