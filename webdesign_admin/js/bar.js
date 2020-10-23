var ctx = document.getElementById("bar-chart").getContext('2d');

var chart =  new Chart(ctx, {
    type: 'bar',
    data:{
        labels: ['Project1','Project2','Project3','Project4'],
        datasets:[
            {
                labels:"Project Dataset",
                backgroundColor: ['#f15025','#a610e5','#2b5cb9','#740d06',],
                data:[162,192,375,425]
            }
        ]
    },
    options:{
        legend:{display: false},
        title:{
            display: true,
            text:'Project sales'
        }
    }
});