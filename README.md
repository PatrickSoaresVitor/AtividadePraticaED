# Atividade Prática ED – JS

## Estrutura
AtividadePraticaED/

├─ frontend/

│  ├─ bobble-sort-obj.mjs

│  ├─ selection-sort-obj.mjs

│  └─ src/

│     ├─ index.html

│     ├─ script.mjs  (type="module"; importa os módulos de ordenação)

│     └─ stylo.css



## Como rodar
1. Abra `AtividadePraticaED/frontend/src/index.html` no navegador (duplo clique).

   - Se preferir, use o **Live Server** do VS Code para servir como http.

2. Cadastre alunos ou clique em **Popular Exemplos** e gere os relatórios: 

   - **Nome ↑ (Bubble)**

   - **RA ↓ (Selection)**

   - **Aprovados • Nome ↑**


## Implementação (sem Array.sort())
- `frontend/bobble-sort-obj.mjs` – bubble sort de objetos com `compareFn(a,b)` → number

- `frontend/selection-sort-obj.mjs` – selection sort de objetos com `fnBetter(a,b)` → boolean

- `frontend/src/script.mjs` – integra a UI, contém o array de objetos e as operações exigidas.



- **Resultado** é calculado automaticamente: média ≥ 6.0 ⇒ "Aprovado".


