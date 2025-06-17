const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');

    // Esconde o botão quando o menu está aberto
    if (sidebar.classList.contains('open')) {
        menuToggle.classList.add('hide');
    }
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('open');
        menuToggle.classList.remove('hide');
    }
});