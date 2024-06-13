export function createGraphic(initialCurrencyValue, finalCurrencyValue, nomes) {

    const labels = nomes.split("/");

    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [`${labels[0]}`, `${labels[1]}`],
        datasets: [{
            label: 'DESVALORIÇÃO MONETÁRIA',
            data: [initialCurrencyValue, finalCurrencyValue],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
              ],
            hoverOffset: 4
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
    }
    });
}
