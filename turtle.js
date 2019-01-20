// from: https://archive.cnx.org/contents/85310cba-5bbc-4f1d-b437-778a1aef9d02@2/turtle-graphics-with-the-html5-canvas
class Turtle {
	constructor(canvas) {
		this.x = 0;
		this.y = 0;
		this.angleInRadians = 0;
		this.penDown = false;
		this.penColor = "#000000";
		this.lineWidth = 1;
		
		if (canvas && canvas.getContext) { // does the browser support 'canvas'?
			this.ct = canvas.getContext("2d"); // get drawing context
		} else {
			alert('You need a browser which supports the HTML5 canvas!');
		}
	}

	logPenStatus() {
		console.log('x=' + this.x + "; y=" + this.y + '; angle = ' + this.angle + '; penDown = ' + this.penDown);
	}

	forward(length) {
		// console.log('forward(' + length + ')');
		// this.logPenStatus();
		var x0 = this.x,
		    y0 = this.y;
		this.x += length * Math.sin(this.angleInRadians);
		this.y += length * Math.cos(this.angleInRadians);
		if (this.ct) {
		    if (this.penDown) {
		        //this.logPenStatus();
		        this.ct.beginPath();
		        this.ct.lineWidth = this.lineWidth;
		        this.ct.strokeStyle = this.penColor;
		        this.ct.moveTo(x0, y0);
		        this.ct.lineTo(this.x, this.y);
		        this.ct.stroke();
		    }
		} else {
		    this.ct.moveTo(this.x, this.y);
		}
		return this;
	};

	backward(length) {
		this.forward(-length);
		return this;
	};

	left(angleInDegrees) {
		// console.log('left(' + angleInDegrees + ')');
		// A complete circle, 360º, is equivalent to 2π radians  
		// angleInDegrees is an angle measure in degrees
		this.angleInRadians += angleInDegrees * Math.PI / 180.0;
		return this;
	};

	right(angleInDegrees) {
		this.left(-angleInDegrees);
		return this;
	};


	angle() {
		// the turtle status is hold in this.angleInRadians;
		// degrees are often more convenient for the display
		return this.angleInRadians * 180.0 / Math.PI;
	};

	setAngle(angleInDegrees) {
		this.angleInRadians = angleInDegrees * Math.PI / 180.0;
		return this;	
	}

	getPos() {
		return [
			this.x,
			this.y, 
			this.angleInRadians
		];
	}

	setPos(pos) {
		this.x = pos[0];
		this.y = pos[1];
		this.angleInRadians = pos[2];
	}
}
