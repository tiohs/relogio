'use strict'

function hora(){
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if(horas.toString().length == 1){
        horas = '0' + horas
    }
    if(minutos.toString().length == 1){
        minutos = '0' + minutos
    }
    if(segundos.toString().length == 1){
        segundos = '0' + segundos
    }
    
    document.getElementById('hora').innerHTML = horas + ' : ' + minutos + ' : ' + segundos 
}

window.setInterval('hora()',1000)

function data(){
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth()+1
    var ano = data.getFullYear()

    if(mes.toString().length == 1){
        mes = '0' + mes
    }
    if(dia.toString().length == 1){
        dia = '0' + dia
    }

    document.getElementById('data').innerHTML = dia + ' / ' + mes + ' / ' + ano
}

window.setInterval('data()',1000)


function branco(){

    var $data = document.querySelector('#data')
    var $hora = document.querySelector('div#hora')
    var $corpo = document.querySelector('#corpo')
    var $titulo = document.querySelector('#titulo')


    $hora.style.color = 'black'
    document.body.style.background = 'white'
    $hora.style.background = 'white'
    $corpo.style.background = 'black'
    $data.style.background = 'white'
    $data.style.color = 'black'
    $titulo.style.color = 'black'
}

function preto(){
    //Esta função vai mudar o tema de branco para preto
   
    var $data = document.querySelector('#data')
    var $hora = document.querySelector('div#hora')
    var $corpo = document.querySelector('#corpo')
    var $titulo = document.querySelector('#titulo')

    document.body.style.background = 'black' // Este comando vai trocar a cor do BODY de branco para preto
    $corpo.style.background = 'white'
    $data.style.background = 'black'
    $data.style.color = 'white'
    $hora.style.color = 'white'
    $hora.style.background = 'black'
    $corpo.style.boxShadow = '1px 5px 52px white'
    $titulo.style.color = 'white'
}




