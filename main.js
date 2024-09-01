
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contatoForm');
    const contatosTableBody = document.querySelector('#contatosTable tbody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nomeInput = document.getElementById('nome');
        const telefoneInput = document.getElementById('telefone');

        const nome = nomeInput.value.trim();
        const telefone = telefoneInput.value.trim();

        if (nome && telefone) {
            // Cria uma nova linha na tabela
            const tr = document.createElement('tr');

            const tdNome = document.createElement('td');
            tdNome.textContent = nome;
            tr.appendChild(tdNome);

            const tdTelefone = document.createElement('td');
            tdTelefone.textContent = telefone;
            tr.appendChild(tdTelefone);

            contatosTableBody.appendChild(tr);

            // Limpa os campos do formulário
            nomeInput.value = '';
            telefoneInput.value = '';
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
