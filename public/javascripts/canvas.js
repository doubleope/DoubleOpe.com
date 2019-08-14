var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 70;
var minRadius = 5;

var colorArray = [
    '#00BFFF',
    '#0000FF',
    '#00FFFF',
    '#48D1CC',
    '#5F9EA0',
    '#B0E0E6',
    '#ADD8E6',
    '#87CEEB',
    '#4682B4',
];

console.log(colorArray.length);
window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        
    });



function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * 9)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
       
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        if ( this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }       
    
        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
            this.radius += 1;
            }
        } else if (this.radius > minRadius) {
            this.radius -=1;
        }

        this.draw();
    }
}


var circleArray = [];


for (var i = 0; i < 100; i++) {

    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    radius = 30;

    circleArray.push(new Circle(x, y, dx, dy, radius));

    
}

console.log(circleArray);

var circle = new Circle(200, 200, 3, 3, 10);


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    
    
    

   
}

animate();