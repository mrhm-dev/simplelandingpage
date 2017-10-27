function Complex(real, imaginary) {
	this.real = real;
	this.imaginary = imaginary;
}

Complex.prototype = {
	constructor: Complex,
	add: function (that) {
		return new Complex(this.real + that.real, this.imaginary + that.imaginary);
	},
	mul: function (that) {
		return new Complex(this.real * that.real - this.imaginary * that.imaginary,
			this.real * that.imaginary + this.imaginary * that.real);
	},
	mag: function () {
		return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
	},
	neg: function () {
		return new Complex(-this.real, -this.imaginary);
	},
	toString: function () {
		return '{' + this.real + ',' + this.imaginary + '}';
	},
	equals: function (that) {
		return that != null &&
			that.constructor === Complex &&
			this.real === that.real && this.imaginary === that.imaginary;
	}
};

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

Complex.parse = function (text) {
	try {
		var m = Complex._format.exec(s);
		return new Complex(parseFloat(m[1]), parseFloat(m[2]));
	}catch (x) {
		throw new TypeError("Can't Parse");
	}
};

Complex._format = /^\{([^,]+),([^}]+)\}$/;

var c = new Complex(2, 3);
var d = new Complex(c.imaginary, c.real);
console.log(c.add(d).toString());
console.log(Complex.ZERO.toString());