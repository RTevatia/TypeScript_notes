"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a circle");
    }
}
// let shape = new Shape('red'); // Should not be allowed - so make it abstract class
let circle = new Circle(1, 'red');
circle.render();
//# sourceMappingURL=abstractClass.js.map