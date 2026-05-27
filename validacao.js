// Seleciona o formulário
const formulario = document.getElementById("formulario");

// Adiciona o evento de submit
formulario.addEventListener("submit", function(event) {

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;

    // Seleciona o elemento de erro
    const erro = document.getElementById("erro");

    // Limpa mensagens anteriores
    erro.textContent = "";

    // Validações
    if (nome.trim() === "") {
        event.preventDefault();
        erro.textContent = "O nome não pode estar vazio.";
        return;
    }

    if (!email.includes("@")) {
        event.preventDefault();
        erro.textContent = "O email deve conter @.";
        return;
    }

    if (idade <= 0) {
        event.preventDefault();
        erro.textContent = "A idade deve ser maior que 0.";
        return;
    }

    erro.textContent = "Formulário enviado com sucesso!";
});
