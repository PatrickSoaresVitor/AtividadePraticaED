// bubble-sort (objetos) – implementado manualmente, sem Array.sort()
// Exporta uma função genérica que recebe uma lista e um comparador.
// O comparador deve retornar > 0 quando a > b, < 0 quando a < b, 0 se igual.
export function bubbleSortObj(list, compareFn){
  if (typeof compareFn !== "function") {
    throw new TypeError("compareFn deve ser uma função (a, b) => number");
  }
  const arr = list.map(x => ({...x})); // cópia rasa para não mutar a lista original
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (compareFn(arr[j], arr[j + 1]) > 0) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
