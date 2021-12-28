
class Mathematicks {
    static a = 10;
    static b = 20;
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    get calculateArea() {
        return this.a * this.b
    }
}

class Triangle extends Mathematicks {
    a = 20;
    b = 40;
    constructor(a, b, c) {
        super(a, b, c)
        this.c = c
    }

    calculateArea() {
        return this.a * this.b * this.c
    }
}

class Trapezia extends Triangle {
    calculateArea() {
        return (this.a + this.b) * this.c
    }
}

const square = new Mathematicks(100, 100)
const triangle = new Triangle(100, 100, 200)
const trapezia = new Trapezia(100, 100, 200)

console.log(triangle)
// console.log(triangle.calculateArea())
// console.log(trapezia.calculateArea())

