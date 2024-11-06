/******************************************************************************************************************
 * Objetivo: Arquivo responsavel pela criação ARRAY E JSON para ensinamento
 * 
 * Data: 11/09/2024
 * Autor: Eduardo
 * Versão: 1.0
******************************************************************************************************************/

var listaDeEstados =  require('./estados_cidades')
 
const getListaDeEstados = function(){
    let siglas = []
    let cidadeEstado = {}
    let listauf = listaDeEstados

    listauf.listaDeEstados.estados.forEach(function(item){
        siglas.push(item.sigla)
    })
    cidadeEstado.uf = siglas
    cidadeEstado.quantidade = siglas.length

    console.log(cidadeEstado)
}

const getDadosEstados = function(ufsigla){
    let uf = String(ufsigla).toUpperCase()
    let cidadeEstado = {}
    let listauf = listaDeEstados.listaDeEstados.estados

    listauf.forEach(function(item){
        if(String(item.sigla).toUpperCase() == uf){
            cidadeEstado.uf = item.sigla
            cidadeEstado.descricao = item.nome
            cidadeEstado.capital = item.capital
            cidadeEstado.regiao = item.regiao
        }
    })
    console.log(cidadeEstado)

}

const getCapitalEstados = function(ufcapital){
    let listaCapital = {}
    let capital = String(ufcapital).toUpperCase()
    let listauf = listaDeEstados.listaDeEstados.estados

    listauf.forEach(function(item){
        if(String(item.sigla).toUpperCase() == capital){
            listaCapital.uf = item.sigla
            listaCapital.descricao = item.nome
            listaCapital.capital = item.capital
        }
    })
    console.log(listaCapital)
}

const getEstadoRegiao = function(regiaoFiltro){
    let regiao = String(regiaoFiltro).toUpperCase()
    let listaUf = listaDeEstados.listaDeEstados.estados
    let estado = []
    let brasilestados = {}
    

    listaUf.forEach(function(item){
        if(String(item.regiao).toUpperCase() == regiao){
            let estadoRegiao = {}
            estadoRegiao.uf = item.sigla
            estadoRegiao.descricao = item.nome
            estado.push(estadoRegiao)
        }
    })
    brasilestados.regiao = regiao
    brasilestados.estado = estado

    console.log(brasilestados)

}

const getCapitalPais = function(){
    let listaCapitais = listaDeEstados.listaDeEstados.estados
    let capitaiS = []
    let capitalUF= {}

    listaCapitais.forEach(function(item){
        if(item.capital_pais){
            let listauf = {}
            listauf.capital_pais = item.capital_pais.capital
            listauf.uf = item.sigla
            listauf.descricao = item.nome
            listauf.capital = item.capital
            listauf.regiao = item.regiao
            listauf.capital_pais_ano_inicio = item.capital_pais.ano_inicio
            listauf.capital_pais_ano_inicio = item.capital_pais.ano_fim
            capitaiS.push(listauf)
            
        }
    })
    capitalUF.capitais = capitaiS

    console.log(capitalUF)
}

const getCidades = function(ufEstados){
    let listaCidades = String(ufEstados).toUpperCase()
    let listaUf = listaDeEstados.listaDeEstados.estados
    let cidades = []
    let cidadesEstados = {}

    listaUf.forEach(function(item){
        if(String(item.sigla).toUpperCase() == listaCidades){
            cidadesEstados.uf = item.sigla
            cidadesEstados.descricao = item.nome
            cidadesEstados.quantidade = item.cidades.length
            
           item.cidades.forEach(function(itemCidades){
                cidades.push(itemCidades.nome)
           })
            
        }
    })
    cidadesEstados.cidades = cidades

    console.log(cidadesEstados)
    
}

//getCidades('ba')
//getCapitalPais()
//getCapitalEstados('ba')