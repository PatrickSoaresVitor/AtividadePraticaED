// selection-sort (objetos) – implementado manualmente, sem Array.sort()
// Exporta uma função genérica que recebe uma lista e um predicado de "melhor" (fnBetter).
// fnBetter(a, b) deve retornar true quando 'a' é melhor que 'b' segundo o critério desejado.
export function selectionSortObj(list, fnBetter){
  if (typeof fnBetter !== "function") {
    throw new TypeError("fnBetter deve ser uma função (a, b) => boolean");
  }
  const arr = list.map(x => ({...x})); // cópia rasa
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let best = i;
    for (let j = i + 1; j < n; j++) {
      if (fnBetter(arr[j], arr[best])) best = j;
    }
    if (best !== i) {
      const tmp = arr[i];
      arr[i] = arr[best];
      arr[best] = tmp;
    }
  }
  return arr;
}
