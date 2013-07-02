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

function saveImage() {
    window.location = canvas.toDataURL('image/png');
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
    canvas.addEventListener('click', function() {
        var x = (Math.floor(mouse.x / size) * size) + 1;
        var y = (Math.floor(mouse.y / size) * size) + 1;

        var pixel = ctx.getImageData(mouse.x, mouse.y, size-1, size-1).data;
        pixel = ctx.getImageData(mouse.x, mouse.y, size-1, size-1).data;
        if (pixel[0] != 1) {
            ctx.fillStyle = 'rgba(1,1,1,1)';
        } else {
            ctx.fillStyle = 'rgba(255,255,255,1)';
        }
        ctx.fillRect(x, y, size-1, size-1);
    }, false);

    var saveButton = document.getElementById('save');
    if (saveButton.addEventListener) {
        saveButton.addEventListener('click', saveImage, false);
    } else if (saveButton.attachEvent) {
        saveButton.attachEvent('onclick', saveImage);
    }
}
window.onload = main;
