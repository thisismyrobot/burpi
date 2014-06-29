function update() {
    $.get('/data', function(data) {
        var datasets = [];
        for(sensor in data) {
            datasets.push(data[sensor]);
        }
        $.plot("#chart-placeholder", datasets);
    });
}

$(document).ready(function() {
    setInterval(function() {
        update();
    }, 10000);
    update();
});
