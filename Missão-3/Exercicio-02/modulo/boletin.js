/******************************************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de funções 
    e utilização de estruturas de repetição
 * Data: 11/09/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/

function calculoMedia(n1, n2, n3, n4){
    let nota1 = n1
    let nota2 = n2
    let nota3 = n3
    let nota4 = n4
    let media
    if(!validarDados(nota1,nota2,nota3,nota4)){
        media = (nota1 + nota2 + nota3 + nota4) / 4
    }

    if(media != undefined){
        return media.toFixed(2)
    }else{
        return false
    }
}
function validarDados(al, prof, sexoA, sexoP, nomeCurso, nomeDiciplina, n1, n2, n3, n4){
    let aluno = al
    let professor = prof
    let sexoAluno = sexoA
    let sexoProf = sexoP
    let curso = nomeCurso
    let diciplina = nomeDiciplina
    let nota1 = n1
    let nota2 = n2
    let nota3 = n3
    let nota4 = n4
    let status = false

    if(aluno == '' || professor == '' || sexoAluno == '' || sexoProf == '' || curso == '' || diciplina == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        status = true
        console.log('ERRO --> Não é pode esquecer de anotar todos os dados')
    }else if(nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100 ){
        status = true
        console.log('ERRO --> Alguma nota está errada')
    }else{
        (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN (nota4))
    }



}
function classificacao(resultado){
    let media = resultado
    let classe

    if(media >= 70 ){
        classe = 'Aluno Aprovado'
    }else if(media < 50){
        classe ='Aluno reprovado' 
    }else if(media >=50 && media <= 69 ){
        classe ='Exame'
    }

    return classe
    
}
function exame(n5,media,){
    let nota5 = n5
    let antigaMedia = media
    let novaMedia

    if(classe = 'Exame'){
        if(!validarDados(nota5, antigaMedia)){
            novaMedia = (Number(nota5) + Number(antigaMedia)) /2
        }else{
            console.log('ERRO --> Não foi possivel realiazr ')
        }

        
    }return novaMedia.toFixed(2)
}

function mediaRecuperacao(mediaE){
    let mediaExame = mediaE
    let statusE

    if(mediaExame > 60){
        statusE = 'Aluno Aprovado'
    }else{
        statusE ='Aluno Reprovado' 

    }return statusE
}  

function sexoAluno(sexo){
    let genero = sexo
    let resultado
    if(genero.toUpperCase() == 'M'){
        resultado = 'o'
    }else if (genero.toUpperCase() == 'F'){
        resultado = 'a'
    }else{
        resultado = 'ERRO --> GENERO INVALIDO'
    }return resultado
    
}

function sexoProf(sexo){
    let genero = sexo
    let resultado
    if(genero.toUpperCase() == 'M'){
        genero = 'o'
    }else if (genero.toUpperCase() == 'F'){
        genero = 'a'
    }else{
        genero = 'ERRO --> GENERO INVALIDO'
    }return genero 
    
    
}



module.exports = {
    calculoMedia,
    validarDados,
    classificacao,
    exame,
    mediaRecuperacao,
    sexoAluno,
    sexoProf
}
