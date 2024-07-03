// var = variavel de escopo global
//  let = escopo local
//  const = escopo global, variavel que nao muda


// Case Sensitive = reconhece letras maiusculas e minusculas
/* 
Por Tag: getElementByTagName()
Por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
Por Seletor: querySelector()

camelcase= nomeCasaCarroCor (camelo)
id = #id
classe = .classe
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '25%'
email.style.width = '25%'

//validação de campo precisa de uma função, chamar através de eventos

function validaNome() {

    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
    } 
        else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {

    let txtEmail = document.querySelector('#txtEmail')
    
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
    }
        else {
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}


function validaAssunto() {

    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 200) {
        txtAssunto.innerHTML = '<h6>Texto muito grande, insira até 200 caracteres.</h6>'
        txtAssunto.style.color = 'red'
    }   
        else {
        txtAssunto.innerHTML = '<h6>Escreva até 200 caracteres.</h6>'
        txtAssunto.style.color = 'black'
        assuntoOk = true
    }

}

function enviar() {

    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar.')
    }
}


