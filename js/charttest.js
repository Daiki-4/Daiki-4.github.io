//htmlからグラフを描画する要素を取得する
var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Pink'],
        datasets: [
            {
                type: 'bar', 
                label: 'hogehoge',
                data: [100, 31, 51, 5, 21, 151],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(223, 192, 122, 0.2)',
                    'rgba(70, 142, 237, 0.2)',
                    'rgba(79, 110, 12, 0.2)',
                ]
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});