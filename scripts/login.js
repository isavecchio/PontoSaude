 document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    // Validação do login
    if (email === "doutorvinicius@pontosaude.com.br" && password === "12345") {
        // Redireciona para a página do doutor logado
        window.location.href = "doutor_logado.html";
    } else {
        // Mostra mensagem de erro
        errorMessage.style.display = "block";
    }
});