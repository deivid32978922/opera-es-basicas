let myChart = null;

function calcular() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerHTML = 
            '<div class="operation">Por favor, insira valores numéricos válidos.</div>';
        return;
    }

    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    
    let divisao = '∞';
    if (num2 !== 0) {
        divisao = num1 / num2;
    }

    document.getElementById('resultado').innerHTML = `
        <h3>Resultados</h3>
        <div class="operation">
            α + β = <span class="symbol">${num1} + ${num2}</span> = <span class="result">${soma}</span>
        </div>
        <div class="operation">
            α - β = <span class="symbol">${num1} - ${num2}</span> = <span class="result">${subtracao}</span>
        </div>
        <div class="operation">
            α × β = <span class="symbol">${num1} × ${num2}</span> = <span class="result">${multiplicacao}</span>
        </div>
        <div class="operation">
            α ÷ β = <span class="symbol">${num1} ÷ ${num2}</span> = <span class="result">${divisao}</span>
        </div>
    `;

    atualizarGrafico(num1, num2, soma, subtracao, multiplicacao, divisao);
}

function atualizarGrafico(num1, num2, soma, subtracao, multiplicacao, divisao) {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Valor 1', 'Valor 2', 'Soma', 'Subtração', 'Multiplicação', 'Divisão'],
            datasets: [{
                label: 'Valores',
                data: [num1, num2, soma, subtracao, multiplicacao, 
                       divisao === '∞' ? 0 : divisao],
                backgroundColor: [
                    '#ffd700',
                    '#ffed4a',
                    '#ffd700',
                    '#ffed4a',
                    '#ffd700',
                    '#ffed4a'
                ],
                borderColor: '#1a1a2e',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 215, 0, 0.1)'
                    },
                    ticks: {
                        color: '#e6e6e6'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 215, 0, 0.1)'
                    },
                    ticks: {
                        color: '#e6e6e6'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffd700'
                    }
                }
            }
        }
    });
} 