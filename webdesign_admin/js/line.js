var ctx = document.getElementById("line-chart").getContext('2d');

var chart =  new Chart(ctx, {
    type: 'line',
    data:{
        labels: ['1月','2月','3月','4月','5月','6月','7月'],
        datasets:[
            {
                label:"Line Dataset",
                backgroundColor: 'rgba(111,2,25)',
                borderColor: 'rgba(16,11,12)',
                data:[0,10,5,2,20,30,45]
            }
        ]
    },
    options:{}
});