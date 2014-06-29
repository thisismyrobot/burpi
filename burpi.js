function update(chart) {
    // Global Line options
    var options = {
        animation: false,
        datasetFill : false,
    }

    var data = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [65,59,90,81,56,55,40]
            },
            {
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,100]
            }
        ]
    }
    chart.Line(data, options);
}

$(document).ready(function() {
    var ctx = $("#chart").get(0).getContext("2d");
    var burpiChart = new Chart(ctx);

    setInterval(function() {
        update(burpiChart);
    }, 1000);
    update(burpiChart);

});