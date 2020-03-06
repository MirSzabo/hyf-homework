class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    console.log(this.radius * 2);
  }
  getCircumference() {
    console.log(2 * Math.PI * this.radius);
  }
  getArea() {
    console.log(Math.PI * Math.pow(this.radius, 2));
  }
}

const circle = new Circle(10);
circle.getDiameter(); // 20
circle.getCircumference(); // 62.831
circle.getArea(); // 314.159
