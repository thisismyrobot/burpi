function update() {
    $.get('/data', function(data) {
        var datasets = [];
        var json = JSON.parse(data);
        for(sensor in json) {
            datasets.push(json[sensor]);
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