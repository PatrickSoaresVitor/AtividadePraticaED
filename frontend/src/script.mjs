import promptSync from 'prompt-sync';
import { bubbleSort } from '../bobble-sort-obj.mjs';
const prompt = promptSync();
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
let x
do{
     x = prompt(" \n1 - adicionar aluno, \n2 - listar alunos, \n3 - ordenar alunos por nome, \n0 - sair \n escolha: ")
     switch(x){
        case '1': 
            let nome = prompt("Digite seu nome: ")
            let ra = Number(prompt("Digite seu RA: "))
            let idade = Number(prompt("Digite sua idade: "))
            let media = Number(prompt("Digite sua média: "))
            let resultado = prompt("Digite seu resultado: ")
            dados.push({
                nome: nome,
                ra: ra,
                idade: idade,
                media: media,
                resultado: resultado
            })
            console.log("Aluno adicionado com sucesso!")
            
        break
        case '2':
            console.log("Listando alunos...")
            for(let i = 0; i < dados.length; i++){
                console.log("-------------------------")
                console.log(`Nome: ${dados[i].nome}`)
                console.log(`RA: ${dados[i].ra}`)
                console.log(`Idade: ${dados[i].idade}`)
                console.log(`Média: ${dados[i].media}`)
                console.log(`Resultado: ${dados[i].resultado}`)
                console.log("-------------------------")
            }

        break
        case '3':
            console.log("Ordenando por nome...")
            bubbleSort(dados, (elem1, elem2) => elem1.nome > elem2.nome)
            console.log("Alunos ordenados por nome com sucesso!")
            
        break
        case '0':
            console.log("Saindo...")
        break
        default:
            console.log("Opção inválida!")
        break
     }
}while(x != 0)
