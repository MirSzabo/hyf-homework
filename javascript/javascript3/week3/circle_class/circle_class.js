const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas.width);
console.log(canvas.height);

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, false);
    context.fillStyle = this.fillColor;
    context.fill();
  }
}

const circle1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
//circle1.draw();
const circle2 = new Circle(110, 110, 40, 0, 2 * Math.PI, "#7d998f");
//circle2.draw();
const circle3 = new Circle(200, 210, 80, 0, 2 * Math.PI, "#af5fb8");
//circle3.draw();

function drawRandomCircle() {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  const randomR = Math.random() * Math.floor(150);
  const randomColor = getRandomColor();

  const circleRandom = new Circle(
    randomX,
    randomY,
    randomR,
    0,
    2 * Math.PI,
    randomColor
  );
  circleRandom.draw();
}

//setInterval(drawRandomCircle, 0.5 * 1000);

function drawCircleAroundCursor(event) {
  const mousePositionX = event.clientX;
  const mousePositionY = event.clientY;
  const randomR = Math.random() * Math.floor(150);
  const randomColor = getRandomColor();

  const circleAroundMouse = new Circle(
    mousePositionX,
    mousePositionY,
    randomR,
    0,
    2 * Math.PI,
    randomColor
  );
  circleAroundMouse.draw();
}

window.addEventListener("mousemove", drawCircleAroundCursor);

//utility functions
function getRandomColor() {
  return "#" + (Math.random().toString(16) + "000000").substring(2, 8);
}
