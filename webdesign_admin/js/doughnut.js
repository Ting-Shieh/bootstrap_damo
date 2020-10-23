var ctx = document.getElementById("doughnut-chart").getContext('2d');

var chart =  new Chart(ctx, {
    type: 'doughnut',
    data:{
        labels: ['Project1','Project2','Project3','Project4','Project5'],
        datasets:[
            {
                label:"Projects",
                backgroundColor: ['#f15025','#a610e5','#2b5cb9','#740d06',"#07775f"],
                data:[162,192,375,425,277]
            }
        ]
    },
    options:{
        legend:{display: true},
        title:{
            display: true,
            text:'Project Values'
        }
    }
});