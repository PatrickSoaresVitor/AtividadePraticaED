/*function funcao(){
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = (document.getElementById("numero2").value)
    let sub = numero1
    let sub2 = numero2
    //alert("a subtração é " + sub)  antigo//
    // let é local e var é global//
    alert(`A subtração é ${sub}`)
    alert(`A subtração é ${sub2}`)
    
}*/

//import { dados } from "../../arquivo/dados.mjs"

//NOME; RA;IDADE; SEXO; MÉDIA e RESULTADO

let dados = []

let nome = prompt("Digite seu nome: ")
let ra = prompt("Digite seu RA: ")
let idade = prompt("Digite sua idade: ")
let media = prompt("Digite sua média: ")
let resultado = prompt("Digite seu resultado: ")

dados.push({
    nome: nome,
    ra: ra,
    idade: idade,
    media: media,
    resultado: resultado
})

console.log(dados)