
// Number of circles in width
var numberOfCircles = 10;
var increase;
var iterator = 0;
var biggestRadius;

function setup() {
  createCanvas(windowWidth, windowHeight);

  increase = width/numberOfCircles;
  biggestRadius = width/12+40;
  noStroke();
}

function draw() {
  background(0);
  iterator ++;

  for (var x1 = 0; x1 < width+biggestRadius; x1+=biggestRadius) {
    for (var y1 = 0; y1 < height+biggestRadius; y1+=biggestRadius) {
      fill(190,233,232);
      polygon(x1, y1, noise(iterator/61) * biggestRadius, 6, HALF_PI);
      fill(98,182,203);
      polygon(x1, y1, noise(iterator/49) * biggestRadius-10, 6, HALF_PI);
      fill(27,73,101);
      polygon(x1, y1, noise(iterator/53) * biggestRadius-20, 6, HALF_PI);
      fill(202,233,255);
      polygon(x1, y1, noise(iterator/57) * biggestRadius-30, 6, HALF_PI);
      fill(95,168,211);
      polygon(x1, y1, noise(iterator/51) * biggestRadius-40, 6, HALF_PI);
    }
  }

  translate(biggestRadius/2, biggestRadius/2);

  for (var x2 = 0; x2 < width+biggestRadius; x2+=biggestRadius) {
    for (var y2 = 0; y2 < height+biggestRadius; y2+=biggestRadius) {
      fill(47,191,113);
      polygon(x2, y2, noise(iterator/48) * biggestRadius, 6, -HALF_PI);
      fill(140,216,103);
      polygon(x2, y2, noise(iterator/56) * biggestRadius-10, 6, -HALF_PI);
      fill(237,125,58);
      polygon(x2, y2, noise(iterator/59) * biggestRadius-20, 6, -HALF_PI);
      fill(239,45,86);
      polygon(x2, y2, noise(iterator/52) * biggestRadius-30, 6, -HALF_PI);
      fill(54,53,55);
      polygon(x2, y2, noise(iterator/54) * biggestRadius-40, 6, -HALF_PI);
    }
  }

}

function polygon(x, y, radius, npoints, startAngle) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = startAngle; a < TWO_PI+startAngle; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
