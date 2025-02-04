document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input"); // Campo de entrada de nomes
    const addButton = document.querySelector("button"); // Botão "Adicionar"
    const sortearButton = document.querySelector("button img[alt='Ícone para sortear']").parentElement; // Botão de sortear amigo
    const listaNomes = document.querySelector("ul"); // Lista de nomes
    const resultado = document.getElementById("resultado"); // Exibição do nome sorteado

    let nomes = [];

    // Adiciona um nome à lista
    addButton.addEventListener("click", () => {
        adicionarNome();
    });

    // Permite adicionar ao pressionar Enter
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            adicionarNome();
        }
    });

    // Realiza o sorteio ao clicar no botão existente
    sortearButton.addEventListener("click", () => {
        if (nomes.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear!");
            return;
        }
        
        const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
        resultado.textContent = `Nome sorteado: ${sorteado}`;
    });

    function adicionarNome() {
        const nome = input.value.trim();
        if (nome && !nomes.includes(nome)) {
            nomes.push(nome);
            atualizarLista();
            input.value = "";
        }
    }

    function atualizarLista() {
        listaNomes.innerHTML = ""; // Limpa a lista antes de atualizar
        nomes.forEach(nome => {
            const item = document.createElement("li");
            item.textContent = nome;
            listaNomes.appendChild(item);
        });
    }
});
