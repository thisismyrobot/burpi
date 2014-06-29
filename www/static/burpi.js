function update() {
    var d1 = [];
    for (var i = 0; i < 14; i += 0.5) {
        d1.push([i, Math.sin(i)]);
    }
    $.plot("#chart-placeholder", [ d1 ]);
}

$(document).ready(function() {
    setInterval(function() {
        update();
    }, 1000);
    update();
});