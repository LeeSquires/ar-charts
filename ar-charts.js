<script async src="https://cdn.jsdelivr.net/npm/chart.js"></script>

const data = {
    labels : ["Maintenance-led Contracts","Management-led Contracts","Development"],
    datasets: [
        {
        label: '2020',
        data: [536.9, 258.5, 15.6],
        backgroundColor: '#db042c',
        borderColor: '#fff',
        borderWidth: 2,
        },
        {
        label: '2019',
        data: [660.7, 184.0, 39.5],
        borderColor: '#db042c',
        borderWidth: 2,
        backgroundColor: '#fff'
        }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        indexAxis: 'y',
    },
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: "Revenue",
        },
    }
};
