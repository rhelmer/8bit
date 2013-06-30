function drawGrid(ctx, size) {
    for (var x = 0.5; x < 500; x += size) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 375);
    }
    for (var y = 0.5; y < 375; y += size) {
        ctx.moveTo(0, y);
        ctx.lineTo(500, y);
    }
    ctx.strokeStyle = "#eee";
    ctx.stroke();
}
function main() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var size = 30;
    drawGrid(ctx, size);

    var mouse = { x: 0, y: 0 }
    canvas.addEventListener('mousemove', function(evt) {
        if (!evt.hasOwnProperty('offsetX')) {
            evt.offsetX = evt.layerX - evt.currentTarget.offsetLeft;
            evt.offsetY = evt.layerY - evt.currentTarget.offsetTop;
        }
        mouse.x = evt.offsetX;
        mouse.y = evt.offsetY;
    });
    addEventListener('click', function() {
        var x = Math.floor(mouse.x / size) * size;
        var y = Math.floor(mouse.y / size) * size;
        ctx.fillRect(x, y, size, size);
        console.log('click:', x, y);
    }, false);
}
window.onload = main;
