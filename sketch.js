function setup() {
  createCanvas(windowWidth, windowHeight);
}

let timer = 0;
var circles = [];
function draw() {
  resizeCanvas(windowWidth, windowHeight)
  background(153, 194, 169);

  if (millis() >= 50 + timer) {
    circles.push( new Circle() );
    timer = millis();
  }
  for (var i = 0; i < circles.length; i++) {
    circles[i].showAndTell();
    if (!circles[i].withinRange())
      circles.splice(i, 1)
  }
}

class Circle {

  constructor(x, y) {
    this.x = random(-250, windowWidth-500);
    this.y = random(-250, windowHeight-500);
    this.vx = random(1, 3.5);
    this.vy = random(0.5, 1.5);
    this.size = random(2, 10);
    this.alpha = 0;
    this.maxAlpha = random(10, 200);
    this.fillAlpha = 0;
    this.r = 10;
    this.g = 108;
    this.b = 116;
    this.minSize = 0.1;
    this.maxSize = random(25, 75);
  }

  show() {
    stroke(this.r, this.g, this.b, this.alpha);
    if(this.cursorNearbyStrokeUpdate()) {
      if (this.fillAlpha < 100)
        this.fillAlpha += 2;
    } else {
      if (this.fillAlpha > 0)
        this.fillAlpha -= 2;
    }
    fill(this.r, this.g, this.b, this.fillAlpha);
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  tell() {
    this.size = constrain(this.size, this.minSize, this.maxSize);
    this.alpha = constrain(this.alpha, 25, this.maxAlpha);
    this.x += this.vx;
    this.y += this.vy;
    this.alpha += 1;
    this.size *= 1.01;
  }

  withinRange() {
    if (this.x > windowWidth + this.size || this.y > windowHeight + this.size) {
      return false;
    } return true;
  }

  cursorNearbyStrokeUpdate() {
    if (mouseX <= this.x + this.size * 1.25 && mouseY <= this.y + this.size * 1.25
     && mouseX >= this.x - this.size * 1.25 && mouseY >= this.y - this.size * 1.25) {
      if (this.r < 148)
        this.r *= 1.2;
      if (this.g < 227)
        this.g *= 1.2;
      if (this.b < 214)
        this.b *= 1.2;
      return true;
    } else {
      if (this.r > 10)
        this.r /= 1.2;
      if (this.g > 108)
        this.g /= 1.2;
      if (this.b > 116)
        this.b /= 1.2;
    }
  }

  showAndTell() {
    this.show();
    this.tell();
  }
}