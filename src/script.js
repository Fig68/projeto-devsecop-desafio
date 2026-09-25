// Busca tarefas do banco simulado
fetch('db.json')
.then(response => response.json())
.then(data => {
 
document.getElementById('db-status').textContent =
data.status;
 
const list = document.getElementById('task-list');
 
data.itens.forEach(item => {
const li = document.createElement('li');
li.textContent = item.task;
list.appendChild(li);
});
 
})
.catch(() => {
document.getElementById('db-status').textContent =
'Erro ao carregar dados';
});
 
// Adiciona nova tarefa
function addTask() {
 
const input = document.getElementById('new-task');
const output = document.getElementById('output');
 
if (!input.value.trim()) {
return;
}
 
const li = document.createElement('li');
li.textContent = input.value;
 
output.appendChild(li);
 
console.log('Tarefa adicionada');
 
input.value = '';
}
