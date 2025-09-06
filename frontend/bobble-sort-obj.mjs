export function bubbleSort(vetor, fnComp) {
    let trocou;
  
    do {
      trocou = false;
      for (let i = 0; i < vetor.length - 1; i++) {
        if (fnComp(vetor[i] , vetor[i + 1])) {
          [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
          trocou = true;
        }
      }
    } while (trocou);
  }
  
  import { dados } from '../arquivo/dados.mjs';

  console.time("Tempo de ordenação");
  bubbleSort(dados, (elem1, elem2) => 
      elem1.nome > elem2.nome);
  console.timeEnd("Tempo de ordenação");

  console.log(dados);