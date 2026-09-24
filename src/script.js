// Adiciona nova tarefa na tela
function addTask() {
    const input = document.getElementById('new-task');
    const output = document.getElementById('output');

    const li = document.createElement('li');
    li.innerText = input.value;
    output.appendChild(li);

    console.log("Tarefa adicionada: " + input.value);

    input.value = '';
}