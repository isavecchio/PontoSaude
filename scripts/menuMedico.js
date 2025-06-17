// Função para logout
function logout() {
    if(confirm('Tem certeza que deseja sair da sua conta?')) {
        // Aqui você implementaria a lógica de logout
        // Por exemplo: limpar localStorage, redirecionar para login
        window.location.href = 'login.html';
    }
}

// Adicionando efeito de clique nos itens
document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        
        // Adiciona um efeito de "clicado" temporário
        this.style.backgroundColor = '#f8f9fa';
        setTimeout(() => {
            this.style.backgroundColor = 'white';
        }, 200);
    });
});

// Lógica para o status dropdown
const statusBadge = document.getElementById('status-badge');
const statusOptions = document.getElementById('status-options');

statusBadge.addEventListener('click', function(e) {
    e.stopPropagation();
    statusOptions.style.display = statusOptions.style.display === 'block' ? 'none' : 'block';
});

function changeStatus(status) {
    const badge = document.getElementById('status-badge');
    
    // Remove todas as classes de status
    badge.classList.remove('online', 'offline', 'ocupado');
    
    // Adiciona a classe correta e atualiza o texto
    switch(status) {
        case 'online':
            badge.textContent = 'Online';
            badge.classList.add('online');
            break;
        case 'offline':
            badge.textContent = 'Offline';
            badge.classList.add('offline');
            break;
        case 'ocupado':
            badge.textContent = 'Ocupado';
            badge.classList.add('ocupado');
            break;
    }
    
    // Fecha o menu de opções
    statusOptions.style.display = 'none';
    
    // Aqui você pode adicionar código para salvar o status no servidor
    // Exemplo: saveStatusToServer(status);
}

// Fecha o menu de status quando clicar em qualquer lugar fora
document.addEventListener('click', function() {
    statusOptions.style.display = 'none';
});