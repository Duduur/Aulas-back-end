/******************************************************************************************************************
 * Objetivo: API para retornar dados de estados e cidades
 * Data: 06/11/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/

/*
    Para criar uma API devemos instalar:
        express         npm install express --save          -Serve para criar uma API
        cors            npm install cors --save             -Serve para configurar as permissões do header
        body-parser     npm install body-parser --save      -Serve para manipular os dados de entrada na API pelo body
*/

const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')

//Inicializando a utilização do express através da variável app
const app = express()

//request -> significa a chegada de dados da API
//response -> significa a saída de dados da API

app.use((request, response, next)=>{
    //Permissão de acesso para quem irá chamar a API
    response.header('Access-Control-Allow-Origin', '*') // de vode pode vir a requisição

    //Permissão de acesso para quais métodos a API irá responder 
    response.header('Access-Control-Allow-Methods', 'GET')

    //Ativa as configurações do header para o cors
    app.use(cors())

    next()
})

//EndPoint para retornar todos os estados (nome que a API será chamada)
app.get('/v1/estados-cidades/lista-estados-sigla', cors(), async function(resquest, response){

    //importe do arquivo de funções
    let estadosCidades = require('./modulo/funcoes.js')

    //chama a função que retorna todos os estados
    let dados = estadosCidades.getListaDeEstados()

    //Resposta da API com JSON e o status code
    response.status(200)
    response.json(dados)
})

//Executa a API, e faz com que fique aguardando novas requisições
app.listen('8080', function(){
    console.log('API funcionando e aguradando requisições')
})