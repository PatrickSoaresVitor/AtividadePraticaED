import { bubbleSortObj } from "../bobble-sort-obj.mjs";
import { selectionSortObj } from "../selection-sort-obj.mjs";

// ===== Modelo de dados =====
const alunos = []; 

function calcularResultado(media){ return Number(media) >= 6 ? "Aprovado" : "Reprovado"; }

function cadastrarAluno({nome, ra, idade, sexo, media}){
  const aluno = {
    nome: String(nome||'').trim(),
    ra: Number(ra),
    idade: Number(idade),
    sexo: String(sexo||'').trim(),
    media: Number(media),
    resultado: calcularResultado(media)
  };
  alunos.push(aluno);
  renderTabela(alunos);
}

// ===== Ordenações específicas exigidas =====
// 1) Crescente por Nome (Bubble)
function ordenarPorNomeCrescente(list){
  return bubbleSortObj(list, (a, b) => {
    return a.nome.localeCompare(b.nome, 'pt-BR', {sensitivity: 'base'});
  });
}

// 2) Decrescente por RA (Selection)
function ordenarPorRADecrescente(list){
  return selectionSortObj(list, (a, b) => a.ra > b.ra);
}

// 3) Aprovados por Nome (crescente)
function relatorioAprovadosPorNome(list){
  const aprovados = [];
  for(const a of list){ if(a.resultado === 'Aprovado') aprovados.push(a); }
  return ordenarPorNomeCrescente(aprovados);
}

// ===== Render =====
const tbody = document.getElementById('tbody');
const stats = document.getElementById('stats');

function escapeHtml(str){ return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[s])); }

function formatAluno(a){
  return `<tr>
    <td>${escapeHtml(a.nome)}</td>
    <td>${a.ra}</td>
    <td>${a.idade}</td>
    <td>${escapeHtml(a.sexo)}</td>
    <td>${a.media.toFixed(1)}</td>
    <td>${a.resultado === 'Aprovado' ? '<span class="pill ok">Aprovado</span>' : '<span class="pill no">Reprovado</span>'}</td>
  </tr>`;
}

function renderTabela(list){
  if(!list || list.length === 0){
    tbody.innerHTML = '<tr><td colspan="6" class="muted">Sem dados.</td></tr>';
    stats.textContent = '0 registro(s)';
    return;
  }
  let html = '';
  for(const a of list){ html += formatAluno(a); }
  tbody.innerHTML = html;
  stats.textContent = `${list.length} registro(s)`;
}

// ===== UI Handlers =====
const nome = document.getElementById('nome');
const ra = document.getElementById('ra');
const idade = document.getElementById('idade');
const sexo = document.getElementById('sexo');
const media = document.getElementById('media');

document.getElementById('btn-add')?.addEventListener('click', () => {
  if(!nome.value.trim() || !ra.value || !idade.value || !sexo.value || media.value===''){
    alert('Preencha todos os campos.'); return;
  }
  if(Number(media.value) < 0 || Number(media.value) > 10){
    alert('A média deve estar entre 0 e 10.'); return;
  }
  cadastrarAluno({ nome:nome.value, ra:ra.value, idade:idade.value, sexo:sexo.value, media:media.value });
  nome.value = ra.value = idade.value = media.value = ''; sexo.value = ''; nome.focus();
});

document.getElementById('btn-clear')?.addEventListener('click', () => {
  if(confirm('Deseja limpar todos os registros?')){
    alunos.length = 0;
    renderTabela(alunos);
  }
});

document.getElementById('btn-nome')?.addEventListener('click', () => {
  renderTabela(ordenarPorNomeCrescente(alunos));
});

document.getElementById('btn-ra')?.addEventListener('click', () => {
  renderTabela(ordenarPorRADecrescente(alunos));
});

document.getElementById('btn-aprov')?.addEventListener('click', () => {
  renderTabela(relatorioAprovadosPorNome(alunos));
});

document.getElementById('btn-lista')?.addEventListener('click', () => {
  renderTabela(alunos);
});

document.getElementById('btn-exemplo')?.addEventListener('click', () => {
  const exemplos = [
    {nome:'Ana Silva', ra:20250003, idade:20, sexo:'F', media:8.4},
    {nome:'Carlos Pereira', ra:20250001, idade:22, sexo:'M', media:5.7},
    {nome:'Beatriz Santos', ra:20250007, idade:19, sexo:'F', media:6.0},
    {nome:'Diego Alves', ra:20250002, idade:23, sexo:'M', media:9.1},
    {nome:'Érica Nunes', ra:20250005, idade:21, sexo:'F', media:7.2},
  ];
  for (const e of exemplos) cadastrarAluno(e);
});

// Inicial
renderTabela(alunos);

// ========= Utilidades de suporte =========

const DELIMITADOR_CSV = ';';

function exportarCSV(lista){
  const rows = [
    ['Nome','RA','Idade','Sexo','Média','Resultado'],
    ...lista.map(a => [
      a.nome,
      String(a.ra),
      String(a.idade),
      a.sexo,
      a.media.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
      a.resultado
    ])
  ];

  const csv = rows
    .map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(DELIMITADOR_CSV))
    .join('\r\n');

  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'alunos.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function coletarListaDaTabela(){
  const trs = document.querySelectorAll('#tbody tr');
  const lista = [];
  trs.forEach(tr => {
    const tds = tr.querySelectorAll('td');
    if (tds.length === 6 && !tds[0].classList.contains('muted')) {
      const mediaNorm = Number(
        tds[4].textContent.trim()
          .replace(/\./g,'')      
          .replace(',', '.')      
      );
      lista.push({
        nome: tds[0].textContent.trim(),
        ra:   tds[1].textContent.trim(),
        idade:tds[2].textContent.trim(),
        sexo: tds[3].textContent.trim(),
        media: isNaN(mediaNorm) ? 0 : mediaNorm,
        resultado: tds[5].textContent.includes('Aprovado') ? 'Aprovado' : 'Reprovado'
      });
    }
  });
  return lista;
}

// Listeners da barra de suporte
document.getElementById('btn-export')?.addEventListener('click', () => {
  const visivel = coletarListaDaTabela();
  exportarCSV(visivel.length ? visivel : alunos);
});

document.getElementById('btn-print')?.addEventListener('click', () => {
  window.print();
});

document.getElementById('btn-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
