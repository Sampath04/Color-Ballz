var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d'); 


function Circle(x, y, dx, dy, r){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.r = r;
	var colorArray = [];
	for( var i=0; i < 6; i++){
		colorArray[i] = Math.ceil(Math.random() * 255);
	}
	this.draw = function() {
		c.beginPath();
		c.strokeStyle = 'rgba(' + colorArray[0] +',' + colorArray[1] + ',' + colorArray[2] +',' + '0.6)';
		c.fillStyle = 'rgba(' + colorArray[3] +',' + colorArray[4] + ',' + colorArray[5] +',' + '0.3)';
		c.lineWidth = 3;
		c.arc(this.x, this.y, this.r, Math.PI *2, false);
		c.stroke();
		c.fill();
	};
	this.update = function(){
		this.draw();
		this.x += this.dx;
		this.y += this.dy;
		if (this.x > (innerWidth - this.r)|| this.x < this.r){
			this.dx = -this.dx;
		}
		if (this.y > (innerHeight - this.r)|| this.y < this.r){
			this.dy = -this.dy;
		}
	}
}

var cA = []; 

for(var i=0; i<100; i++){;
	var cr = 50;
	var cx = Math.random() * (innerWidth - cr * 2) + cr;
	var cy = Math.random() * (innerHeight - cr * 2) + cr;
	var cdx = (Math.random() - 0.5) * 8 + 1;
	var cdy = (Math.random() - 0.5) * 8 + 1;
	cA.push(new Circle(cx, cy, cdx, cdy, cr)); 
}


function move(){
	requestAnimationFrame(move);
	c.clearRect(0,0,innerWidth,innerHeight);
	for(var i=0; i<cA.length; i++){
		cA[i].update();
	}
}

move();
