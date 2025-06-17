// Configuração do gráfico de pizza
const ctx = document.getElementById('attendanceChart').getContext('2d');
const attendanceChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Check-up', 'Exames', 'Raio-x', 'Outros'],
        datasets: [{
            data: [40, 25, 15, 20],
            backgroundColor: [
                '#088C7F',
                '#10465C',
                '#25AEA1',
                '#89D2CB'
            ],
            borderWidth: 0,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                }
            }
        },
        cutout: '65%',
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});

// Interação dos botões de período
const periodBtns = document.querySelectorAll('.period-btn');
periodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        periodBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelector('.report-period').textContent = `Período: ${btn.textContent}`;
        
        // Aqui você pode adicionar lógica para atualizar os dados conforme o período selecionado
        // Exemplo simplificado:
        if(btn.textContent === 'Hoje') {
            updateData([18, 12, 7, 4], [40, 25, 15, 20]);
        } else if(btn.textContent === 'Semana') {
            updateData([125, 80, 45, 30], [35, 30, 20, 15]);
        }
        // E assim por diante para outros períodos
    });
});

function updateData(statsData, distributionData) {
    // Atualiza os cards de estatísticas
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach((el, index) => {
        el.textContent = statsData[index].toString().padStart(2, '0');
    });
    
    // Atualiza o gráfico
    attendanceChart.data.datasets[0].data = distributionData;
    attendanceChart.update();
    
    // Atualiza a legenda (simplificado - na prática você teria dados dinâmicos)
    const legendItems = document.querySelectorAll('.legend-item');
    legendItems[0].textContent = ` Check-up (${distributionData[0]}%)`;
    legendItems[1].textContent = ` Exames (${distributionData[1]}%)`;
    legendItems[2].textContent = ` Raio-x (${distributionData[2]}%)`;
    legendItems[3].textContent = ` Outros (${distributionData[3]}%)`;
    
    // Adiciona as cores de volta
    legendItems[0].innerHTML = '<span class="legend-color color-checkup"></span>' + legendItems[0].textContent;
    legendItems[1].innerHTML = '<span class="legend-color color-exams"></span>' + legendItems[1].textContent;
    legendItems[2].innerHTML = '<span class="legend-color color-xray"></span>' + legendItems[2].textContent;
    legendItems[3].innerHTML = '<span class="legend-color color-others"></span>' + legendItems[3].textContent;
}