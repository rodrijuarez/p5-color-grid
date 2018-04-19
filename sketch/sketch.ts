var sketch = (p: p5) => {
  p.preload = () => {};

  p.setup = () => {
    p.createCanvas(2550, 1440);
    p.noCursor();
  };

  p.windowResized = () => {
    p.resizeCanvas(2550, 1440);
  };

  p.draw = () => {
    p.colorMode(p.HSB, p.width, p.height, 100);

    let stepX = p.mouseX + 2;
    let stepY = p.mouseY + 2;

    for (gridY = 0; gridY < p.height; gridY += stepY) {
      for (gridX = 0; gridX < p.width; gridX += stepX) {
        p.fill(gridX, p.height - gridY, 100);
        p.rect(gridX, gridY, stepX, stepY);
      }
    }
  };
};

var sketchP = new p5(sketch);
