import promptSync from 'prompt-sync';
import { bubbleSort } from '../bobble-sort-obj.mjs';
import { dados} from '../../arquivo/dados.mjs';
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
function ListandoAlunos(dados){
    for(let i = 0; i < dados.length; i++){
        console.log("-------------------------")
        console.log(`Nome: ${dados[i].nome}`)
        console.log(`RA: ${dados[i].ra}`)
        console.log(`Idade: ${dados[i].idade}`)
        console.log(`Média: ${dados[i].media}`)
        console.log(`Resultado: ${dados[i].resultado}`)
        console.log("-------------------------")
    }
}

let x
do{
     x = prompt(" \n1 - Cadastrar Alunos. \n2 - Relatório de Alunos. \n3 - Relatório de Alunos em ordem crescente por Nome. \n4 - Relatório de Alunos em ordem decrescente por RA.  \n5 - Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados \n0 - sair \n escolha: ")
     switch(x){
        case '1': 
            let nome = prompt("Digite o nome: ")
            let idade = Number(prompt("Digite a idade: "))
            let sexo = prompt("Digite o sexo: ")
            let media = Number(prompt("Digite a média: "))
            let resultado = prompt("Digite o resultado: ")
            dados.push({
                nome: nome,
                ra: dados.length + 1,
                idade: idade,
                sexo: sexo,
                media: media,
                resultado: resultado
            })
            console.log("Aluno adicionado com sucesso!")
            
        break
        case '2':
            console.log("Listando alunos...")
            ListandoAlunos(dados)
            console.log("Alunos listados com sucesso!")
        break
        case '3':
            console.log("Ordenando por nome...")
            bubbleSort(dados, (elem1, elem2) => elem1.nome.toLowerCase() > elem2.nome.toLowerCase())
            ListandoAlunos(dados)
            console.log("Alunos ordenados por nome com sucesso!")
            
        break
        case '4':
            console.log("Ordenando por RA de forma decrescente...")
            bubbleSort(dados, (elem1, elem2) => elem1.ra < elem2.ra)
            ListandoAlunos(dados)
            console.log("Alunos ordenados por RA com sucesso!")
        break
        case '5':
            console.log("Ordenando por nome apenas dos aprovados...")
            let aprovados = dados.filter((elem) => elem.resultado.toLowerCase() === "aprovado")
            bubbleSort(aprovados, (elem1, elem2) => elem1.nome > elem2.nome)
            ListandoAlunos(aprovados)
            console.log("Alunos aprovados ordenados por nome com sucesso!")
        break
        case '0':
            console.log("Saindo...")
        break
        default:
            console.log("Opção inválida!")
        break
     }
}while(x != 0)
