var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



var x = 200;
var y = 200
var dx = 4;
var dy = 4;
radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }

    if ( y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

animate();