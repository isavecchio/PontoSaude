 // Função para alternar detalhes do log
function toggleDetails(logId) {
    const detailsRow = document.getElementById(`details-${logId}`);
    const icon = event.currentTarget.querySelector('td:last-child i');
    
    if (detailsRow.classList.contains('show')) {
        detailsRow.classList.remove('show');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        // Fecha outros detalhes abertos
        document.querySelectorAll('.log-details.show').forEach(row => {
            row.classList.remove('show');
            const rowId = row.id.split('-')[1];
            document.querySelector(`.log-entry[onclick="toggleDetails(${rowId})"] td:last-child i`)
                .classList.replace('fa-chevron-up', 'fa-chevron-down');
        });
        
        detailsRow.classList.add('show');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}

// Funções de filtro
function applyFilters() {
    console.log("Aplicando filtros...");
    // Implementação real faria uma requisição AJAX com os parâmetros
    alert('Filtros aplicados! (simulação)');
}

function resetFilters() {
    document.getElementById('dateFrom').value = '';
    document.getElementById('dateTo').value = '';
    document.getElementById('eventType').value = 'all';
    document.getElementById('userFilter').value = '';
    document.getElementById('ipFilter').value = '';
    document.getElementById('keywordFilter').value = '';
    applyFilters();
}

function exportLogs() {
    const format = prompt("Exportar como: (1) CSV, (2) JSON, (3) PDF", "1");
    
    if (format) {
        alert(`Logs exportados como ${format === '1' ? 'CSV' : format === '2' ? 'JSON' : 'PDF'} com sucesso!`);
        // Implementação real geraria o arquivo correspondente
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Configura data atual como padrão para o filtro "Até"
    const now = new Date();
    const today = now.toISOString().slice(0, 16);
    document.getElementById('dateTo').value = today;
});