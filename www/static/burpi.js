function date(epoch) {
    var date = new Date(0);
    date.setUTCSeconds(epoch);
    return date.getTime() - (new Date().getTimezoneOffset() * 60 * 1000);
}

function update() {
    $.get('/data', function(data) {
        var datasets = [];
        for(sensor in data) {
            for(i in data[sensor]) {
                data[sensor][i][0] = date(data[sensor][i][0]);
            }
            datasets.push(data[sensor]);
        }
        $.plot("#chart-placeholder", datasets, {
            xaxis: {
                mode: "time",
                timeformat: "%h:%M %d/%m",
                minTickSize: [10, "minute"]
            }
	});
    });
}

$(document).ready(function() {
    setInterval(function() {
        update();
    }, 60000);
    update();
});
